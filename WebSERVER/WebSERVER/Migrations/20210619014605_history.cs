using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebSERVER.Migrations
{
    public partial class history : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "HistoryState",
                table: "WorkRequests",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "HistoryWorkRequests",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    HistoryState = table.Column<string>(nullable: true),
                    WorkRequestId = table.Column<string>(nullable: true),
                    Date = table.Column<string>(nullable: true),
                    UserName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HistoryWorkRequests", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "HistoryWorkRequests");

            migrationBuilder.DropColumn(
                name: "HistoryState",
                table: "WorkRequests");
        }
    }
}
