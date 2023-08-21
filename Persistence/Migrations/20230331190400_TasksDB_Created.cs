using System;
using Microsoft.EntityFrameworkCore.Migrations;
using MySql.EntityFrameworkCore.Metadata;

#nullable disable

namespace Persistence.Migrations
{
    /// <inheritdoc />
    public partial class TasksDB_Created : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            // FALSELY GENERATED SQL COMMAND
            //migrationBuilder.DropPrimaryKey(
            //    name: "PK_complaints_attachments",
            //    table: "complaints_attachments"
            //);

            // MANUAL SQL COMMAND
            migrationBuilder.Sql(
                "ALTER TABLE complaints_attachments DROP FOREIGN KEY FK_complaints_attachments_complaints_COMPLAINT_ID;"
            );
            migrationBuilder.Sql("ALTER TABLE complaints_attachments DROP PRIMARY KEY;");

            // FALSELY GENERATED SQL COMMAND
            //migrationBuilder.AddPrimaryKey(
            //    name: "PK_complaints_attachments",
            //    table: "complaints_attachments",
            //    columns: new[] { "COMPLAINT_ID", "MEDIA_REF" }
            //);

            // MANUAL SQL COMMAND
            migrationBuilder.Sql(
                "ALTER TABLE complaints_attachments ADD PRIMARY KEY (COMPLAINT_ID, MEDIA_REF(255));"
            );
            migrationBuilder.Sql(
                "ALTER TABLE complaints_attachments ADD CONSTRAINT FK_complaints_attachments_complaints_COMPLAINT_ID FOREIGN KEY (COMPLAINT_ID) REFERENCES complaints(ID);"
            );

            migrationBuilder.AlterColumn<string>(
                name: "MEDIA_REF",
                table: "complaints_attachments",
                type: "varchar(255)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "longtext"
            );

            migrationBuilder.AddColumn<int>(
                name: "CREATED_BY",
                table: "complaints_attachments",
                type: "int",
                nullable: false,
                defaultValue: 0
            );

