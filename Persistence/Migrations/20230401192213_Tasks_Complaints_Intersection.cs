using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    /// <inheritdoc />
    public partial class Tasks_Complaints_Intersection : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "tasks_complaints",
                columns: table => new
                {
                    TASK_ID = table.Column<int>(type: "int", nullable: false),
                    COMPLAINT_ID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tasks_complaints", x => new { x.TASK_ID, x.COMPLAINT_ID });
                    table.ForeignKey(
                        name: "FK_tasks_complaints_complaints_COMPLAINT_ID",
                        column: x => x.COMPLAINT_ID,
                        principalTable: "complaints",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_tasks_complaints_tasks_TASK_ID",
                        column: x => x.TASK_ID,
                        principalTable: "tasks",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_tasks_complaints_COMPLAINT_ID",
                table: "tasks_complaints",
                column: "COMPLAINT_ID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "tasks_complaints");
        }
    }
}
