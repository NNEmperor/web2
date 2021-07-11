using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebSERVER.Models.FrontModels
{
    public class WorkPlanModel
    {
        public string Type { get; set; }
        public string Company { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime DateTimeCreated { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string FieldCrew { get; set; }
        public string CreatedBy { get; set; }
        public string Status { get; set; }
        public int IncidentId { get; set; }
        public string WorkRequestId { get; set; }
        public string Purpose { get; set; }
        public string Details { get; set; }
        public string Notes { get; set; }
        public List<ChangedByWhen> History { get; set; }
        public List<int> Instructions { get; set; }
        public List<int> Devices { get; set; }
    }
}
