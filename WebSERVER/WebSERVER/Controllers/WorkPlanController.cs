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
    public class WorkPlanController : ControllerBase
    {

        private readonly WebServerContext _context;

        public WorkPlanController(WebServerContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<WorkPlan>>> GetWorkPlans()
        {
            return await _context.WorkPlans.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<WorkPlan>> GetWorkPlan(int id)
        {
            var workPlan = await _context.WorkPlans.FindAsync(id);

            if (workPlan == null)
            {
                return NotFound();
            }

            return workPlan;
        }

        [Route("UpdateWorkPlan")]
        public async Task<IActionResult> UpdateWorkPlan(WorkPlan workPlan)
        {
            _context.Entry(workPlan).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WorkPlanExists(workPlan.Id))
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
        [Route("AddWorkPlan")]
        public async Task<ActionResult<WorkPlan>> AddWorkPlan(WorkPlan workPlan)
        {

            _context.WorkPlans.Add(workPlan);

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWorkPlans", new { id = workPlan.Id }, workPlan);
        }

        [HttpDelete]
        [Route("DeleteWorkPlan/{id}")]
        public async Task<ActionResult<WorkPlan>> DeleteWorkPlan(int id)
        {
            var workPlan = await _context.WorkPlans.FindAsync(id);
            if (workPlan == null)
            {
                return NotFound();
            }

            _context.WorkPlans.Remove(workPlan);
            await _context.SaveChangesAsync();

            return workPlan;
        }

        private bool WorkPlanExists(int id)
        {
            return _context.WorkPlans.Any(e => e.Id == id);
        }
    }
}
