using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebSERVER.Models
{
    public class SafetyDocDevice
    {
        [Key]
        [Column(TypeName = "int")]
        public int SafetyDocDeviceId { get; set; }
        public SafetyDoc SafetyDoc { get; set; }
        public Device Device { get; set; }
    }
}
