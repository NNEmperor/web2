using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebSERVER.Models;

namespace WebSERVER.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkRequestController : ControllerBase
    {
        private readonly WebServerContext _context;
        static string workreqID = "";

        public WorkRequestController(WebServerContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("GetWorkRequests")]
        public async Task<ActionResult<IEnumerable<WorkRequest>>> GetWorkRequests()
        {
            var listawr = _context.WorkRequests.ToList();
            var slike = _context.MediaWorkRequests.ToList();

            foreach(var wr in listawr)
            {
                wr.Photos = new List<string>();
                foreach(var slika in slike)
                {
                    if (slika.WorkRequestID.Equals( wr.Id))
                    {
                        wr.Photos.Add(slika.Image);
                    }
                }
            }
            return listawr;
        }

        [HttpPost]
        [Route("GetMineWorkRequests")]
        public async Task<ActionResult<IEnumerable<WorkRequest>>> GetMineWorkRequests([FromForm]string userName)
        {
            var listawr = _context.WorkRequests.Where(x => x.Creator.Equals(userName)).ToList();
            var slike = _context.MediaWorkRequests.ToList();

            foreach (var wr in listawr)
            {
                wr.Photos = new List<string>();
                foreach (var slika in slike)
                {
                    if (slika.WorkRequestID.Equals(wr.Id))
                    {
                        wr.Photos.Add(slika.Image);
                    }
                }
            }
            return listawr;
        }
        [HttpPost]
        [Route("CreateImage")]
        public async Task<IActionResult> CreateImage() {
            var nesto = Request.Form.Files[0];
            var workkkk = workreqID;
            //workreqID = "";       //ne treba
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

            var listaWR = _context.WorkRequests.ToList();
           
            _context.MediaWorkRequests.Add(new MediaWorkRequest { Image = base64string, WorkRequestID = workkkk });
            _context.SaveChanges();

           // return new EmptyResult();
            return Ok("Successfully added photo to work request");
        }
       /// <summary>
       /// ne radi
       /// </summary>
       /// <param name="file"></param>
       /// <returns></returns>
        public async Task<IActionResult> UploadFile([FromForm]object file)
        {
            var workkkk = workreqID;
            //workreqID = "";       //ne treba
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


            _context.MediaWorkRequests.Add(new MediaWorkRequest { Image = base64string, WorkRequestID = workkkk.ToString() });
            _context.SaveChanges();

            return new EmptyResult();
        }

       
        [HttpGet]
        [Route("GenerateWorkID")]
        public async Task<Object> GenerateWorkID()
        {
            string result = GetRandomString(10);
            return Ok(result);
        }

        internal static string GetRandomString(int stringLength)
        {
            StringBuilder sb = new StringBuilder();
            int numGuidsToConcat = (((stringLength - 1) / 32) + 1);
            for (int i = 1; i <= numGuidsToConcat; i++)
            {
                sb.Append(Guid.NewGuid().ToString("N"));
            }

            return sb.ToString(0, stringLength);
        }

        [HttpPost]
        [Route("GetID")]
        public async Task<Object> GetID([FromForm]string idwr)
        {
            workreqID = idwr;
            return Ok();
        }

        [HttpPost]
        [Route("GetOneWorkRequest")]
        public async Task<ActionResult<WorkRequest>> GetOneWorkRequest([FromForm]string id)
        {
            var workRequests = await _context.WorkRequests.FindAsync(id);

            if (workRequests == null)
            {
                return NotFound();
            }

            return workRequests;
        }

        [HttpPost]
        [Route("GetHistoryWorkRequest")]
        public async Task<ActionResult<IEnumerable<HistoryWorkRequest>>> GetHistoryWorkRequest([FromForm] string id)
        {
            var istorija =await _context.HistoryWorkRequests.Where(x=>x.WorkRequestId.Equals(id)).ToListAsync();

            return istorija;
        }

        [HttpPost]
        [Route("GetPhotosWorkRequest")]
        public async Task<ActionResult<IEnumerable<MediaWorkRequest>>> GetPhotosWorkRequest([FromForm] string id)
        {
            var slike = await _context.MediaWorkRequests.Where(x => x.WorkRequestID.Equals(id)).ToListAsync();

            return slike;
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
               // if (!WorkRequestsExists(workRequest.Id))
                //{
                //    return NotFound();
                //}
                //else
                //{
                //    throw;
                //}
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
            
            return Ok("Succeesfully added work request");
           
        }

        [HttpPost]
        [Route("UpdateHistoryWorkRequest")]
        public async Task<ActionResult> UpdateHistoryWorkRequest([FromForm]string history, [FromForm]string id)
        {
            Console.WriteLine(history);
            var result = JsonConvert.DeserializeObject<List<HistoryWorkRequest>>(history);
            List<HistoryWorkRequest> finalna = new List<HistoryWorkRequest>();
            var stanje = "";
            foreach(var r in result.ToList())
            {
                Console.WriteLine(r.Id);
                Console.WriteLine(r.HistoryState);//broj je stigao mora biti string //uzeti FINAL STATE I SETOVATI ZA WR
                Console.WriteLine(r.UserName);
                Console.WriteLine("----------");
                
            }

            for (int i = 0; i < result.Count; i++)
            {
                if (result[i].HistoryState.Equals("1"))
                {
                    stanje = "Approve";
                }
                else if (result[i].HistoryState.Equals("2"))
                {
                    stanje = "Deny";
                }
                else if (result[i].HistoryState.Equals("3"))
                {
                    stanje = "Cancle";
                }
                else
                {
                    stanje = "Draft";
                }

                if (result[i].Id == 0)
                {
                    finalna.Add(new HistoryWorkRequest { UserName = result[i].UserName, HistoryState = stanje, DateHistory = result[i].DateHistory, WorkRequestId=id });
                }
            }

            foreach(var el in finalna)
            {
                _context.HistoryWorkRequests.Add(el);
            }
            //_context.WorkRequests.Add(workRequest);

            await _context.SaveChangesAsync();

            //var lista = _context.WorkRequests.ToList();

            return Ok("Succeesfully updated history of work request");

        }

        [HttpPost]
        [Route("SetHistory")]
        public async Task<ActionResult> SetHistory(HistoryWorkRequest history)
        {
            _context.HistoryWorkRequests.Add(history);

            await _context.SaveChangesAsync();

            var lista = _context.WorkRequests.ToList();
            
            return Ok("Succeesfully added work request history");
           
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
            return _context.WorkRequests.Any(e => e.Id.Equals( id));
        }
    }
}
