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
        [Route("GetAllPlans")]
        public async Task<ActionResult<IEnumerable<WorkPlan>>> GetWorkPlans()
        {
            var listI = await _context.WorkPlans.ToListAsync();
            var listS = await _context.WorkPlanImages.ToListAsync();

            foreach (var i in listI)
            {
                i.Photos = new List<string>();
                foreach (var s in listS)
                {
                    if (s.WorkPlanId == i.Id)
                        i.Photos.Add(s.Image);
                }
            }
            return listI;
        }

        [HttpPost]
        [Route("GetMinePlans")]
        public async Task<ActionResult<IEnumerable<WorkPlan>>> GetMinePlans([FromForm] string userName)
        {
            var listI = await _context.WorkPlans.Where(x => x.CreatedBy == userName).ToListAsync();
            var listS = await _context.WorkPlanImages.ToListAsync();

            foreach (var i in listI)
            {
                i.Photos = new List<string>();
                foreach (var s in listS)
                {
                    if (s.WorkPlanId == i.Id)
                        i.Photos.Add(s.Image);
                }
            }
            return listI;
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
        public async Task<ActionResult<WorkPlan>> AddWorkPlan([FromBody] WorkPlanModel wp)
        {

            //_context.WorkPlans.Add(workPlan);

            //await _context.SaveChangesAsync();

            //return CreatedAtAction("GetWorkPlans", new { id = workPlan.Id }, workPlan);

            WorkPlan plan = new WorkPlan()
            {
                Type = wp.Type,
                Status = wp.Status,
                CreatedBy = wp.CreatedBy,
                Notes = wp.Notes,
                Details = wp.Details,
                History = wp.History,
                PhoneNumber = wp.PhoneNumber,
                Company = wp.Company,
                DateTimeCreated = wp.DateTimeCreated,
                StartDateTime = wp.StartDateTime,
                EndDateTime = wp.EndDateTime,
                FieldCrew = wp.FieldCrew,
                IncidentId = wp.IncidentId,
                WorkRequestId = wp.WorkRequestId,
                Purpose = wp.Purpose

            };

            _context.WorkPlans.Add(plan);
            _context.SaveChanges();

            foreach (int d in wp.Devices)
            {
                WorkPlanDevice sd = new WorkPlanDevice()
                {
                    Device = _context.Devices.Where(dev => dev.Id == d).First(),
                    WorkPlan = plan
                };
                _context.WorkPlanDevices.Add(sd);
            }

            foreach (WorkPlanImage i in _context.WorkPlanImages)
            {
                if (i.WorkPlanId == 0)
                {
                    i.WorkPlanId = plan.Id;
                }
            }


            await _context.SaveChangesAsync();
            return CreatedAtAction("GetAllPlans", new { id = plan.Id }, wp);

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

        [HttpPost]
        [Route("CreateImage")]
        public Task<IActionResult> CreateImage()
        {
            var nesto = Request.Form.Files[0];
            string base64string;
            var myFile = nesto;
            var filepath = Path.GetTempFileName();
            using (var stream = System.IO.File.Create(filepath))
            {
                myFile.CopyTo(stream);
            }
            byte[] imageByte = System.IO.File.ReadAllBytes(filepath);
            base64string = Convert.ToBase64String(imageByte);

            _context.WorkPlanImages.Add(new WorkPlanImage { Image = base64string, WorkPlanId = 0 });
            _context.SaveChanges();

            // return new EmptyResult();
            return null;
        }
    }
}
