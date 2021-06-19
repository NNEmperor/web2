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
    [Route("api/Devices")]
    [ApiController]
    public class DeviceController : ControllerBase
    {
        private readonly WebServerContext _context;

        public DeviceController(WebServerContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("GetAll")]
        public async Task<ActionResult<IEnumerable<Device>>> GetAll()
        {
            return await _context.Devices.ToListAsync();
        }

        [HttpPost]
        [Route("GetDevice")]
        public async Task<ActionResult<Device>> GetDevice([FromBody]int id)
        {
            var devices = await _context.Devices.FindAsync(id);

            if (devices == null)
            {
                return NotFound();
            }

            return devices;
        }

        [HttpPost]
        [Route("GetCoords")]
        public async Task<ActionResult<List<double>>> GetCoords([FromBody]int id)
        {
            List<double> res = new List<double>();

            Device temp = await _context.Devices.Where(device => device.Id == id).FirstAsync();
            res.Add(temp.XCoordinate);
            res.Add(temp.YCoordinate);

            return res;
        }



        [Route("UpdateDevice")]
        public async Task<IActionResult> UpdateDevice(Device device)
        {
            _context.Entry(device).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DevicesExists(device.Id))
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
        [Route("AddDevice")]
        public async Task<ActionResult<Device>> AddDevice(Device device)
        {

            _context.Devices.Add(device);

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAll", new { id = device.Id }, device);
        }

        // DELETE: api/Books/5
        [HttpDelete]
        [Route("DeleteDevice/{id}")]
        public async Task<ActionResult<Device>> DeleteBook(int id)
        {
            var devices = await _context.Devices.FindAsync(id);
            if (devices == null)
            {
                return NotFound();
            }

            _context.Devices.Remove(devices);
            await _context.SaveChangesAsync();

            return devices;
        }

        private bool DevicesExists(int id)
        {
            return _context.Devices.Any(e => e.Id == id);
        }
    }
}
