using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebSERVER.Models
{
    public class HistoryWorkRequest
    {
        [Key]
        public int Id { get; set; }
        public string HistoryState { get; set; }    //stanje Approver, Deny, Cencle
        public string WorkRequestId { get; set; }
        public string DateHistory { get; set; }    //kad se desilo
        public string UserName { get; set; }        //ko je promenio
    }
}
