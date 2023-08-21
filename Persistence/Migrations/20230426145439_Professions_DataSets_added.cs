using System;
using Microsoft.EntityFrameworkCore.Migrations;
using MySql.EntityFrameworkCore.Metadata;

#nullable disable

namespace Persistence.Migrations
{
    /// <inheritdoc />
    public partial class Professions_DataSets_added : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Professions",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    NAME_AR = table.Column<string>(type: "longtext", nullable: false),
                    NAME_EN = table.Column<string>(type: "longtext", nullable: false),
                    CREATED_BY = table.Column<int>(type: "int", nullable: false),
                    DATE_CREATED = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    LAST_MODIFIED_BY = table.Column<int>(type: "int", nullable: false),
                    DATE_LAST_MODIFIED = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    IS_DELETED = table.Column<bool>(type: "tinyint(1)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Professions", x => x.ID);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "profession_users",
                columns: table => new
                {
                    USER_ID = table.Column<int>(type: "int", nullable: false),
                    PROFESSION_ID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_profession_users", x => new { x.USER_ID, x.PROFESSION_ID });
                    table.ForeignKey(
                        name: "FK_profession_users_Professions_PROFESSION_ID",
                        column: x => x.PROFESSION_ID,
                        principalTable: "Professions",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_profession_users_users_USER_ID",
                        column: x => x.USER_ID,
                        principalTable: "users",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_profession_users_PROFESSION_ID",
                table: "profession_users",
                column: "PROFESSION_ID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "profession_users");

            migrationBuilder.DropTable(
                name: "Professions");
        }
    }
}
