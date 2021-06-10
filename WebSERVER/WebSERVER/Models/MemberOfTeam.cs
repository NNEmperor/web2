using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebSERVER.Models
{
    public class MemberOfTeam
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column(TypeName = "int")]
        public int MemberId { get; set; }
        [Column(TypeName = "nvarchar(250)")]
        public string MemberUserName { get; set; }
        [Column(TypeName = "nvarchar(250)")]
        public string MemberTeamId { get; set; }
    }
}
