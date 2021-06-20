using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
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
        static int IncidentId = 0;

        public IncidentController(WebServerContext context)
        {
            _context = context;
        }


        [HttpPost]
        [Route("CreateImage")]
        public async Task<IActionResult> CreateImage()
        {
            var nesto = Request.Form.Files[0];
            string base64string;
            var myFile = nesto;
            var filepath = Path.GetTempFileName();
            using (var stream = System.IO.File.Create(filepath))
            {
                await myFile.CopyToAsync(stream);
            }
            byte[] imageByte = System.IO.File.ReadAllBytes(filepath);
            base64string = Convert.ToBase64String(imageByte);

            _context.IncidentImages.Add(new IncidentImage { Image = base64string, IncidentId = 0 });
            _context.SaveChanges();

            // return new EmptyResult();
            return Ok("Successfully added photo to work request");
        }

        [Route("GetAllIncidents")]
        public async Task<ActionResult<IEnumerable<Incident>>> GetIncidents()
        {
            var listI = await _context.Incidents.ToListAsync();
            var listS = await _context.IncidentImages.ToListAsync();

            foreach(var i in listI)
            {
                i.Photos = new List<string>();
                foreach(var s in listS)
                {
                    if (s.IncidentId == i.Id)
                        i.Photos.Add(s.Image);
                }
            }
            return listI;
        }

        [HttpPost]
        [Route("GetMineIncidents")]
        public async Task<ActionResult<IEnumerable<Incident>>> GetMyIncidents([FromForm]string userName)
        {
            var listI = await _context.Incidents.Where(x => x.UserNameCreator == userName).ToListAsync();
            var listS = await _context.IncidentImages.ToListAsync();

            foreach (var i in listI)
            {
                i.Photos = new List<string>();
                foreach (var s in listS)
                {
                    if (s.IncidentId == i.Id)
                        i.Photos.Add(s.Image);
                }
            }
            return listI;
        }

        [HttpPost]
        [Route("GetMyStatuses")]
        public async Task<ActionResult<ICollection<int>>> GetMyStatuses([FromForm]string userName)
        {
            List<Incident> temp = await _context.Incidents.Where(x => x.UserNameCreator == userName).ToListAsync();
            List<SafetyDoc> temp2 = await _context.SafetyDocs.Where(x => x.CreatedBy == userName).ToListAsync();
            List<int> res = new List<int>() { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

            foreach (Incident i in temp)
            {
                if (i.Status == "Draft")
                    res[0]++;
                else if (i.Status == "Canceled")
                    res[1]++;
                else if (i.Status == "Executing")
                    res[2]++;
                else if (i.Status == "Completed")
                    res[3]++;
                res[4]++;
            }

            foreach (SafetyDoc i in temp2)
            {
                if (i.Status == "Draft")
                    res[5]++;
                else if (i.Status == "Canceled")
                    res[6]++;
                else if (i.Status == "Executing")
                    res[7]++;
                else if (i.Status == "Completed")
                    res[8]++;
                res[9]++;
            }

            return res;
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
        public async Task<ActionResult<Incident>> AddIncident([FromBody] IncidentModel IncidentM)
        {
            bool c;
            bool.TryParse(IncidentM.Confirmed, out c);
            int p = 0;
            int.TryParse(IncidentM.Priority, out p);
            int a = 0;
            int.TryParse(IncidentM.Affected, out a);
            int n = 0;
            int.TryParse(IncidentM.NumCalls, out n);
            double v = 0;
            double.TryParse(IncidentM.Voltage, out v);
            DateTime esta;
            DateTime.TryParse(IncidentM.ETA, out esta);
            DateTime asta;
            DateTime.TryParse(IncidentM.ATA, out asta);
            DateTime etr;
            DateTime.TryParse(IncidentM.ETR, out etr);
            DateTime outa;
            DateTime.TryParse(IncidentM.Outage, out outa);
            DateTime est;
            DateTime.TryParse(IncidentM.Estimated, out est);

            Incident incident = new Incident()
            {
                Type = IncidentM.Type,
                Priority = p,
                Confirmed = c,
                UserNameCreator = IncidentM.UserName,
                Status = IncidentM.Status,
                EstimatedTA = esta,
                ActualTA = asta,
                EstimatedTR = etr,
                Outage = outa,
                EstimatedWorkStartTime = est,
                AffectedUsers = a,
                NumberOfCalls = n,
                VoltageLevel = v,
                Description = IncidentM.Description,
                Cause = IncidentM.Cause,
                SubCause = IncidentM.SubCause,
                Material = IncidentM.Material,
                ConstructionType = IncidentM.TypeR,
                Calls = IncidentM.Calls

            };

            await _context.Incidents.AddAsync(incident);
            _context.SaveChanges();

            foreach (int d in IncidentM.Devices)
            {
                IncidentDevice id = new IncidentDevice()
                {
                    Device = d,
                    Incident = incident.Id

                };
                _context.IncidentDevices.Add(id);
            }

            foreach(IncidentImage i in _context.IncidentImages)
            {
                if(i.IncidentId == 0)
                {
                    i.IncidentId = incident.Id;
                }
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
