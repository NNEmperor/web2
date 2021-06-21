using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebSERVER.Models
{
    public class SocialUser
    {
        [Key]
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        //public string Password { get; set; }
        public string Name { get; set; }
        public string Lastname { get; set; }
        public string UserRole { get; set; }
        public string Social { get; set; }
        public string Token { get; set; }
    }
}
