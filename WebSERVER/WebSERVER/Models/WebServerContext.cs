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
        public DbSet<Call> Calls { get; set; }
        public DbSet<Device> Devices { get; set; }
        public DbSet<Incident> Incidents { get; set; }
        public DbSet<WorkRequest> WorkRequests { get; set; }
        public DbSet<IncidentDevice> IncidentDevices { get; set; }
        public DbSet<WorkReqDevice> WorkReqDevices { get; set; }
        public DbSet<Notification> Notifications { get; set; }
        public DbSet<WorkPlan> WorkPlans { get; set; }

    }
}
