﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebSERVER.Models
{
    public class ChangedByWhen
    {
        [Key]
        [Column(TypeName = "int")]
        public int Id { get; set; }
        public string WhoChanged { get; set; }
        public DateTime WhenChanged { get; set; }

        public SafetyDoc SafetyDoc { get; set; }
    }
}
