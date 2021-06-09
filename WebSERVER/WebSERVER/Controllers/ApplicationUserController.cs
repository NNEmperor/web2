using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using WebSERVER.Models;

namespace WebSERVER.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicationUserController : ControllerBase
    {
        private UserManager<ApplicationUser> _userManager;
        private SignInManager<ApplicationUser> _signInManager;
        private ApplicationSettings _appSettings;
        private readonly WebServerContext _context;
        static string korime = "";
        public ApplicationUserController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager, IOptions<ApplicationSettings> appSettings, WebServerContext context)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _appSettings = appSettings.Value;
            _context = context;
        }

        [HttpPost]
        [Route("Login")]
        // POST: api/<controller>/Login
        public async Task<IActionResult> Login([FromBody] LoginModel loginModel)
        {
            var user = await _userManager.FindByNameAsync(loginModel.UserName);
            if (user != null && await _userManager.CheckPasswordAsync(user, loginModel.Password))
            {
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                        new Claim("UserID", user.Id.ToString())
                    }),
                    Expires = DateTime.UtcNow.AddDays(1),
                    //Key min: 16 characters
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes("1234567890123456")), SecurityAlgorithms.HmacSha256Signature)
                };
                var tokenHandler = new JwtSecurityTokenHandler();
                var securityToken = tokenHandler.CreateToken(tokenDescriptor);
                var token = tokenHandler.WriteToken(securityToken);
                return Ok(new { token });
            }
            else
                return BadRequest(new { message = "Username or password is incorrect." });
        }


        [HttpPost]
        [Route("Register")]
        //POST: api/ApplicationUser/Register
        public async Task<Object> PostApplicationUser(ApplicationUserModel model)
        {
            var appuser = new ApplicationUser()
            {
                UserName = model.UserName,
                Email = model.Email,
                Name = model.Name,
                Lastname = model.Lastname,
                Birthday = model.Birthday,
                Address = model.Address,
                Image = "",//model.Image,
                UserRole = model.UserRole,
                SendConfirmation = model.SendConfirmation,
                Status = model.Status //inicijalno--procesira
            };

            try
            {
                var result = await _userManager.CreateAsync(appuser, model.Password);
                korime = appuser.UserName;
                return Ok(result);

            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                throw e;
            }
        }

        [HttpPost]
        [Route("UploadFile")]
        public async Task<IActionResult> UploadFile()
        {
            var userName = korime;
            korime = "";
            string base64string;
            var myFile = Request.Form.Files[0];
            var filetype = myFile.ContentType;
            var filepath = Path.GetTempFileName();
            using (var stream = System.IO.File.Create(filepath))
            {
                await myFile.CopyToAsync(stream);
            }
            byte[] imageByte = System.IO.File.ReadAllBytes(filepath);
            base64string = Convert.ToBase64String(imageByte);
           
            var taj = _userManager.Users.Where(x => x.UserName.Equals(userName)).Single();
            taj.Image = base64string;//pamti tu sliku
            await _userManager.UpdateAsync(taj);

            return new EmptyResult();
        }

        [HttpGet]
        [Route("GetRegisteredUsers")]
        public async Task<ActionResult<IEnumerable<ApplicationUser>>> GetRegisteredUsers()
        {
            return await _userManager.Users.Where(x=> x.Status.ToUpper().Equals("PROCESIRA")).ToListAsync();
        }

        [HttpPost]
        [Route("AcceptRegistration")]
        public async Task<ActionResult<IEnumerable<ApplicationUser>>> AcceptRegistration([FromForm] string userName)
        {
            var list = _userManager.Users.ToList();
            Console.WriteLine(userName);
            var taj = _userManager.Users.FirstOrDefault(x => x.UserName.Equals(userName));
            taj.Status = "prihvacen";
            await _userManager.UpdateAsync(taj);
            //_context.Users.Update(taj);

            return await _userManager.Users.Where(x => x.Status.ToUpper().Equals("PROCESIRA")).ToListAsync();
            
        }

        [HttpPost]
        [Route("DenyRegistration")]
        public async Task<ActionResult<IEnumerable<ApplicationUser>>> DenyRegistration([FromForm] string userName)
        {
            var list = _userManager.Users.ToList();
            Console.WriteLine(userName);
            var taj = _userManager.Users.FirstOrDefault(x => x.UserName.Equals(userName));
            taj.Status = "odbijen";
            await _userManager.UpdateAsync(taj);
            //_context.Users.Update(taj);

            return await _userManager.Users.Where(x => x.Status.ToUpper().Equals("PROCESIRA")).ToListAsync();
        }

        [HttpGet]
        [Route("GetTeamMembers")]
        public async Task<ActionResult<IEnumerable<ApplicationUser>>> GetTeamMembers()
        {
            return await _userManager.Users.Where(x => x.UserRole.ToUpper().Equals("CLAN EKIPE") && x.Status.ToUpper().Equals("PRIHVACEN")).ToListAsync();
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ApplicationUser>>> GetUsers()
        {
            return await _userManager.Users.ToListAsync();
        }

        [HttpDelete]
        [Route("DeleteUser/{id}")]
        public async Task<ActionResult<ApplicationUser>> Deleteuser(string id)
        {
            var user = await _userManager.FindByIdAsync(id);
            if (user == null)
            {
                return NotFound();
            }

             await _userManager.DeleteAsync(user);
            //await _userManager.UpdateAsync()

            return user;
        }
    }
}
