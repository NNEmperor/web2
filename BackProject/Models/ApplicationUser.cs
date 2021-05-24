using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BackProject.Models
{
    public class ApplicationUser: IdentityUser
    {
        [Column(TypeName ="nvarchar(50)")]
        public string Name { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string Lastname { get; set; }
    }
}
