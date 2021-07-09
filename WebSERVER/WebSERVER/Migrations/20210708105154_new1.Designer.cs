﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebSERVER.Models;

namespace WebSERVER.Migrations
{
    [DbContext(typeof(WebServerContext))]
    [Migration("20210708105154_new1")]
    partial class new1
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.14-servicing-32113")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Name")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasName("RoleNameIndex")
                        .HasFilter("[NormalizedName] IS NOT NULL");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("RoleId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUser", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AccessFailedCount");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Discriminator")
                        .IsRequired();

                    b.Property<string>("Email")
                        .HasMaxLength(256);

                    b.Property<bool>("EmailConfirmed");

                    b.Property<bool>("LockoutEnabled");

                    b.Property<DateTimeOffset?>("LockoutEnd");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256);

                    b.Property<string>("PasswordHash");

                    b.Property<string>("PhoneNumber");

                    b.Property<bool>("PhoneNumberConfirmed");

                    b.Property<string>("SecurityStamp");

                    b.Property<bool>("TwoFactorEnabled");

                    b.Property<string>("UserName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasName("UserNameIndex")
                        .HasFilter("[NormalizedUserName] IS NOT NULL");

                    b.ToTable("AspNetUsers");

                    b.HasDiscriminator<string>("Discriminator").HasValue("IdentityUser");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasMaxLength(128);

                    b.Property<string>("ProviderKey")
                        .HasMaxLength(128);

                    b.Property<string>("ProviderDisplayName");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("RoleId");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("LoginProvider")
                        .HasMaxLength(128);

                    b.Property<string>("Name")
                        .HasMaxLength(128);

                    b.Property<string>("Value");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("WebSERVER.Models.Call", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Address");

                    b.Property<string>("City");

                    b.Property<string>("Comment");

                    b.Property<string>("Hazard");

                    b.Property<string>("LastName");

                    b.Property<string>("Name");

                    b.Property<string>("Reason");

                    b.Property<string>("UserName");

                    b.Property<string>("ZipCode");

                    b.Property<int?>("incidentId");

                    b.HasKey("Id");

                    b.HasIndex("incidentId");

                    b.ToTable("Calls");
                });

            modelBuilder.Entity("WebSERVER.Models.ChangedByWhen", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("SafetyDocId");

                    b.Property<DateTime>("WhenChanged");

                    b.Property<string>("WhoChanged");

                    b.Property<int?>("WorkPlanId");

                    b.HasKey("Id");

                    b.HasIndex("SafetyDocId");

                    b.HasIndex("WorkPlanId");

                    b.ToTable("History");
                });

            modelBuilder.Entity("WebSERVER.Models.Device", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Address");

                    b.Property<string>("Name");

                    b.Property<string>("Type");

                    b.Property<double>("XCoordinate");

                    b.Property<double>("YCoordinate");

                    b.HasKey("Id");

                    b.ToTable("Devices");
                });

            modelBuilder.Entity("WebSERVER.Models.DocImage", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("DocId");

                    b.Property<string>("Image");

                    b.HasKey("Id");

                    b.ToTable("DocImages");
                });

            modelBuilder.Entity("WebSERVER.Models.HistoryWorkRequest", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("DateHistory");

                    b.Property<string>("HistoryState");

                    b.Property<string>("UserName");

                    b.Property<string>("WorkRequestId");

                    b.HasKey("Id");

                    b.ToTable("HistoryWorkRequests");
                });

            modelBuilder.Entity("WebSERVER.Models.Incident", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("ActualTA");

                    b.Property<int>("AffectedUsers");

                    b.Property<string>("Cause");

                    b.Property<bool>("Confirmed");

                    b.Property<string>("ConstructionType");

                    b.Property<string>("Description");

                    b.Property<DateTime>("EstimatedTA");

                    b.Property<DateTime>("EstimatedTR");

                    b.Property<DateTime>("EstimatedWorkStartTime");

                    b.Property<string>("Material");

                    b.Property<int>("NumberOfCalls");

                    b.Property<DateTime>("Outage");

                    b.Property<int>("Priority");

                    b.Property<string>("Status");

                    b.Property<string>("SubCause");

                    b.Property<string>("Team");

                    b.Property<string>("Type");

                    b.Property<string>("UserNameCreator");

                    b.Property<double>("VoltageLevel");

                    b.HasKey("Id");

                    b.ToTable("Incidents");
                });

            modelBuilder.Entity("WebSERVER.Models.IncidentDevice", b =>
                {
                    b.Property<int>("IncidentDeviceId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Device");

                    b.Property<int>("Incident");

                    b.HasKey("IncidentDeviceId");

                    b.ToTable("IncidentDevices");
                });

            modelBuilder.Entity("WebSERVER.Models.IncidentImage", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Image");

                    b.Property<int>("IncidentId");

                    b.HasKey("Id");

                    b.ToTable("IncidentImages");
                });

            modelBuilder.Entity("WebSERVER.Models.MediaWorkRequest", b =>
                {
                    b.Property<int>("IdMedia")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Image");

                    b.Property<string>("WorkRequestID");

                    b.HasKey("IdMedia");

                    b.ToTable("MediaWorkRequests");
                });

            modelBuilder.Entity("WebSERVER.Models.MemberOfTeam", b =>
                {
                    b.Property<int>("MemberId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("MemberTeamId")
                        .HasColumnType("nvarchar(250)");

                    b.Property<string>("MemberUserName")
                        .HasColumnType("nvarchar(250)");

                    b.HasKey("MemberId");

                    b.ToTable("Members");
                });

            modelBuilder.Entity("WebSERVER.Models.Notification", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Content");

                    b.Property<DateTime>("DateTime");

                    b.Property<int>("DocumentId");

                    b.Property<bool>("Read");

                    b.Property<string>("Type");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.ToTable("Notifications");
                });

            modelBuilder.Entity("WebSERVER.Models.SafetyDoc", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("CreatedBy");

                    b.Property<DateTime>("CreatedWhen");

                    b.Property<string>("Details");

                    b.Property<bool>("GroundingRemoved");

                    b.Property<string>("Notes");

                    b.Property<string>("Phone");

                    b.Property<bool>("ReadyForService");

                    b.Property<string>("Status");

                    b.Property<bool>("TagsRemoved");

                    b.Property<string>("TeamId");

                    b.Property<string>("Type");

                    b.Property<bool>("WorkOpCompleted");

                    b.Property<int?>("WorkPlanId");

                    b.HasKey("Id");

                    b.HasIndex("TeamId");

                    b.HasIndex("WorkPlanId");

                    b.ToTable("SafetyDocs");
                });

            modelBuilder.Entity("WebSERVER.Models.SafetyDocDevice", b =>
                {
                    b.Property<int>("SafetyDocDeviceId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("DeviceId");

                    b.Property<int?>("SafetyDocId");

                    b.HasKey("SafetyDocDeviceId");

                    b.HasIndex("DeviceId");

                    b.HasIndex("SafetyDocId");

                    b.ToTable("SafetyDocDevices");
                });

            modelBuilder.Entity("WebSERVER.Models.SocialUser", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Email");

                    b.Property<string>("Lastname");

                    b.Property<string>("Name");

                    b.Property<string>("Social");

                    b.Property<string>("Token");

                    b.Property<string>("UserName");

                    b.Property<string>("UserRole");

                    b.HasKey("Id");

                    b.ToTable("SocialUsers");
                });

            modelBuilder.Entity("WebSERVER.Models.Team", b =>
                {
                    b.Property<string>("TeamId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("nvarchar(250)");

                    b.Property<string>("TeamName")
                        .HasColumnType("nvarchar(250)");

                    b.HasKey("TeamId");

                    b.ToTable("Teams");
                });

            modelBuilder.Entity("WebSERVER.Models.WorkPlan", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Company");

                    b.Property<string>("CreatedBy");

                    b.Property<DateTime>("DateTimeCreated");

                    b.Property<string>("Details");

                    b.Property<DateTime>("EndDateTime");

                    b.Property<string>("FieldCrew");

                    b.Property<int>("IncidentId");

                    b.Property<string>("Notes");

                    b.Property<string>("PhoneNumber");

                    b.Property<string>("Purpose");

                    b.Property<DateTime>("StartDateTime");

                    b.Property<string>("Status");

                    b.Property<string>("Type");

                    b.Property<int>("WorkRequestId");

                    b.HasKey("Id");

                    b.ToTable("WorkPlans");
                });

            modelBuilder.Entity("WebSERVER.Models.WorkPlanDevice", b =>
                {
                    b.Property<int>("WorkPlanDeviceId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("DeviceId");

                    b.Property<int?>("WorkPlanId");

                    b.HasKey("WorkPlanDeviceId");

                    b.HasIndex("DeviceId");

                    b.HasIndex("WorkPlanId");

                    b.ToTable("WorkPlanDevices");
                });

            modelBuilder.Entity("WebSERVER.Models.WorkPlanImage", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Image");

                    b.Property<int>("WorkPlanId");

                    b.HasKey("Id");

                    b.ToTable("WorkPlanImages");
                });

            modelBuilder.Entity("WebSERVER.Models.WorkReqDevice", b =>
                {
                    b.Property<int>("WorkReqDeviceId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Device");

                    b.Property<string>("WorkRequest");

                    b.HasKey("WorkReqDeviceId");

                    b.ToTable("WorkReqDevices");
                });

            modelBuilder.Entity("WebSERVER.Models.WorkRequest", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Company");

                    b.Property<string>("CreatedDate");

                    b.Property<string>("CreatedTime");

                    b.Property<string>("Creator");

                    b.Property<bool>("Emergency");

                    b.Property<string>("EndWorkDate");

                    b.Property<string>("EndWorkTime");

                    b.Property<string>("HistoryState");

                    b.Property<string>("IncidentID");

                    b.Property<string>("Notes");

                    b.Property<string>("PhoneNumber");

                    b.Property<string>("Purpose");

                    b.Property<string>("StartWorkDate");

                    b.Property<string>("StartWorkTime");

                    b.Property<string>("Status");

                    b.Property<string>("Street");

                    b.Property<string>("Type");

                    b.HasKey("Id");

                    b.ToTable("WorkRequests");
                });

            modelBuilder.Entity("WebSERVER.Models.ApplicationUser", b =>
                {
                    b.HasBaseType("Microsoft.AspNetCore.Identity.IdentityUser");

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(250)");

                    b.Property<string>("Birthday")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Image")
                        .HasColumnType("nvarchar(MAX)");

                    b.Property<string>("Lastname")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(50)");

                    b.Property<bool>("SendConfirmation");

                    b.Property<string>("Status")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("TimeAction")
                        .HasColumnType("nvarchar(250)");

                    b.Property<string>("UserRole")
                        .HasColumnType("nvarchar(50)");

                    b.ToTable("ApplicationUser");

                    b.HasDiscriminator().HasValue("ApplicationUser");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("WebSERVER.Models.Call", b =>
                {
                    b.HasOne("WebSERVER.Models.Incident", "incident")
                        .WithMany("Calls")
                        .HasForeignKey("incidentId");
                });

            modelBuilder.Entity("WebSERVER.Models.ChangedByWhen", b =>
                {
                    b.HasOne("WebSERVER.Models.SafetyDoc", "SafetyDoc")
                        .WithMany("History")
                        .HasForeignKey("SafetyDocId");

                    b.HasOne("WebSERVER.Models.WorkPlan")
                        .WithMany("History")
                        .HasForeignKey("WorkPlanId");
                });

            modelBuilder.Entity("WebSERVER.Models.SafetyDoc", b =>
                {
                    b.HasOne("WebSERVER.Models.Team", "Team")
                        .WithMany()
                        .HasForeignKey("TeamId");

                    b.HasOne("WebSERVER.Models.WorkPlan", "WorkPlan")
                        .WithMany()
                        .HasForeignKey("WorkPlanId");
                });

            modelBuilder.Entity("WebSERVER.Models.SafetyDocDevice", b =>
                {
                    b.HasOne("WebSERVER.Models.Device", "Device")
                        .WithMany()
                        .HasForeignKey("DeviceId");

                    b.HasOne("WebSERVER.Models.SafetyDoc", "SafetyDoc")
                        .WithMany()
                        .HasForeignKey("SafetyDocId");
                });

            modelBuilder.Entity("WebSERVER.Models.WorkPlanDevice", b =>
                {
                    b.HasOne("WebSERVER.Models.Device", "Device")
                        .WithMany()
                        .HasForeignKey("DeviceId");

                    b.HasOne("WebSERVER.Models.WorkPlan", "WorkPlan")
                        .WithMany()
                        .HasForeignKey("WorkPlanId");
                });
#pragma warning restore 612, 618
        }
    }
}
