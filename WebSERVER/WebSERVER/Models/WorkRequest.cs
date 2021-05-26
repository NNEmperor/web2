using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebSERVER.Models
{
    public class WorkRequest
    {
        [Key]
        public int Id { get; set; }
        public string Type { get; set; }
        public string Status { get; set; }
        public Incident Incident { get; set; }
        public string Street { get; set; }
        public DateTime StartWork { get; set; }
        public DateTime EndWork { get; set; }
        //user neki
        public string Purpose { get; set; }
        public string Notes { get; set; }
        //detalji
        public bool Emergency { get; set; }
        public string Company { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime Created { get; set; }

        public ICollection<ChangedByWhen> History { get; set; }

        //multimedia
    }
}
