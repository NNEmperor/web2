using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebSERVER.Models
{
    public class IncidentDevice
    {
        [Key]
        public int IncidentDeviceId { get; set; }
        public Incident Incident { get; set; }
        public Device Device { get; set; }
    }
}
