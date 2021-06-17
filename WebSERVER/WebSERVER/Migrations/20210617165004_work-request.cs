using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebSERVER.Migrations
{
    public partial class workrequest : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_WorkRequests_Incidents_IncidentId",
                table: "WorkRequests");

            migrationBuilder.DropIndex(
                name: "IX_WorkRequests_IncidentId",
                table: "WorkRequests");

            migrationBuilder.DropColumn(
                name: "Created",
                table: "WorkRequests");

            migrationBuilder.DropColumn(
                name: "EndWork",
                table: "WorkRequests");

            migrationBuilder.DropColumn(
                name: "StartWork",
                table: "WorkRequests");

            migrationBuilder.RenameColumn(
                name: "IncidentId",
                table: "WorkRequests",
                newName: "IncidentID");

            migrationBuilder.AlterColumn<string>(
                name: "IncidentID",
                table: "WorkRequests",
                nullable: true,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CreatedDate",
                table: "WorkRequests",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CreatedTime",
                table: "WorkRequests",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "EndWorkDate",
                table: "WorkRequests",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "EndWorkTime",
                table: "WorkRequests",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "StartWorkDate",
                table: "WorkRequests",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "StartWorkTime",
                table: "WorkRequests",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedDate",
                table: "WorkRequests");

            migrationBuilder.DropColumn(
                name: "CreatedTime",
                table: "WorkRequests");

            migrationBuilder.DropColumn(
                name: "EndWorkDate",
                table: "WorkRequests");

            migrationBuilder.DropColumn(
                name: "EndWorkTime",
                table: "WorkRequests");

            migrationBuilder.DropColumn(
                name: "StartWorkDate",
                table: "WorkRequests");

            migrationBuilder.DropColumn(
                name: "StartWorkTime",
                table: "WorkRequests");

            migrationBuilder.RenameColumn(
                name: "IncidentID",
                table: "WorkRequests",
                newName: "IncidentId");

            migrationBuilder.AlterColumn<int>(
                name: "IncidentId",
                table: "WorkRequests",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "Created",
                table: "WorkRequests",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "EndWork",
                table: "WorkRequests",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "StartWork",
                table: "WorkRequests",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.CreateIndex(
                name: "IX_WorkRequests_IncidentId",
                table: "WorkRequests",
                column: "IncidentId");

            migrationBuilder.AddForeignKey(
                name: "FK_WorkRequests_Incidents_IncidentId",
                table: "WorkRequests",
                column: "IncidentId",
                principalTable: "Incidents",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
