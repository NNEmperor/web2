using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebSERVER.Models.FrontModels
{
    public class IncidentModel
    {
        public int Id { get; set; }
        public string Type { get; set; }
        public int Priority { get; set; }
        public bool Confirmed { get; set; }
        public string Description { get; set; }
        public string ETA { get; set; }
        public string ATA { get; set; }
        public string ETR { get; set; }
        public string Outage { get; set; }
        public int Affected { get; set; }
        public int NumCalls { get; set; }
        public double Voltage { get; set; }
        public string Estimated { get; set; }
        public string Status { get; set; }
        public string Cause { get; set; }
        public string SubCause { get; set; }
        public string TypeR { get; set; }
        public string Material { get; set; }
    }
}
