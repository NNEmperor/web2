using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebSERVER.Models
{
    public class WebServerContext : IdentityDbContext
    {
        public WebServerContext(DbContextOptions options) : base(options)
        {
            
        }
        public DbSet<ApplicationUser> AppUsers { get; set; }
        public DbSet<Call> Calls { get; set; }
        public DbSet<Device> Devices { get; set; }
        public DbSet<Consumer> Consumers { get; set; }
        public DbSet<Incident> Incidents { get; set; }
        public DbSet<WorkRequest> WorkRequests { get; set; }
        public DbSet<IncidentDevice> IncidentDevices { get; set; }
        public DbSet<WorkReqDevice> WorkReqDevices { get; set; }
        public DbSet<WorkPlanDevice> WorkPlanDevices { get; set; }
        public DbSet<Notification> Notifications { get; set; }
        public DbSet<WorkPlan> WorkPlans { get; set; }
        public DbSet<MemberOfTeam> Members { get; set; }
        public DbSet<Team> Teams { get; set; }
        public DbSet<MediaWorkRequest> MediaWorkRequests { get; set; }
        public DbSet<IncidentImage> IncidentImages { get; set; }
        public DbSet<DocImage> DocImages { get; set; }
        public DbSet<WorkPlanImage> WorkPlanImages { get; set; }
        public DbSet<HistoryWorkRequest> HistoryWorkRequests { get; set; }
        public DbSet<SafetyDoc> SafetyDocs { get; set; }
        public DbSet<SafetyDocDevice> SafetyDocDevices { get; set; }
        public DbSet<ChangedByWhen> History { get; set; }
        public DbSet<SocialUser> SocialUsers { get; set; }

    }
}
