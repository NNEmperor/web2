using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
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
        static int workreq = 1;

        public WorkRequestController(WebServerContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("GetWorkRequests")]
        public async Task<ActionResult<IEnumerable<WorkRequest>>> GetWorkRequests()
        {
            return await _context.WorkRequests.ToListAsync();
        }

        [HttpPost]
        [Route("GetMineWorkRequests")]
        public async Task<ActionResult<IEnumerable<WorkRequest>>> GetMineWorkRequests([FromForm]string userName)
        {
            return await _context.WorkRequests.Where(x=>x.Creator.Equals(userName)).ToListAsync();
        }
        [HttpPost]
        [Route("CreateImage")]
        public async Task<IActionResult> CreateImage() {
            var nesto = Request.Form.Files[0];
            var workkkk = workreq;
            workreq = 1;
            string base64string;
            var myFile = nesto;
            var filetype = myFile.ContentType;
            var filepath = Path.GetTempFileName();
            using (var stream = System.IO.File.Create(filepath))
            {
                await myFile.CopyToAsync(stream);
            }
            byte[] imageByte = System.IO.File.ReadAllBytes(filepath);
            base64string = Convert.ToBase64String(imageByte);

            //var taj = _context.WorkRequests.Where(x => x.id).Single();
            //taj.Image = base64string;//pamti tu sliku
            //await _userManager.UpdateAsync(taj);

            _context.MediaWorkRequests.Add(new MediaWorkRequest { Image = base64string, WorkRequestID = workkkk });
            _context.SaveChanges();

            return new EmptyResult();
            return Ok();
        }
       /// <summary>
       /// ne radi
       /// </summary>
       /// <param name="file"></param>
       /// <returns></returns>
        public async Task<IActionResult> UploadFile([FromForm]object file)
        {
            var workkkk = workreq;
            workreq = 1;
            string base64string;
            var myFile = file as IFormFile;
            var filetype = myFile.ContentType;
            var filepath = Path.GetTempFileName();
            using (var stream = System.IO.File.Create(filepath))
            {
                await myFile.CopyToAsync(stream);
            }
            byte[] imageByte = System.IO.File.ReadAllBytes(filepath);
            base64string = Convert.ToBase64String(imageByte);

            //var taj = _context.WorkRequests.Where(x => x.id).Single();
            //taj.Image = base64string;//pamti tu sliku
            //await _userManager.UpdateAsync(taj);

            _context.MediaWorkRequests.Add(new MediaWorkRequest { Image = base64string, WorkRequestID = workkkk });
            _context.SaveChanges();

            return new EmptyResult();
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
        [Route("AddBasicInfo")]
        public async Task<ActionResult> AddBasicInfo(WorkRequest workRequest)
        {

            _context.WorkRequests.Add(workRequest);
            
            await _context.SaveChangesAsync();

            var lista = _context.WorkRequests.ToList();
            workreq = lista[lista.Count - 1].Id;    //dodeli id
            return Ok("Succeesfully added work request");
           // return CreatedAtAction("GetBooks", new { id = workRequest.Id }, workRequest);
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
