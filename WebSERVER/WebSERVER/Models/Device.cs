using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebSERVER.Models
{
    public class Device
    {
        [Key]
        [Column(TypeName = "int")]
        public int Id { get; set; }
        public string Type { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public double XCoordinate { get; set; }
        public double YCoordinate { get; set; }
        [NotMapped]
        public ICollection<Incident> Incidents { get; set; }
    }
}
