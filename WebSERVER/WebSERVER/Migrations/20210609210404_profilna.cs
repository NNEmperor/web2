using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebSERVER.Migrations
{
    public partial class profilna : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Image",
                table: "AspNetUsers",
                type: "nvarchar(MAX)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(250)",
                oldNullable: true);

            migrationBuilder.CreateTable(
                name: "Calls",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Reason = table.Column<string>(nullable: true),
                    Comment = table.Column<string>(nullable: true),
                    Hazard = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Calls", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Devices",
                columns: table => new
                {
                    Type = table.Column<string>(nullable: true),
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    XCoordinate = table.Column<double>(nullable: false),
                    YCoordinate = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Devices", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Incidents",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    UserNameCreator = table.Column<string>(nullable: true),
                    Type = table.Column<string>(nullable: true),
                    Priority = table.Column<int>(nullable: false),
                    Confirmed = table.Column<bool>(nullable: false),
                    Status = table.Column<string>(nullable: true),
                    ETA = table.Column<DateTime>(nullable: false),
                    ATA = table.Column<DateTime>(nullable: false),
                    Outage = table.Column<DateTime>(nullable: false),
                    ETR = table.Column<DateTime>(nullable: false),
                    AffectedUsers = table.Column<int>(nullable: false),
                    NumberOfCalls = table.Column<int>(nullable: false),
                    VoltageLevel = table.Column<double>(nullable: false),
                    EstimatedWorkStartTime = table.Column<DateTime>(nullable: false),
                    Cause = table.Column<string>(nullable: true),
                    SubCause = table.Column<string>(nullable: true),
                    ConstructionType = table.Column<string>(nullable: true),
                    Material = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Incidents", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Notifications",
                columns: table => new
                {
                    Type = table.Column<string>(nullable: true),
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    DocumentId = table.Column<int>(nullable: false),
                    Read = table.Column<bool>(nullable: false),
                    Content = table.Column<string>(nullable: true),
                    DateTime = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Notifications", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "WorkPlans",
                columns: table => new
                {
                    Type = table.Column<string>(nullable: true),
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Company = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    DateTimeCreated = table.Column<DateTime>(nullable: false),
                    StartDateTime = table.Column<DateTime>(nullable: false),
                    EndDateTime = table.Column<DateTime>(nullable: false),
                    FieldCrew = table.Column<string>(nullable: true),
                    CreatedBy = table.Column<string>(nullable: true),
                    Status = table.Column<string>(nullable: true),
                    IncidentId = table.Column<int>(nullable: false),
                    WorkRequestId = table.Column<int>(nullable: false),
                    Purpose = table.Column<string>(nullable: true),
                    Details = table.Column<string>(nullable: true),
                    Notes = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkPlans", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "IncidentDevices",
                columns: table => new
                {
                    IncidentDeviceId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    IncidentId = table.Column<int>(nullable: true),
                    DeviceId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IncidentDevices", x => x.IncidentDeviceId);
                    table.ForeignKey(
                        name: "FK_IncidentDevices_Devices_DeviceId",
                        column: x => x.DeviceId,
                        principalTable: "Devices",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_IncidentDevices_Incidents_IncidentId",
                        column: x => x.IncidentId,
                        principalTable: "Incidents",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "WorkRequests",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Type = table.Column<string>(nullable: true),
                    Status = table.Column<string>(nullable: true),
                    IncidentId = table.Column<int>(nullable: true),
                    Street = table.Column<string>(nullable: true),
                    StartWork = table.Column<DateTime>(nullable: false),
                    EndWork = table.Column<DateTime>(nullable: false),
                    Purpose = table.Column<string>(nullable: true),
                    Notes = table.Column<string>(nullable: true),
                    Emergency = table.Column<bool>(nullable: false),
                    Company = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    Created = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkRequests", x => x.Id);
                    table.ForeignKey(
                        name: "FK_WorkRequests_Incidents_IncidentId",
                        column: x => x.IncidentId,
                        principalTable: "Incidents",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ChangedByWhen",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    WhoChanged = table.Column<string>(nullable: true),
                    WhenChanged = table.Column<DateTime>(nullable: false),
                    workRequestId = table.Column<int>(nullable: true),
                    WorkPlanId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ChangedByWhen", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ChangedByWhen_WorkPlans_WorkPlanId",
                        column: x => x.WorkPlanId,
                        principalTable: "WorkPlans",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ChangedByWhen_WorkRequests_workRequestId",
                        column: x => x.workRequestId,
                        principalTable: "WorkRequests",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "WorkReqDevices",
                columns: table => new
                {
                    WorkReqDeviceId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    WorkRequestId = table.Column<int>(nullable: true),
                    DeviceId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkReqDevices", x => x.WorkReqDeviceId);
                    table.ForeignKey(
                        name: "FK_WorkReqDevices_Devices_DeviceId",
                        column: x => x.DeviceId,
                        principalTable: "Devices",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_WorkReqDevices_WorkRequests_WorkRequestId",
                        column: x => x.WorkRequestId,
                        principalTable: "WorkRequests",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ChangedByWhen_WorkPlanId",
                table: "ChangedByWhen",
                column: "WorkPlanId");

            migrationBuilder.CreateIndex(
                name: "IX_ChangedByWhen_workRequestId",
                table: "ChangedByWhen",
                column: "workRequestId");

            migrationBuilder.CreateIndex(
                name: "IX_IncidentDevices_DeviceId",
                table: "IncidentDevices",
                column: "DeviceId");

            migrationBuilder.CreateIndex(
                name: "IX_IncidentDevices_IncidentId",
                table: "IncidentDevices",
                column: "IncidentId");

            migrationBuilder.CreateIndex(
                name: "IX_WorkReqDevices_DeviceId",
                table: "WorkReqDevices",
                column: "DeviceId");

            migrationBuilder.CreateIndex(
                name: "IX_WorkReqDevices_WorkRequestId",
                table: "WorkReqDevices",
                column: "WorkRequestId");

            migrationBuilder.CreateIndex(
                name: "IX_WorkRequests_IncidentId",
                table: "WorkRequests",
                column: "IncidentId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Calls");

            migrationBuilder.DropTable(
                name: "ChangedByWhen");

            migrationBuilder.DropTable(
                name: "IncidentDevices");

            migrationBuilder.DropTable(
                name: "Notifications");

            migrationBuilder.DropTable(
                name: "WorkReqDevices");

            migrationBuilder.DropTable(
                name: "WorkPlans");

            migrationBuilder.DropTable(
                name: "Devices");

            migrationBuilder.DropTable(
                name: "WorkRequests");

            migrationBuilder.DropTable(
                name: "Incidents");

            migrationBuilder.AlterColumn<string>(
                name: "Image",
                table: "AspNetUsers",
                type: "nvarchar(250)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(MAX)",
                oldNullable: true);
        }
    }
}
