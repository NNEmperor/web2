using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebSERVER.Models
{
    public class Nesto
    {
       
            public string productId { get; set; }
            public string colorId { get; set; }
            public List<IFormFile> files { get; set; }
        
    }
}
