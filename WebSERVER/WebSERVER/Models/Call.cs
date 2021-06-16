using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebSERVER.Models
{
    public class Call
    {
        [Key]
        [Column(TypeName = "int")]
        public int Id { get; set; }
        public string Reason { get; set; }
        public string Comment { get; set; }
        public string Hazard { get; set; }
        public string Address { get; set; }
        public string UserName { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public Incident incident { get; set; }

        //podaci svi ili samo instanca potrosaca
    }
}
