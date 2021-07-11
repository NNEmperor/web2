using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebSERVER.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebSERVER.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StreetsController : ControllerBase
    {
        private readonly WebServerContext _context;

        public StreetsController(WebServerContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("GetAll")]
        public async Task<ActionResult<IEnumerable<StreetPriority>>> GetAll()
        {
            return await _context.Streets.ToListAsync();

        }

        [HttpGet]
        [Route("GetStreet/{id}")]
        public async Task<ActionResult<StreetPriority>> GetStreet(int id)
        {
            var street = await _context.Streets.FindAsync(id);

            if (street == null)
            {
                return NotFound();
            }

            return street;
        }

       

        [HttpPost]
        [Route("AddStreet")]
        public async Task<ActionResult<Consumer>> AddConsumer(StreetPriority street)
        {
            _context.Streets.Add(street);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception e)
            {

            }
            return CreatedAtAction("GetStreet", new { id = street.Id }, street);
        }

        [HttpPost]
        [Route("UpdateStreet")]
        public async Task<IActionResult> UpdateStreet(StreetPriority street)
        {
            _context.Entry(street).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StreetExists(street.Id))
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

        private bool StreetExists(int id)
        {
            return _context.Streets.Any(e => e.Id == id);
        }

    }
}
