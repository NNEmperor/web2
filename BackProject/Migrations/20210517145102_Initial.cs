using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BackProject.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Incidents",
                columns: table => new
                {
                    IDIncident = table.Column<string>(nullable: false),
                    Type = table.Column<string>(nullable: true),
                    Priority = table.Column<int>(nullable: false),
                    Accepted = table.Column<bool>(nullable: false),
                    Status = table.Column<string>(nullable: true),
                    ETA = table.Column<DateTime>(nullable: false),
                    ATA = table.Column<DateTime>(nullable: false),
                    Time = table.Column<DateTime>(nullable: false),
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
                    table.PrimaryKey("PK_Incidents", x => x.IDIncident);
                });

            migrationBuilder.CreateTable(
                name: "Calls",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Reason = table.Column<string>(nullable: true),
                    Comment = table.Column<string>(nullable: true),
                    Hazard = table.Column<string>(nullable: true),
                    IncidentIDIncident = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Calls", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Calls_Incidents_IncidentIDIncident",
                        column: x => x.IncidentIDIncident,
                        principalTable: "Incidents",
                        principalColumn: "IDIncident",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "WorkRequests",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Type = table.Column<string>(nullable: true),
                    Status = table.Column<string>(nullable: true),
                    IncidentIDIncident = table.Column<string>(nullable: true),
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
                        name: "FK_WorkRequests_Incidents_IncidentIDIncident",
                        column: x => x.IncidentIDIncident,
                        principalTable: "Incidents",
                        principalColumn: "IDIncident",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ChangedByWhen",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    WhoChanged = table.Column<string>(nullable: true),
                    WhenChanged = table.Column<DateTime>(nullable: false),
                    workRequestId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ChangedByWhen", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ChangedByWhen_WorkRequests_workRequestId",
                        column: x => x.workRequestId,
                        principalTable: "WorkRequests",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Devices",
                columns: table => new
                {
                    IdDevice = table.Column<string>(nullable: false),
                    Type = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    XCoordinate = table.Column<double>(nullable: false),
                    YCoordinate = table.Column<double>(nullable: false),
                    WorkRequestId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Devices", x => x.IdDevice);
                    table.ForeignKey(
                        name: "FK_Devices_WorkRequests_WorkRequestId",
                        column: x => x.WorkRequestId,
                        principalTable: "WorkRequests",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Calls_IncidentIDIncident",
                table: "Calls",
                column: "IncidentIDIncident");

            migrationBuilder.CreateIndex(
                name: "IX_ChangedByWhen_workRequestId",
                table: "ChangedByWhen",
                column: "workRequestId");

            migrationBuilder.CreateIndex(
                name: "IX_Devices_WorkRequestId",
                table: "Devices",
                column: "WorkRequestId");

            migrationBuilder.CreateIndex(
                name: "IX_WorkRequests_IncidentIDIncident",
                table: "WorkRequests",
                column: "IncidentIDIncident");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Calls");

            migrationBuilder.DropTable(
                name: "ChangedByWhen");

            migrationBuilder.DropTable(
                name: "Devices");

            migrationBuilder.DropTable(
                name: "WorkRequests");

            migrationBuilder.DropTable(
                name: "Incidents");
        }
    }
}
