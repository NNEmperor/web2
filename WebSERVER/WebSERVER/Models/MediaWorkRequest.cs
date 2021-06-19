using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebSERVER.Models
{
    public class MediaWorkRequest
    {
        [Key]
       
        public int IdMedia { get; set; }
       
        public string Image { get; set; }
        
        public string WorkRequestID { get; set; }
    }
}
