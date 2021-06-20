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
    [Route("api/SafetyDoc")]
    [ApiController]
    public class SafetyDocController : ControllerBase
    {
        private readonly WebServerContext _context;

        public SafetyDocController(WebServerContext context)
        {
            _context = context;
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

            _context.DocImages.Add(new DocImage { Image = base64string, DocId = 0 });
            _context.SaveChanges();

            // return new EmptyResult();
            return null;
        }

        [Route("GetAllDocs")]
        public async Task<ActionResult<IEnumerable<SafetyDoc>>> GetAllDocs()
        {
            var listI = await _context.SafetyDocs.ToListAsync();
            var listS = await _context.DocImages.ToListAsync();

            foreach (var i in listI)
            {
                i.Photos = new List<string>();
                foreach (var s in listS)
                {
                    if (s.DocId == i.Id)
                        i.Photos.Add(s.Image);
                }
            }
            return listI;
        }

        [HttpPost]
        [Route("GetMineDocs")]
        public async Task<ActionResult<IEnumerable<SafetyDoc>>> GetMineDocs([FromForm] string userName)
        {
            var listI = await _context.SafetyDocs.Where(x => x.CreatedBy == userName).ToListAsync();
            var listS = await _context.DocImages.ToListAsync();

            foreach (var i in listI)
            {
                i.Photos = new List<string>();
                foreach (var s in listS)
                {
                    if (s.DocId == i.Id)
                        i.Photos.Add(s.Image);
                }
            }
            return listI;
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
            _context.SaveChanges();

            foreach (int d in safetyDoc.Devices)
            {
                SafetyDocDevice sd = new SafetyDocDevice()
                {
                    Device = _context.Devices.Where(dev => dev.Id == d).First(),
                    SafetyDoc = safety
                };
                _context.SafetyDocDevices.Add(sd);
            }

            foreach (DocImage i in _context.DocImages)
            {
                if (i.DocId == 0)
                {
                    i.DocId = safety.Id;
                }
            }


            await _context.SaveChangesAsync();
            return CreatedAtAction("GetAllDocs", new { id = safety.Id }, safetyDoc);
        }
    }
}
