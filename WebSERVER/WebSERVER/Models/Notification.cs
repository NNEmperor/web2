using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebSERVER.Models
{
    public class Notification
    {
        public string Type { get; set; }
        [Key]
        public int Id { get; set; }
        public int DocumentId { get; set; }
        public bool Read { get; set; }
        public string Content { get; set; }
        public DateTime DateTime { get; set; }
    }
}
