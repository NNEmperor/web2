using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebSERVER.Models.FrontModels
{
    public class IncidentModel
    {
        public string Type { get; set; }
        public string Priority { get; set; }
        public string Confirmed { get; set; }
        public string Description { get; set; }
        public string ETA { get; set; }
        public string ATA { get; set; }
        public string ETR { get; set; }
        public string Outage { get; set; }
        public string Affected { get; set; }
        public string NumCalls { get; set; }
        public string Voltage { get; set; }
        public string Estimated { get; set; }
        public string Status { get; set; }
        public string Cause { get; set; }
        public string SubCause { get; set; }
        public string TypeR { get; set; }
        public string Material { get; set; }
        public List<int> Devices { get; set; }
    }
}
