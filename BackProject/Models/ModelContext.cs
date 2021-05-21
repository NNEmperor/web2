using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackProject.Models
{
    public class ModelContext : DbContext
    {
        public ModelContext(DbContextOptions<ModelContext> options) : base(options)
        {

        }

        public DbSet<Incident> Incidents { get; set; }
        public DbSet<Call> Calls { get; set; }
        public DbSet<Device> Devices { get; set; }
        public DbSet<WorkRequest> WorkRequests { get; set; }

        public DbSet<RegisterUser> Users { get; set; }


    }
}
