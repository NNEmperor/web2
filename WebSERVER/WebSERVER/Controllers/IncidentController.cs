using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebSERVER.Models;
using WebSERVER.Models.FrontModels;

namespace WebSERVER.Controllers
{
    [Route("api/Incident")]
    [ApiController]
    public class IncidentController : ControllerBase
    {
        private readonly WebServerContext _context;

        public IncidentController(WebServerContext context)
        {
            _context = context;
        }

        [Route("GetAllIncidents")]
        public async Task<ActionResult<IEnumerable<Incident>>> GetIncidents()
        {
            return await _context.Incidents.ToListAsync();
        }

        [Route("GetMineIncidents")]
        public async Task<ActionResult<IEnumerable<Incident>>> GetMyIncidents(string userName)
        {
            return await _context.Incidents.Where(x => x.UserNameCreator == userName).ToListAsync();
        }

        [Route("GetMyStatuses/{id}")]
        public async Task<ActionResult<string>> GetStatuses(string id)
        {
            List<Incident> temp = _context.Incidents.Where(x => x.UserNameCreator == id).ToList();
            int draft = 0;
            int canceled = 0;
            int executing = 0;
            int completed = 0;

            foreach (Incident i in temp)
            {
                if (i.Status == "Draft")
                    draft++;
                else if (i.Status == "Canceled")
                    canceled++;
                else if (i.Status == "Executing")
                    executing++;
                else if (i.Status == "Completed")
                    completed++;
            }
            return draft.ToString() + "/" + canceled.ToString() + "/" + executing.ToString() + "/" + completed.ToString();
        }

        [Route("GetById/{id}")]
        public async Task<ActionResult<Incident>> GetIncident(int id)
        {
            var Incidents = await _context.Incidents.FindAsync(id);

            if (Incidents == null)
            {
                return NotFound();
            }

            return Incidents;
        }

        [HttpPut]
        [Route("UpdateIncident")]
        public async Task<IActionResult> UpdateIncident(Incident Incident)
        {

            _context.Entry(Incident).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!IncidentsExists(Incident.Id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpPost]
        [Route("AddIncident")]
        public async Task<ActionResult<Incident>> AddIncident([FromBody]IncidentModel IncidentM)
        {
            bool c;
            if (IncidentM.Confirmed.Equals("on"))
                c = true;
            else
                c = false;

            Incident incident = new Incident()
            {
                Type = IncidentM.Type,
                Priority = int.Parse(IncidentM.Priority),
                Confirmed = c,
                Status = IncidentM.Status,
                ETA = DateTime.Parse(IncidentM.ETA),
                ATA = DateTime.Parse(IncidentM.ATA),
                ETR = DateTime.Parse(IncidentM.ETR),
                Outage = DateTime.Parse(IncidentM.Outage),
                EstimatedWorkStartTime = DateTime.Parse(IncidentM.Estimated),
                AffectedUsers = int.Parse(IncidentM.Affected),
                NumberOfCalls = int.Parse(IncidentM.NumCalls),
                VoltageLevel = double.Parse(IncidentM.Voltage),
                Cause = IncidentM.Cause,
                SubCause = IncidentM.SubCause,
                Material = IncidentM.Material,
                ConstructionType = IncidentM.TypeR
                
            };

            _context.Incidents.Add(incident);

            foreach (int d in IncidentM.Devices)
            {
                IncidentDevice id = new IncidentDevice()
                {
                    Device = _context.Devices.Where(dev => dev.Id == d).First(),
                    Incident = incident

                };
                _context.IncidentDevices.Add(id);
            }


            await _context.SaveChangesAsync();

            return CreatedAtAction("GetIncident", new { id = incident.Id }, incident);
        }

        // DELETE: api/Books/5
        [HttpDelete]
        [Route("DeleteIncident/{id}")]
        public async Task<ActionResult<Incident>> DeleteBook(int id)
        {
            var incidents = await _context.Incidents.FindAsync(id);
            if (incidents == null)
            {
                return NotFound();
            }

            _context.Incidents.Remove(incidents);
            await _context.SaveChangesAsync();

            return incidents;
        }

        private bool IncidentsExists(int id)
        {
            return _context.Incidents.Any(e => e.Id == id);
        }
    }
}
