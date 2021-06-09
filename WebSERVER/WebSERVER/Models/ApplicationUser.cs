using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebSERVER.Models
{
    public class ApplicationUser : IdentityUser
    {
        [Column(TypeName = "nvarchar(50)")]
        public string Name { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string Lastname { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string Birthday { get; set; }
        [Column(TypeName = "nvarchar(MAX)")]
        public string Image { get; set; }
        [Column(TypeName = "nvarchar(250)")]
        public string Address { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string UserRole { get; set; }

        public bool SendConfirmation { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string Status { get; set; }      //procesira,aktivan,odbijen nalog
    }
}
