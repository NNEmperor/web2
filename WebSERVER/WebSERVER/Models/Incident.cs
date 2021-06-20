using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebSERVER.Models
{
    public class Incident
    {
        [Key]
        [Column(TypeName = "int")]
        public int Id { get; set; }
        public string UserNameCreator { get; set; }
        public string Type { get; set; }
        public int Priority { get; set; }
        public bool Confirmed { get; set; }
        public string Status { get; set; }//draft, canceled, executing, completed
        public DateTime EstimatedTA { get; set; }
        public DateTime ActualTA { get; set; }
        public DateTime Outage { get; set; }
        public DateTime EstimatedTR { get; set; }
        public int AffectedUsers { get; set; }
        public int NumberOfCalls { get; set; }
        public double VoltageLevel { get; set; }
        public DateTime EstimatedWorkStartTime { get; set; }
        public string Description { get; set; }
        [NotMapped]
        public List<string> Photos { get; set; }
        public string Cause { get; set; }
        public string SubCause { get; set; }
        public string ConstructionType { get; set; }
        public string Material { get; set; }
        [NotMapped]
        public ICollection<Device> Devices { get; set; }
        public ICollection<Call> Calls { get; set; }

        //multimedia
    }
}
