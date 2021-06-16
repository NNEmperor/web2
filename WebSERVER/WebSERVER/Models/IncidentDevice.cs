using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebSERVER.Models
{
    public class IncidentDevice
    {
        [Key]
        [Column(TypeName = "int")]
        public int IncidentDeviceId { get; set; }
        public Incident Incident { get; set; }
        public Device Device { get; set; }
    }
}
