using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using WebSERVER.Models;
using WebSERVER.Models.FrontModels;

namespace WebSERVER.Controllers
{
    [Route("api/WorkPlan")]
    [ApiController]
    public class WorkPlanController : ControllerBase
    {

        private readonly WebServerContext _context;
        private int id;

        public WorkPlanController(WebServerContext context)
        {
            id = 0;
            _context = context;
        }

        [HttpGet]
        [Route("GetAllPlans")]
        public async Task<ActionResult<IEnumerable<WorkPlan>>> GetWorkPlans()
        {
            var listWP = await _context.WorkPlans.ToListAsync();
            var listS = await _context.WorkPlanImages.ToListAsync();
            var dev = _context.Devices.ToList();

            foreach (var i in listWP)
            {
                i.Photos = new List<string>();
                foreach (var s in listS)
                {
                    if (s.WorkPlanId == i.Id)
                        i.Photos.Add(s.Image);
                }
            }

            foreach (var wp in listWP)
            {
                wp.Devices = new List<Device>();

                var listaID = _context.WorkPlanDevices.Where(x => x.WorkPlan.Equals(wp.Id)).ToList();

                foreach (var el in listaID)
                {
                    var device = dev.Where(x => x.Id == el.Device).Single();
                    wp.Devices.Add(device);
                }
            }
            return listWP;
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
        public async Task<ActionResult<WorkPlan>> AddWorkPlan(WorkPlanModel wp)
        {
            wp.Devices = new List<int>() { 1, 2 };

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
                StartDateTime = wp.StartDate,
                EndDateTime = wp.EndDate,
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
                    Device = _context.Devices.Where(dev => dev.Id == d).First().Id,
                    WorkPlan = plan.Id
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

            id = plan.Id;

            Notification n = new Notification()
            {
                DocumentId = plan.Id,
                Type = "4",
                Read = false,
                Content = "New work plan id = " + plan.Id + "has been added ",
                DateTime = DateTime.Now,
                UserName = plan.CreatedBy

            };
            _context.Notifications.Add(n);

            await _context.SaveChangesAsync();

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
        public async Task<IActionResult> CreateImage()
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

            if (id == 0)
                _context.WorkPlanImages.Add(new WorkPlanImage { Image = base64string, WorkPlanId = 0 });
            else
            {
                _context.WorkPlanImages.Add(new WorkPlanImage { Image = base64string, WorkPlanId = id });
                id = 0;
            }
            _context.SaveChanges();

            // return new EmptyResult();
            return Ok("Successfully added photo to work plan");
        }


        [HttpPost]
        [Route("AddDevice")]
        public async Task<ActionResult> AddDevice(Devices listid)
        {
            string idwp = "aa";

           var resultIDs = JsonConvert.DeserializeObject<List<Device>>(listid.ToString());

            var svi = _context.WorkPlanDevices.ToList();
            //brisemo sve za idwr
            for (int i = 0; i < svi.Count; i++)
            {
                if (svi[i].WorkPlan.Equals(idwp))
                {
                    var dev = _context.WorkPlanDevices.Where(x => x.WorkPlanDeviceId == svi[i].WorkPlanDeviceId).Single();
                    _context.WorkPlanDevices.Remove(dev);
                }
            }
            //dodajemo
            for (int i = 0; i < resultIDs.Count; i++)
            {
                _context.WorkPlanDevices.Add(new WorkPlanDevice { Device = resultIDs[i].Id, WorkPlan = 1 });
            }

            await _context.SaveChangesAsync();
            return Ok("Devices saved");
        }
    }
}
