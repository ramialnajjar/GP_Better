using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    /// <inheritdoc />
    public partial class Complaints_MultipleAttachments : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IMAGE_REF",
                table: "complaints");

            migrationBuilder.DropColumn(
                name: "LAT",
                table: "complaints");

            migrationBuilder.DropColumn(
                name: "LNG",
                table: "complaints");

            migrationBuilder.CreateTable(
                name: "complaints_attachments",
                columns: table => new
                {
                    COMPLAINT_ID = table.Column<int>(type: "int", nullable: false),
                    MEDIA_REF = table.Column<string>(type: "longtext", nullable: false),
                    LAT = table.Column<decimal>(type: "decimal(8,6)", precision: 8, scale: 6, nullable: false),
                    LNG = table.Column<decimal>(type: "decimal(8,6)", precision: 8, scale: 6, nullable: false),
                    IS_VIDEO = table.Column<bool>(type: "tinyint(1)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_complaints_attachments", x => x.COMPLAINT_ID);
                    table.ForeignKey(
                        name: "FK_complaints_attachments_complaints_COMPLAINT_ID",
                        column: x => x.COMPLAINT_ID,
                        principalTable: "complaints",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySQL:Charset", "utf8mb4");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "complaints_attachments");

            migrationBuilder.AddColumn<string>(
                name: "IMAGE_REF",
                table: "complaints",
                type: "longtext",
                nullable: false);

            migrationBuilder.AddColumn<decimal>(
                name: "LAT",
                table: "complaints",
                type: "decimal(8,6)",
                precision: 8,
                scale: 6,
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "LNG",
                table: "complaints",
                type: "decimal(8,6)",
                precision: 8,
                scale: 6,
                nullable: false,
                defaultValue: 0m);
        }
    }
}
