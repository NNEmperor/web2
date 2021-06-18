using Microsoft.EntityFrameworkCore.Migrations;

namespace WebSERVER.Migrations
{
    public partial class druga : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ChangedByWhen_SafetyDocs_SafetyDocId",
                table: "ChangedByWhen");

            migrationBuilder.DropForeignKey(
                name: "FK_ChangedByWhen_WorkPlans_WorkPlanId",
                table: "ChangedByWhen");

            migrationBuilder.DropForeignKey(
                name: "FK_ChangedByWhen_WorkRequests_workRequestId",
                table: "ChangedByWhen");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ChangedByWhen",
                table: "ChangedByWhen");

            migrationBuilder.DropIndex(
                name: "IX_ChangedByWhen_workRequestId",
                table: "ChangedByWhen");

            migrationBuilder.DropColumn(
                name: "workRequestId",
                table: "ChangedByWhen");

            migrationBuilder.RenameTable(
                name: "ChangedByWhen",
                newName: "History");

            migrationBuilder.RenameIndex(
                name: "IX_ChangedByWhen_WorkPlanId",
                table: "History",
                newName: "IX_History_WorkPlanId");

            migrationBuilder.RenameIndex(
                name: "IX_ChangedByWhen_SafetyDocId",
                table: "History",
                newName: "IX_History_SafetyDocId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_History",
                table: "History",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_History_SafetyDocs_SafetyDocId",
                table: "History",
                column: "SafetyDocId",
                principalTable: "SafetyDocs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_History_WorkPlans_WorkPlanId",
                table: "History",
                column: "WorkPlanId",
                principalTable: "WorkPlans",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_History_SafetyDocs_SafetyDocId",
                table: "History");

            migrationBuilder.DropForeignKey(
                name: "FK_History_WorkPlans_WorkPlanId",
                table: "History");

            migrationBuilder.DropPrimaryKey(
                name: "PK_History",
                table: "History");

            migrationBuilder.RenameTable(
                name: "History",
                newName: "ChangedByWhen");

            migrationBuilder.RenameIndex(
                name: "IX_History_WorkPlanId",
                table: "ChangedByWhen",
                newName: "IX_ChangedByWhen_WorkPlanId");

            migrationBuilder.RenameIndex(
                name: "IX_History_SafetyDocId",
                table: "ChangedByWhen",
                newName: "IX_ChangedByWhen_SafetyDocId");

            migrationBuilder.AddColumn<int>(
                name: "workRequestId",
                table: "ChangedByWhen",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_ChangedByWhen",
                table: "ChangedByWhen",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_ChangedByWhen_workRequestId",
                table: "ChangedByWhen",
                column: "workRequestId");

            migrationBuilder.AddForeignKey(
                name: "FK_ChangedByWhen_SafetyDocs_SafetyDocId",
                table: "ChangedByWhen",
                column: "SafetyDocId",
                principalTable: "SafetyDocs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ChangedByWhen_WorkPlans_WorkPlanId",
                table: "ChangedByWhen",
                column: "WorkPlanId",
                principalTable: "WorkPlans",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ChangedByWhen_WorkRequests_workRequestId",
                table: "ChangedByWhen",
                column: "workRequestId",
                principalTable: "WorkRequests",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
