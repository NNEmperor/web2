using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebSERVER.Models
{
    public class WebServerContext: IdentityDbContext
    {
        public WebServerContext(DbContextOptions options):base(options)
        {

        }
        public DbSet<ApplicationUser> AppUsers { get; set; }
    }
}
