using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BackProject.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace BackProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicationUserController : ControllerBase
    {
        private UserManager<ApplicationUser> _userManager;
        private SignInManager<ApplicationUser> _signInManager;
       
        public ApplicationUserController(UserManager<ApplicationUser> userManager,
           SignInManager<ApplicationUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            
        }

        [HttpPost]
        [Route("Register")]
        //POST :api/ApplicationUser/Register
        public async Task<Object> PostApplicationUser(ApplicationUserModel model)
        {
            var appuser = new ApplicationUser()
            {
                UserName = model.Username,
                Email = model.Email,
                Name = model.Name,
                Lastname = model.Lastname
            };

            try
            {
                var result =await _userManager.CreateAsync(appuser,model.Password);
                return Ok(result);
            }catch(Exception ex)
            {
                throw ex;
            }
        }
    }
}
