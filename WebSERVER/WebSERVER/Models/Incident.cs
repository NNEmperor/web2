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
        public string  UserNameCreator { get; set; }

        public string Type { get; set; }
        public int Priority { get; set; }
        public bool Confirmed { get; set; }
        public string Status { get; set; }//draft, canceled, executing, completed
        public DateTime ETA { get; set; }
        public DateTime ATA { get; set; }
        public DateTime Outage { get; set; }
        public DateTime ETR { get; set; }
        public int AffectedUsers { get; set; }
        public int NumberOfCalls { get; set; }
        public double VoltageLevel { get; set; }
        public DateTime EstimatedWorkStartTime { get; set; }

        public string Cause { get; set; }
        public string SubCause { get; set; }
        public string ConstructionType { get; set; }
        public string Material { get; set; }
        //public ICollection<Call> RecievedCalls { get; set; }

        //multimedia
    }
}
