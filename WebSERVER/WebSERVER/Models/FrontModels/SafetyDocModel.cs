using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebSERVER.Models.FrontModels
{
    public class SafetyDocModel
    {
        public string Type { get; set; }
        public string Status { get; set; }
        public string CreatedBy { get; set; }
        public int WorkPlan { get; set; }
        public string Notes { get; set; }
        public string Team { get; set; }
        public string Details { get; set; }
        public string Phone { get; set; }
        public DateTime CreatedWhen { get; set; }
        public List<ChangedByWhen> History { get; set; }
        public List<int> Devices { get; set; }

        public bool WorkOpCompleted { get; set; }
        public bool TagsRemoved { get; set; }
        public bool GroundingRemoved { get; set; }
        public bool ReadyForService { get; set; }
    }
}
