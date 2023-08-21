using System;
using Microsoft.EntityFrameworkCore.Migrations;
using MySql.EntityFrameworkCore.Metadata;

#nullable disable

namespace Persistence.Migrations
{
    /// <inheritdoc />
    public partial class Departments_DataSets_added : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "departments",
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
                    table.PrimaryKey("PK_departments", x => x.ID);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "department_users",
                columns: table => new
                {
                    USER_ID = table.Column<int>(type: "int", nullable: false),
                    DEPARTMENT_ID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_department_users", x => new { x.USER_ID, x.DEPARTMENT_ID });
                    table.ForeignKey(
                        name: "FK_department_users_departments_DEPARTMENT_ID",
                        column: x => x.DEPARTMENT_ID,
                        principalTable: "departments",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_department_users_users_USER_ID",
                        column: x => x.USER_ID,
                        principalTable: "users",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_department_users_DEPARTMENT_ID",
                table: "department_users",
                column: "DEPARTMENT_ID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "department_users");

            migrationBuilder.DropTable(
                name: "departments");
        }
    }
}
