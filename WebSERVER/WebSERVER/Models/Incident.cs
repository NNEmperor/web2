using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebSERVER.Models
{
    public class Incident
    {
        [Key]
        [Required]
        public int Id { get; set; }

        public string Type { get; set; }
        public int Priority { get; set; }
        public bool Accepted { get; set; }
        public string Status { get; set; }
        public DateTime ETA { get; set; }
        public DateTime ATA { get; set; }
        public DateTime Time { get; set; }
        public DateTime ETR { get; set; }
        public int AffectedUsers { get; set; }
        public int NumberOfCalls { get; set; }
        public double VoltageLevel { get; set; }
        public DateTime EstimatedWorkStartTime { get; set; }

        public string Cause { get; set; }
        public string SubCause { get; set; }
        public string ConstructionType { get; set; }
        public string Material { get; set; }
        public ICollection<Call> RecievedCalls { get; set; }

        //multimedia
    }
}
