using Microsoft.EntityFrameworkCore.Migrations;

namespace WebSERVER.Migrations
{
    public partial class not : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Notifications");

            migrationBuilder.AddColumn<string>(
                name: "UserName",
                table: "Notifications",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserName",
                table: "Notifications");

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Notifications",
                nullable: false,
                defaultValue: 0);
        }
    }
}
