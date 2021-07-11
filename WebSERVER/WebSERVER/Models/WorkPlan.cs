using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebSERVER.Models
{
    public class WorkPlan
    {
        public string Type { get; set; }
        [Key]
        public int Id { get; set; }
        public string Company { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime DateTimeCreated { get; set; }
        public DateTime StartDateTime { get; set; }
        public DateTime EndDateTime { get; set; }
        public string FieldCrew { get; set; }
        public string CreatedBy { get; set; }
        public string Status { get; set; }
        public int IncidentId { get; set; }
        public string WorkRequestId { get; set; }
        public string Purpose { get; set; }
        public string Details { get; set; }
        public string Notes { get; set; }
        public ICollection<ChangedByWhen> History { get; set; }
        [NotMapped]
        public List<string> Photos { get; set; }

    }
}
