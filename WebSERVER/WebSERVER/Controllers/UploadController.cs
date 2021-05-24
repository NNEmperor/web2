using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebSERVER.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UploadController : ControllerBase
    {
        [HttpPost, DisableRequestSizeLimit]
        [Route("Upload")]
        public IActionResult Upload()
        {
            try
            {
                var file = Request.Form.Files[0];
                var foldername = Path.Combine("Recources", "Images");
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), foldername);

                if (file.Length > 0)
                {
                    var filename = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var fullpath = Path.Combine(pathToSave, filename);
                    var dbPath = Path.Combine(foldername, filename);

                    using (var stream = new FileStream(fullpath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }

                    return Ok(new { dbPath });
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error:{ex}");
            }
        }
    }
}
