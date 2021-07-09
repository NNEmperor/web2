using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebSERVER.Models
{
    public class WorkPlanImage
    {
        [Key]
        [Column(TypeName = "int")]
        public int Id { get; set; }
        public string Image { get; set; }
        public int WorkPlanId { get; set; }
    }
}
