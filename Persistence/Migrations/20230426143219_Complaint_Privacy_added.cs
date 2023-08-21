using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    /// <inheritdoc />
    public partial class Complaint_Privacy_added : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "PRIVACY_ID",
                table: "complaints",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_complaints_PRIVACY_ID",
                table: "complaints",
                column: "PRIVACY_ID");

            migrationBuilder.AddForeignKey(
                name: "FK_complaints_complaints_privacy_PRIVACY_ID",
                table: "complaints",
                column: "PRIVACY_ID",
                principalTable: "complaints_privacy",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_complaints_complaints_privacy_PRIVACY_ID",
                table: "complaints");

            migrationBuilder.DropIndex(
                name: "IX_complaints_PRIVACY_ID",
                table: "complaints");

            migrationBuilder.DropColumn(
                name: "PRIVACY_ID",
                table: "complaints");
        }
    }
}
