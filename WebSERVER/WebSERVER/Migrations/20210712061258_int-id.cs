using Microsoft.EntityFrameworkCore.Migrations;

namespace WebSERVER.Migrations
{
    public partial class intid : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_WorkPlanDevices_Devices_DeviceId",
                table: "WorkPlanDevices");

            migrationBuilder.DropForeignKey(
                name: "FK_WorkPlanDevices_WorkPlans_WorkPlanId",
                table: "WorkPlanDevices");

            migrationBuilder.DropIndex(
                name: "IX_WorkPlanDevices_DeviceId",
                table: "WorkPlanDevices");

            migrationBuilder.DropIndex(
                name: "IX_WorkPlanDevices_WorkPlanId",
                table: "WorkPlanDevices");

            migrationBuilder.DropColumn(
                name: "DeviceId",
                table: "WorkPlanDevices");

            migrationBuilder.DropColumn(
                name: "WorkPlanId",
                table: "WorkPlanDevices");

            migrationBuilder.AddColumn<int>(
                name: "Device",
                table: "WorkPlanDevices",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "WorkPlan",
                table: "WorkPlanDevices",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Device",
                table: "WorkPlanDevices");

            migrationBuilder.DropColumn(
                name: "WorkPlan",
                table: "WorkPlanDevices");

            migrationBuilder.AddColumn<int>(
                name: "DeviceId",
                table: "WorkPlanDevices",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "WorkPlanId",
                table: "WorkPlanDevices",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_WorkPlanDevices_DeviceId",
                table: "WorkPlanDevices",
                column: "DeviceId");

            migrationBuilder.CreateIndex(
                name: "IX_WorkPlanDevices_WorkPlanId",
                table: "WorkPlanDevices",
                column: "WorkPlanId");

            migrationBuilder.AddForeignKey(
                name: "FK_WorkPlanDevices_Devices_DeviceId",
                table: "WorkPlanDevices",
                column: "DeviceId",
                principalTable: "Devices",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_WorkPlanDevices_WorkPlans_WorkPlanId",
                table: "WorkPlanDevices",
                column: "WorkPlanId",
                principalTable: "WorkPlans",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
