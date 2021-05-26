using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebSERVER.Models;

namespace WebSERVER.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IncidentController : ControllerBase
    {
        private readonly WebServerContext _context;

        public IncidentController(WebServerContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Incident>>> GetIncidents()
        {
            return await _context.Incidents.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Incident>> GetIncident(int id)
        {
            var incidents = await _context.Incidents.FindAsync(id);

            if (incidents == null)
            {
                return NotFound();
            }

            return incidents;
        }

        [Route("UpdateIncident")]
        public async Task<IActionResult> UpdateIncident(Incident incident)
        {
            _context.Entry(incident).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!IncidentsExists(incident.Id))
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
        public async Task<ActionResult<Incident>> AddBook(Incident incident)
        {

            _context.Incidents.Add(incident);

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBooks", new { id = incident.Id }, incident);
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
