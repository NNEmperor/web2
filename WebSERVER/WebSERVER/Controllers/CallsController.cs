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
    [Route("api/Calls")]
    [ApiController]
    public class CallsController : ControllerBase
    {
        private readonly WebServerContext _context;

        public CallsController(WebServerContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Call>>> GetCalls()
        {
            return await _context.Calls.ToListAsync();
        }

        [HttpPost]
        [Route("GetCallsForDevices")]
        public async Task<ActionResult<IEnumerable<Call>>> GetCallsForDevices([FromBody]List<int> deviceIds)
        {
            List<Device> devices = await _context.Devices.Where(sklj => deviceIds.Contains(sklj.Id)).ToListAsync();

            List<Call> res = new List<Call>();
            foreach(Device d in devices)
            {
                foreach(Call c in _context.Calls)
                {
                    if(d.Address == c.Address)
                    {
                        res.Add(c);
                    }
                }
            }

            return res;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Call>> GetCall(int id)
        {
            var calls = await _context.Calls.FindAsync(id);

            if (calls == null)
            {
                return NotFound();
            }

            return calls;
        }

        [Route("UpdateCall")]
        public async Task<IActionResult> UpdateCall(Call call)
        {
            _context.Entry(call).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CallsExists(call.Id))
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
        [Route("AddCall")]
        public async Task<ActionResult<Call>> AddCall(Call call)
        {
            Incident inc;
            if (call.CreateInc)
            {
                inc = new Incident()
                {
                    Status = "Draft",
                    Confirmed = false
                };
                await _context.Incidents.AddAsync(inc);
                _context.SaveChanges();
                call.incident = inc;
            }

            _context.Calls.Add(call);

            try
            {
                await _context.SaveChangesAsync();

                
            }catch(Exception e)
            {
                
            }
            return CreatedAtAction("GetCall", new { id = call.Id }, call);
        }

        // DELETE: api/Books/5
        [HttpDelete]
        [Route("DeleteCall/{id}")]
        public async Task<ActionResult<Call>> DeleteCall(int id)
        {
            var calls = await _context.Calls.FindAsync(id);
            if (calls == null)
            {
                return NotFound();
            }

            _context.Calls.Remove(calls);
            await _context.SaveChangesAsync();

            return calls;
        }

        private bool CallsExists(int id)
        {
            return _context.Calls.Any(e => e.Id == id);
        }
    }
}
