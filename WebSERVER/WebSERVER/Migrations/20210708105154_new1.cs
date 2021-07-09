using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebSERVER.Migrations
{
    public partial class new1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Notifications",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "WorkPlanDevices",
                columns: table => new
                {
                    WorkPlanDeviceId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    WorkPlanId = table.Column<int>(nullable: true),
                    DeviceId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkPlanDevices", x => x.WorkPlanDeviceId);
                    table.ForeignKey(
                        name: "FK_WorkPlanDevices_Devices_DeviceId",
                        column: x => x.DeviceId,
                        principalTable: "Devices",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_WorkPlanDevices_WorkPlans_WorkPlanId",
                        column: x => x.WorkPlanId,
                        principalTable: "WorkPlans",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "WorkPlanImages",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Image = table.Column<string>(nullable: true),
                    WorkPlanId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkPlanImages", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_WorkPlanDevices_DeviceId",
                table: "WorkPlanDevices",
                column: "DeviceId");

            migrationBuilder.CreateIndex(
                name: "IX_WorkPlanDevices_WorkPlanId",
                table: "WorkPlanDevices",
                column: "WorkPlanId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "WorkPlanDevices");

            migrationBuilder.DropTable(
                name: "WorkPlanImages");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Notifications");
        }
    }
}
