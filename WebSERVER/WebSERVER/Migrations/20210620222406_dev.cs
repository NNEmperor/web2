using Microsoft.EntityFrameworkCore.Migrations;

namespace WebSERVER.Migrations
{
    public partial class dev : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_WorkReqDevices_Devices_DeviceId",
                table: "WorkReqDevices");

            migrationBuilder.DropForeignKey(
                name: "FK_WorkReqDevices_WorkRequests_WorkRequestId",
                table: "WorkReqDevices");

            migrationBuilder.DropIndex(
                name: "IX_WorkReqDevices_DeviceId",
                table: "WorkReqDevices");

            migrationBuilder.DropIndex(
                name: "IX_WorkReqDevices_WorkRequestId",
                table: "WorkReqDevices");

            migrationBuilder.DropColumn(
                name: "DeviceId",
                table: "WorkReqDevices");

            migrationBuilder.RenameColumn(
                name: "WorkRequestId",
                table: "WorkReqDevices",
                newName: "WorkRequest");

            migrationBuilder.AlterColumn<string>(
                name: "WorkRequest",
                table: "WorkReqDevices",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Device",
                table: "WorkReqDevices",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Device",
                table: "WorkReqDevices");

            migrationBuilder.RenameColumn(
                name: "WorkRequest",
                table: "WorkReqDevices",
                newName: "WorkRequestId");

            migrationBuilder.AlterColumn<string>(
                name: "WorkRequestId",
                table: "WorkReqDevices",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "DeviceId",
                table: "WorkReqDevices",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_WorkReqDevices_DeviceId",
                table: "WorkReqDevices",
                column: "DeviceId");

            migrationBuilder.CreateIndex(
                name: "IX_WorkReqDevices_WorkRequestId",
                table: "WorkReqDevices",
                column: "WorkRequestId");

            migrationBuilder.AddForeignKey(
                name: "FK_WorkReqDevices_Devices_DeviceId",
                table: "WorkReqDevices",
                column: "DeviceId",
                principalTable: "Devices",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_WorkReqDevices_WorkRequests_WorkRequestId",
                table: "WorkReqDevices",
                column: "WorkRequestId",
                principalTable: "WorkRequests",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
