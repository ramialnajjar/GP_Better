using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    /// <inheritdoc />
    public partial class Tasks_Moved_TeamLeader : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tasks_users_TEAM_LEADER_ID",
                table: "tasks");

            migrationBuilder.DropIndex(
                name: "IX_tasks_TEAM_LEADER_ID",
                table: "tasks");

            migrationBuilder.DropColumn(
                name: "TEAM_LEADER_ID",
                table: "tasks");

            migrationBuilder.AddColumn<bool>(
                name: "IS_LEADER",
                table: "tasks_members",
                type: "tinyint(1)",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IS_LEADER",
                table: "tasks_members");

            migrationBuilder.AddColumn<int>(
                name: "TEAM_LEADER_ID",
                table: "tasks",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_tasks_TEAM_LEADER_ID",
                table: "tasks",
                column: "TEAM_LEADER_ID");

            migrationBuilder.AddForeignKey(
                name: "FK_tasks_users_TEAM_LEADER_ID",
                table: "tasks",
                column: "TEAM_LEADER_ID",
                principalTable: "users",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
