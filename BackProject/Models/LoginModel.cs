using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BackProject.Models
{
    public class LoginModel
    {
        [Required]
        public string EmailAddres { get; set; }

        [Required]
        public string Password { get; set; }


    }
}
