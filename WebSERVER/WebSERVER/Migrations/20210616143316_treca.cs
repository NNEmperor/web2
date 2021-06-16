using Microsoft.EntityFrameworkCore.Migrations;

namespace WebSERVER.Migrations
{
    public partial class treca : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "LastName",
                table: "Calls",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Calls",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserName",
                table: "Calls",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LastName",
                table: "Calls");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "Calls");

            migrationBuilder.DropColumn(
                name: "UserName",
                table: "Calls");
        }
    }
}
