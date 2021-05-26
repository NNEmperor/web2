using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebSERVER.Models
{
    public class WorkReqDevice
    {
        [Key]
        public int WorkReqDeviceId { get; set; }
        public WorkRequest WorkRequest { get; set; }
        public Device Device { get; set; }
    }
}
