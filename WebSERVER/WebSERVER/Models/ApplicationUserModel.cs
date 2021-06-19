using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebSERVER.Models
{
    public class ApplicationUserModel
    {
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public string Lastname { get; set; }
        public string Birthday { get; set; }
        public string Image { get; set; }
        public string Address { get; set; }
        public string UserRole { get; set; }

        public bool SendConfirmation { get; set; }

        public string Status { get; set; }      //procesira,aktivan,odbijen nalog

    }
}
