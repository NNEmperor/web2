using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebSERVER.Models
{
    public class StreetPriority
    {
        public string Street { get; set; }
        public string Priority { get; set; }
        [Key]
        public int Id { get; set; }
    }
}
