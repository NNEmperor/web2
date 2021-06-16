using Microsoft.EntityFrameworkCore.Migrations;

namespace WebSERVER.Migrations
{
    public partial class drugi : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Address",
                table: "Calls",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "incidentId",
                table: "Calls",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Calls_incidentId",
                table: "Calls",
                column: "incidentId");

            migrationBuilder.AddForeignKey(
                name: "FK_Calls_Incidents_incidentId",
                table: "Calls",
                column: "incidentId",
                principalTable: "Incidents",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Calls_Incidents_incidentId",
                table: "Calls");

            migrationBuilder.DropIndex(
                name: "IX_Calls_incidentId",
                table: "Calls");

            migrationBuilder.DropColumn(
                name: "Address",
                table: "Calls");

            migrationBuilder.DropColumn(
                name: "incidentId",
                table: "Calls");
        }
    }
}
