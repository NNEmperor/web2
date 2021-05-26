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
    public class WorkRequestController : ControllerBase
    {
        private readonly WebServerContext _context;

        public WorkRequestController(WebServerContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<WorkRequest>>> GetWorkRequests()
        {
            return await _context.WorkRequests.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<WorkRequest>> GetWorkRequest(int id)
        {
            var workRequests = await _context.WorkRequests.FindAsync(id);

            if (workRequests == null)
            {
                return NotFound();
            }

            return workRequests;
        }

        [Route("UpdateWorkRequest")]
        public async Task<IActionResult> UpdateWorkRequest(WorkRequest workRequest)
        {
            _context.Entry(workRequest).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WorkRequestsExists(workRequest.Id))
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
        [Route("AddWorkRequest")]
        public async Task<ActionResult<WorkRequest>> AddBook(WorkRequest workRequest)
        {

            _context.WorkRequests.Add(workRequest);

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBooks", new { id = workRequest.Id }, workRequest);
        }

        // DELETE: api/Books/5
        [HttpDelete]
        [Route("DeleteWorkRequest/{id}")]
        public async Task<ActionResult<WorkRequest>> DeleteBook(int id)
        {
            var workRequests = await _context.WorkRequests.FindAsync(id);
            if (workRequests == null)
            {
                return NotFound();
            }

            _context.WorkRequests.Remove(workRequests);
            await _context.SaveChangesAsync();

            return workRequests;
        }

        private bool WorkRequestsExists(int id)
        {
            return _context.WorkRequests.Any(e => e.Id == id);
        }
    }
}
