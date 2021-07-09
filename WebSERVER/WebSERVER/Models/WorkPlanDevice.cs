using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebSERVER.Models
{
    public class WorkPlanDevice
    {
        [Key]
        [Column(TypeName = "int")]
        public int WorkPlanDeviceId { get; set; }
        public WorkPlan WorkPlan { get; set; }
        public Device Device { get; set; }
    }
}
