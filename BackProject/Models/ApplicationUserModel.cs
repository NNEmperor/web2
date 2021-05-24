using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackProject.Models
{
    public class ApplicationUserModel
    {
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public string Lastname { get; set; }
        public string Birthday { get; set; }
        public string Address { get; set; }
        public string Type { get; set; }//USER TYPE ENUM 
        public string Status { get; set; }      //prihvacen,cekanje,odbijen
        public string Image { get; set; }
    }
}