            migrationBuilder.AddColumn<DateTime>(
                name: "DATE_CREATED",
                table: "complaints_attachments",
                type: "datetime(6)",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified)
            );

            migrationBuilder
                .CreateTable(
                    name: "tasks_status",
                    columns: table =>
                        new
                        {
                            ID = table
                                .Column<int>(type: "int", nullable: false)
                                .Annotation(
                                    "MySQL:ValueGenerationStrategy",
                                    MySQLValueGenerationStrategy.IdentityColumn
                                ),
                            NAME = table.Column<string>(type: "longtext", nullable: false)
                        },
                    constraints: table =>
                    {
                        table.PrimaryKey("PK_tasks_status", x => x.ID);
                    }
                )
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder
                .CreateTable(
                    name: "tasks_types",
                    columns: table =>
                        new
                        {
                            ID = table
                                .Column<int>(type: "int", nullable: false)
                                .Annotation(
                                    "MySQL:ValueGenerationStrategy",
                                    MySQLValueGenerationStrategy.IdentityColumn
                                ),
                            DEPARTMENT_ID = table.Column<int>(type: "int", nullable: false),
                            NAME_AR = table.Column<string>(type: "longtext", nullable: false),
                            NAME_EN = table.Column<string>(type: "longtext", nullable: false),
                            CREATED_BY = table.Column<int>(type: "int", nullable: false),
                            DATE_CREATED = table.Column<DateTime>(
                                type: "datetime(6)",
                                nullable: false
                            ),
                            LAST_MODIFIED_BY = table.Column<int>(type: "int", nullable: false),
                            DATE_LAST_MODIFIED = table.Column<DateTime>(
                                type: "datetime(6)",
                                nullable: false
                            ),
                            IS_DELETED = table.Column<bool>(type: "tinyint(1)", nullable: false)
                        },
                    constraints: table =>
                    {
                        table.PrimaryKey("PK_tasks_types", x => x.ID);
                    }
                )
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder
                .CreateTable(
                    name: "tasks",
                    columns: table =>
                        new
                        {
                            ID = table
                                .Column<int>(type: "int", nullable: false)
                                .Annotation(
                                    "MySQL:ValueGenerationStrategy",
                                    MySQLValueGenerationStrategy.IdentityColumn
                                ),
                            ADMIN_ID = table.Column<int>(type: "int", nullable: false),
                            TEAM_LEADER_ID = table.Column<int>(type: "int", nullable: false),
                            STATUS_ID = table.Column<int>(type: "int", nullable: false),
                            TYPE_ID = table.Column<int>(type: "int", nullable: false),
                            COST = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                            DATE_SCHEDULED = table.Column<DateTime>(
                                type: "datetime(6)",
                                nullable: false
                            ),
                            DATE_ACTIVATED = table.Column<DateTime>(
                                type: "datetime(6)",
                                nullable: false
                            ),
                            DATE_FINISHED = table.Column<DateTime>(
                                type: "datetime(6)",
                                nullable: false
                            ),
                            DATE_DEADLINE = table.Column<DateTime>(
                                type: "datetime(6)",
                                nullable: false
                            ),
                            COMMENT = table.Column<string>(type: "longtext", nullable: true),
                            DATE_CREATED = table.Column<DateTime>(
                                type: "datetime(6)",
                                nullable: false
                            ),
                            LAST_MODIFIED_BY = table.Column<int>(type: "int", nullable: false),
                            DATE_LAST_MODIFIED = table.Column<DateTime>(
                                type: "datetime(6)",
                                nullable: false
                            ),
                            RATING = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                            IS_DELETED = table.Column<bool>(type: "tinyint(1)", nullable: false)
                        },
                    constraints: table =>
                    {
                        table.PrimaryKey("PK_tasks", x => x.ID);
                        table.ForeignKey(
                            name: "FK_tasks_tasks_status_STATUS_ID",
                            column: x => x.STATUS_ID,
                            principalTable: "tasks_status",
                            principalColumn: "ID",
                            onDelete: ReferentialAction.Cascade
                        );
                        table.ForeignKey(
                            name: "FK_tasks_tasks_types_TYPE_ID",
                            column: x => x.TYPE_ID,
                            principalTable: "tasks_types",
                            principalColumn: "ID",
                            onDelete: ReferentialAction.Cascade
                        );
                        table.ForeignKey(
                            name: "FK_tasks_users_ADMIN_ID",
                            column: x => x.ADMIN_ID,
                            principalTable: "users",
                            principalColumn: "ID",
                            onDelete: ReferentialAction.Cascade
                        );
                        table.ForeignKey(
                            name: "FK_tasks_users_TEAM_LEADER_ID",
                            column: x => x.TEAM_LEADER_ID,
                            principalTable: "users",
                            principalColumn: "ID",
                            onDelete: ReferentialAction.Cascade
                        );
                    }
                )
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder
                .CreateTable(
                    name: "tasks_attachments",
                    columns: table =>
                        new
                        {
                            TASK_ID = table.Column<int>(type: "int", nullable: false),
                            MEDIA_REF = table.Column<string>(type: "varchar(255)", nullable: false),
                            CREATED_BY = table.Column<int>(type: "int", nullable: false),
                            DATE_CREATED = table.Column<DateTime>(
                                type: "datetime(6)",
                                nullable: false
                            ),
                            IS_VIDEO = table.Column<bool>(type: "tinyint(1)", nullable: false)
                        },
                    constraints: table =>
                    {
                        table.PrimaryKey(
                            "PK_tasks_attachments",
                            x => new { x.TASK_ID, x.MEDIA_REF }
                        );
                        table.ForeignKey(
                            name: "FK_tasks_attachments_tasks_TASK_ID",
                            column: x => x.TASK_ID,
                            principalTable: "tasks",
                            principalColumn: "ID",
                            onDelete: ReferentialAction.Cascade
                        );
                    }
                )
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder
                .CreateTable(
                    name: "tasks_members",
                    columns: table =>
                        new
                        {
                            USER_ID = table.Column<int>(type: "int", nullable: false),
                            TASK_ID = table.Column<int>(type: "int", nullable: false)
                        },
                    constraints: table =>
                    {
                        table.PrimaryKey("PK_tasks_members", x => new { x.USER_ID, x.TASK_ID });
                        table.ForeignKey(
                            name: "FK_tasks_members_tasks_TASK_ID",
                            column: x => x.TASK_ID,
                            principalTable: "tasks",
                            principalColumn: "ID",
                            onDelete: ReferentialAction.Cascade
                        );
                        table.ForeignKey(
                            name: "FK_tasks_members_users_USER_ID",
                            column: x => x.USER_ID,
                            principalTable: "users",
                            principalColumn: "ID",
                            onDelete: ReferentialAction.Cascade
                        );
                    }
                )
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_tasks_ADMIN_ID",
                table: "tasks",
                column: "ADMIN_ID"
            );

            migrationBuilder.CreateIndex(
                name: "IX_tasks_STATUS_ID",
                table: "tasks",
                column: "STATUS_ID"
            );

            migrationBuilder.CreateIndex(
                name: "IX_tasks_TEAM_LEADER_ID",
                table: "tasks",
                column: "TEAM_LEADER_ID"
            );

            migrationBuilder.CreateIndex(
                name: "IX_tasks_TYPE_ID",
                table: "tasks",
                column: "TYPE_ID"
            );

            migrationBuilder.CreateIndex(
                name: "IX_tasks_members_TASK_ID",
                table: "tasks_members",
                column: "TASK_ID"
            );
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(name: "tasks_attachments");

            migrationBuilder.DropTable(name: "tasks_members");

            migrationBuilder.DropTable(name: "tasks");

            migrationBuilder.DropTable(name: "tasks_status");

            migrationBuilder.DropTable(name: "tasks_types");

            migrationBuilder.DropPrimaryKey(
                name: "PK_complaints_attachments",
                table: "complaints_attachments"
            );

            migrationBuilder.DropColumn(name: "CREATED_BY", table: "complaints_attachments");

            migrationBuilder.DropColumn(name: "DATE_CREATED", table: "complaints_attachments");

            migrationBuilder.AlterColumn<string>(
                name: "MEDIA_REF",
                table: "complaints_attachments",
                type: "longtext",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(255)"
            );

            migrationBuilder.AddPrimaryKey(
                name: "PK_complaints_attachments",
                table: "complaints_attachments",
                column: "COMPLAINT_ID"
            );
        }
    }
}
