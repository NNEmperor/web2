using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using WebSERVER.Models;

namespace WebSERVER.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicationUserController : ControllerBase
    {
        private UserManager<ApplicationUser> _userManager;
        private SignInManager<ApplicationUser> _signInManager;

        public ApplicationUserController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
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
                Image = model.Image,
                UserRole = model.UserRole,
                SendConfirmation = model.SendConfirmation,
                Status = model.Status //inicijalno--procesira
            };

            try
            {
                var result = await _userManager.CreateAsync(appuser, model.Password);
                return Ok(result);

            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                throw e;
            }
        }
    }
}
