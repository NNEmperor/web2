using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebSERVER.Models
{
    public class Team
    {
        [Key]
        [Column(TypeName = "nvarchar(250)")]
        public string TeamId { get; set; }
        [Column(TypeName = "nvarchar(250)")]
        public string TeamName { get; set; }
        [NotMapped]
        public List<Object> Members { get; set; }

    }
}
