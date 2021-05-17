using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BackProject.Models
{
    public class ChangedByWhen
    {
        [Key]
        public int Id { get; set; }
        public string WhoChanged { get; set; }
        public DateTime WhenChanged { get; set; }

        //one to many
        public WorkRequest workRequest { get; set; }

    }
}
