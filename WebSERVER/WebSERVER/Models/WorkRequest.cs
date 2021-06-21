using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebSERVER.Models
{
    public class WorkRequest
    {
        [Key]
        public string Id { get; set; }
        public string Type { get; set; }
        public string Status { get; set; }
       // public Incident Incident { get; set; }
        public string IncidentID { get; set; }
        public string Street { get; set; }//ulica
        public string StartWorkDate { get; set; }
        public string StartWorkTime { get; set; }
        public string EndWorkDate { get; set; }
        public string EndWorkTime { get; set; }
        //user neki
        public string Purpose { get; set; }
        public string Notes { get; set; }
        //detalji
        public bool Emergency { get; set; }
        public string Company { get; set; }
        public string PhoneNumber { get; set; }
        public string CreatedDate { get; set; }
        public string CreatedTime { get; set; }
        public string Creator { get; set; }
        //multimedia
        [NotMapped]
        public List<string> Photos { get; set; }

        public string HistoryState { get; set; }    //inicijalno nema None
        [NotMapped]
        public List<Device> Devices { get; set; }



        // public ICollection<ChangedByWhen> History { get; set; }


    }
}
