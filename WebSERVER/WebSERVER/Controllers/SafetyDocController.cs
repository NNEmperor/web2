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
    [Route("api/SafetyDoc")]
    [ApiController]
    public class SafetyDocController : ControllerBase
    {
        private readonly WebServerContext _context;

        public SafetyDocController(WebServerContext context)
        {
            _context = context;
        }

        [Route("GetAllDocs")]
        public async Task<ActionResult<IEnumerable<SafetyDoc>>> GetAllDocs()
        {
            return await _context.SafetyDocs.ToListAsync();
        }

        [HttpPost]
        [Route("GetMineDocs")]
        public async Task<ActionResult<IEnumerable<SafetyDoc>>> GetMineDocs([FromForm] string userName)
        {
            return await _context.SafetyDocs.Where(x => x.CreatedBy == userName).ToListAsync();
        }

        [HttpPost]
        [Route("AddDoc")]
        public async Task<ActionResult<SafetyDoc>> AddDoc([FromBody] SafetyDocModel safetyDoc)
        {


            SafetyDoc safety = new SafetyDoc()
            {
                Type = safetyDoc.Type,
                Status = safetyDoc.Status,
                CreatedBy = safetyDoc.CreatedBy,
                //WorkPlan = _context.WorkPlans.Where(res => res.Id == safetyDoc.WorkPlan).First(),
                Notes = safetyDoc.Notes,
                //Team = _context.Teams.Where(res => res.TeamId == safetyDoc.Team).First(),
                Details = safetyDoc.Details,
                History = safetyDoc.History,
                Phone = safetyDoc.Phone,
                CreatedWhen = safetyDoc.CreatedWhen,
                WorkOpCompleted = safetyDoc.WorkOpCompleted,
                TagsRemoved = safetyDoc.TagsRemoved,
                GroundingRemoved = safetyDoc.GroundingRemoved,
                ReadyForService = safetyDoc.ReadyForService

            };

            _context.SafetyDocs.Add(safety);

            foreach (int d in safetyDoc.Devices)
            {
                SafetyDocDevice sd = new SafetyDocDevice()
                {
                    Device = _context.Devices.Where(dev => dev.Id == d).First(),
                    SafetyDoc = safety
                };
                _context.SafetyDocDevices.Add(sd);
            }


            await _context.SaveChangesAsync();
            return CreatedAtAction("GetAllDocs", new { id = safety.Id }, safetyDoc);
        }
    }
}
