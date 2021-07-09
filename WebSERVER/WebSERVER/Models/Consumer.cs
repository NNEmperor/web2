using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebSERVER.Models
{
    public class Consumer
    {
        public string Name { get; set; }
        public string Lastname { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string Zipcode { get; set; }
        public string Priority { get; set; }
        public string Phone { get; set; }
        [Key]
        public int Id { get; set; }
        public string Type { get; set; }
        public bool Deleted { get; set; }

    }
}
