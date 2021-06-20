using Microsoft.EntityFrameworkCore.Migrations;

namespace WebSERVER.Migrations
{
    public partial class inc : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_IncidentDevices_Devices_DeviceId",
                table: "IncidentDevices");

            migrationBuilder.DropForeignKey(
                name: "FK_IncidentDevices_Incidents_IncidentId",
                table: "IncidentDevices");

            migrationBuilder.DropIndex(
                name: "IX_IncidentDevices_DeviceId",
                table: "IncidentDevices");

            migrationBuilder.DropIndex(
                name: "IX_IncidentDevices_IncidentId",
                table: "IncidentDevices");

            migrationBuilder.DropColumn(
                name: "DeviceId",
                table: "IncidentDevices");

            migrationBuilder.DropColumn(
                name: "IncidentId",
                table: "IncidentDevices");

            migrationBuilder.AddColumn<int>(
                name: "Device",
                table: "IncidentDevices",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Incident",
                table: "IncidentDevices",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Device",
                table: "IncidentDevices");

            migrationBuilder.DropColumn(
                name: "Incident",
                table: "IncidentDevices");

            migrationBuilder.AddColumn<int>(
                name: "DeviceId",
                table: "IncidentDevices",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "IncidentId",
                table: "IncidentDevices",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_IncidentDevices_DeviceId",
                table: "IncidentDevices",
                column: "DeviceId");

            migrationBuilder.CreateIndex(
                name: "IX_IncidentDevices_IncidentId",
                table: "IncidentDevices",
                column: "IncidentId");

            migrationBuilder.AddForeignKey(
                name: "FK_IncidentDevices_Devices_DeviceId",
                table: "IncidentDevices",
                column: "DeviceId",
                principalTable: "Devices",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_IncidentDevices_Incidents_IncidentId",
                table: "IncidentDevices",
                column: "IncidentId",
                principalTable: "Incidents",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
