using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebSERVER.Models
{
    public class SafetyDoc
    {
        [Key]
        [Column(TypeName = "int")]
        public int Id { get; set; }
        public string Type { get; set; }
        public string Status { get; set; }
        public string CreatedBy { get; set; }
        public WorkPlan WorkPlan { get; set; }
        public string Notes { get; set; }
        public Team Team { get; set; }
        public string Details { get; set; }
        public string Phone { get; set; }
        public DateTime CreatedWhen { get; set; }
        public ICollection<ChangedByWhen> History { get; set; }

        [NotMapped]
        public ICollection<Device> Devices { get; set; }

        public bool WorkOpCompleted { get; set; }
        public bool TagsRemoved { get; set; }
        public bool GroundingRemoved { get; set; }
        public bool ReadyForService { get; set; }
    }
}
