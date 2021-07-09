using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebSERVER.Models;

namespace WebSERVER.Controllers
{
    [Route("api/Consumer")]
    [ApiController]
    public class ConsumerController : ControllerBase
    {
        private readonly WebServerContext _context;

        public ConsumerController(WebServerContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("GetAll")]
        public async Task<ActionResult<IEnumerable<Consumer>>> GetAll()
        {
            List<Consumer> consumers = new List<Consumer>();
            List<Consumer> consumersGet = new List<Consumer>();
            consumers = await _context.Consumers.ToListAsync();

            foreach (var item in consumers)
            {
                if (!item.Deleted)
                    consumersGet.Add(item);
            }

            return consumersGet;
        }

        [HttpGet]
        [Route("GetConsumer/{id}")]
        public async Task<ActionResult<Consumer>> GetDevice(int id)
        {
            var consumer = await _context.Consumers.FindAsync(id);

            if (consumer == null)
            {
                return NotFound();
            }

            return consumer;
        }

        [HttpPost]
        [Route("UpdateConsumer")]
        public async Task<IActionResult> UpdateConsumer(Consumer consumer)
        {
            _context.Entry(consumer).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ConsumerExists(consumer.Id))
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

        private bool ConsumerExists(int id)
        {
            return _context.Consumers.Any(e => e.Id == id);
        }

       

        [HttpPost]
        [Route("AddConsumer")]
        public async Task<ActionResult<Consumer>> AddConsumer(Consumer consumer)
        {
            consumer.Deleted = false;
            _context.Consumers.Add(consumer);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception e)
            {

            }
            return CreatedAtAction("GetConsumer", new { id = consumer.Id }, consumer);
        }

        [HttpPost]
        [Route("DeleteConsumer")]
        public async Task<ActionResult<Consumer>> DeleteConsumer(Consumer consumer)
        {
            consumer.Deleted = true;
            _context.Entry(consumer).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ConsumerExists(consumer.Id))
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
    }
}
