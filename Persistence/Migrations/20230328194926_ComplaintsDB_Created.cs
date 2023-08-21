using System;
using Microsoft.EntityFrameworkCore.Migrations;
using MySql.EntityFrameworkCore.Metadata;

#nullable disable

namespace Persistence.Migrations
{
    /// <inheritdoc />
    public partial class ComplaintsDB_Created : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterDatabase()
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "complaints_privacy",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    NAME = table.Column<string>(type: "longtext", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_complaints_privacy", x => x.ID);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "complaints_status",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    NAME = table.Column<string>(type: "longtext", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_complaints_status", x => x.ID);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "roles",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    NAME = table.Column<string>(type: "varchar(256)", maxLength: 256, nullable: true),
                    NORMALIZED_NAME = table.Column<string>(type: "varchar(256)", maxLength: 256, nullable: true),
                    CONCURRENCY_STAMP = table.Column<string>(type: "longtext", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_roles", x => x.ID);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "users_info",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    FIRST_NAME = table.Column<string>(type: "longtext", nullable: true),
                    LAST_NAME = table.Column<string>(type: "longtext", nullable: true),
                    PHONE_NUMBER = table.Column<string>(type: "longtext", nullable: true),
                    NATIONAL_ID = table.Column<string>(type: "longtext", nullable: true),
                    PASSPORT_NUMBER = table.Column<string>(type: "longtext", nullable: true),
                    REGISTRATION_NUMBER = table.Column<string>(type: "longtext", nullable: true),
                    NATIONAL_ID_NUMBER = table.Column<string>(type: "longtext", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_users_info", x => x.ID);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "users_types",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    NAME = table.Column<string>(type: "longtext", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_users_types", x => x.ID);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "complaints_types",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    DEPARTMENT_ID = table.Column<int>(type: "int", nullable: false),
                    NAME_AR = table.Column<string>(type: "longtext", nullable: false),
                    NAME_EN = table.Column<string>(type: "longtext", nullable: false),
                    GRADE = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    PRIVACY_ID = table.Column<int>(type: "int", nullable: false),
                    CREATED_BY = table.Column<int>(type: "int", nullable: false),
                    DATE_CREATED = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    LAST_MODIFIED_BY = table.Column<int>(type: "int", nullable: false),
                    DATE_LAST_MODIFIED = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    IS_DELETED = table.Column<bool>(type: "tinyint(1)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_complaints_types", x => x.ID);
                    table.ForeignKey(
                        name: "FK_complaints_types_complaints_privacy_PRIVACY_ID",
                        column: x => x.PRIVACY_ID,
                        principalTable: "complaints_privacy",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "roles_claims",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    ROLE_ID = table.Column<int>(type: "int", nullable: false),
                    CLAIM_TYPE = table.Column<string>(type: "longtext", nullable: true),
                    CLAIM_VALUE = table.Column<string>(type: "longtext", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_roles_claims", x => x.ID);
                    table.ForeignKey(
                        name: "FK_roles_claims_roles_ROLE_ID",
                        column: x => x.ROLE_ID,
                        principalTable: "roles",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "users",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    GROUP_ID = table.Column<int>(type: "int", nullable: false),
                    IS_VERIFIED = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    IS_BLACKLISTED = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    IS_ACTIVE = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    USER_TYPE_ID = table.Column<int>(type: "int", nullable: false),
                    USER_INFO_ID = table.Column<int>(type: "int", nullable: false),
                    USER_NAME = table.Column<string>(type: "varchar(256)", maxLength: 256, nullable: true),
                    NORMALIZED_USER_NAME = table.Column<string>(type: "varchar(256)", maxLength: 256, nullable: true),
                    PASSWORD_HASH = table.Column<string>(type: "longtext", nullable: true),
                    SECURITY_STAMP = table.Column<string>(type: "longtext", nullable: true),
                    CONCURRENCY_STAMP = table.Column<string>(type: "longtext", nullable: true),
                    IS_CONFIRMED = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    LOCKOUT_END = table.Column<DateTimeOffset>(type: "datetime(6)", nullable: true),
                    ACCESS_FAILED_COUNT = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_users", x => x.ID);
                    table.ForeignKey(
                        name: "FK_users_users_info_USER_INFO_ID",
                        column: x => x.USER_INFO_ID,
                        principalTable: "users_info",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_users_users_types_USER_TYPE_ID",
                        column: x => x.USER_TYPE_ID,
                        principalTable: "users_types",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "complaints",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    USER_ID = table.Column<int>(type: "int", nullable: false),
                    TYPE_ID = table.Column<int>(type: "int", nullable: false),
                    STATUS_ID = table.Column<int>(type: "int", nullable: false),
                    IMAGE_REF = table.Column<string>(type: "longtext", nullable: false),
                    LAT = table.Column<decimal>(type: "decimal(8,6)", precision: 8, scale: 6, nullable: false),
                    LNG = table.Column<decimal>(type: "decimal(8,6)", precision: 8, scale: 6, nullable: false),
                    COMMENT = table.Column<string>(type: "longtext", nullable: true),
                    REMINDER = table.Column<int>(type: "int", nullable: false),
                    DATE_CREATED = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    DATE_LAST_REMINDED = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    LAST_MODIFIED_BY = table.Column<int>(type: "int", nullable: false),
                    DATE_LAST_MODIFIED = table.Column<DateTime>(type: "datetime(6)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_complaints", x => x.ID);
                    table.ForeignKey(
                        name: "FK_complaints_complaints_status_STATUS_ID",
                        column: x => x.STATUS_ID,
                        principalTable: "complaints_status",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_complaints_complaints_types_TYPE_ID",
                        column: x => x.TYPE_ID,
                        principalTable: "complaints_types",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "users_claims",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    USER_ID = table.Column<int>(type: "int", nullable: false),
                    CLAIM_TYPE = table.Column<string>(type: "longtext", nullable: true),
                    CLAIM_VALUE = table.Column<string>(type: "longtext", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_users_claims", x => x.ID);
                    table.ForeignKey(
                        name: "FK_users_claims_users_USER_ID",
                        column: x => x.USER_ID,
                        principalTable: "users",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "users_login",
                columns: table => new
                {
                    LOGIN_PROVIDER = table.Column<string>(type: "varchar(255)", nullable: false),
                    PROVIDER_KEY = table.Column<string>(type: "varchar(255)", nullable: false),
                    PROVIDER_DISPLAY_NAME = table.Column<string>(type: "longtext", nullable: true),
                    USER_ID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_users_login", x => new { x.LOGIN_PROVIDER, x.PROVIDER_KEY });
                    table.ForeignKey(
                        name: "FK_users_login_users_USER_ID",
                        column: x => x.USER_ID,
                        principalTable: "users",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "users_roles",
                columns: table => new
                {
                    USER_ID = table.Column<int>(type: "int", nullable: false),
                    ROLE_ID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_users_roles", x => new { x.USER_ID, x.ROLE_ID });
                    table.ForeignKey(
                        name: "FK_users_roles_roles_ROLE_ID",
                        column: x => x.ROLE_ID,
                        principalTable: "roles",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_users_roles_users_USER_ID",
                        column: x => x.USER_ID,
                        principalTable: "users",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "users_tokens",
                columns: table => new
                {
                    USER_ID = table.Column<int>(type: "int", nullable: false),
                    LOGIN_PROVIDER = table.Column<string>(type: "varchar(255)", nullable: false),
                    NAME = table.Column<string>(type: "varchar(255)", nullable: false),
                    VALUE = table.Column<string>(type: "longtext", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_users_tokens", x => new { x.USER_ID, x.LOGIN_PROVIDER, x.NAME });
                    table.ForeignKey(
                        name: "FK_users_tokens_users_USER_ID",
                        column: x => x.USER_ID,
                        principalTable: "users",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "complaints_voters",
                columns: table => new
                {
                    USER_ID = table.Column<int>(type: "int", nullable: false),
                    COMPLAINT_ID = table.Column<int>(type: "int", nullable: false),
                    IS_HOST = table.Column<bool>(type: "tinyint(1)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_complaints_voters", x => new { x.USER_ID, x.COMPLAINT_ID });
                    table.ForeignKey(
                        name: "FK_complaints_voters_complaints_COMPLAINT_ID",
                        column: x => x.COMPLAINT_ID,
                        principalTable: "complaints",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_complaints_voters_users_USER_ID",
                        column: x => x.USER_ID,
                        principalTable: "users",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_complaints_STATUS_ID",
                table: "complaints",
                column: "STATUS_ID");

            migrationBuilder.CreateIndex(
                name: "IX_complaints_TYPE_ID",
                table: "complaints",
                column: "TYPE_ID");

            migrationBuilder.CreateIndex(
                name: "IX_complaints_types_PRIVACY_ID",
                table: "complaints_types",
                column: "PRIVACY_ID");

            migrationBuilder.CreateIndex(
                name: "IX_complaints_voters_COMPLAINT_ID",
                table: "complaints_voters",
                column: "COMPLAINT_ID");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "roles",
                column: "NORMALIZED_NAME",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_roles_claims_ROLE_ID",
                table: "roles_claims",
                column: "ROLE_ID");

            migrationBuilder.CreateIndex(
                name: "IX_users_USER_INFO_ID",
                table: "users",
                column: "USER_INFO_ID",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_users_USER_TYPE_ID",
                table: "users",
                column: "USER_TYPE_ID");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "users",
                column: "NORMALIZED_USER_NAME",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_users_claims_USER_ID",
                table: "users_claims",
                column: "USER_ID");

            migrationBuilder.CreateIndex(
                name: "IX_users_login_USER_ID",
                table: "users_login",
                column: "USER_ID");

            migrationBuilder.CreateIndex(
                name: "IX_users_roles_ROLE_ID",
                table: "users_roles",
                column: "ROLE_ID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "complaints_voters");

            migrationBuilder.DropTable(
                name: "roles_claims");

            migrationBuilder.DropTable(
                name: "users_claims");

            migrationBuilder.DropTable(
                name: "users_login");

            migrationBuilder.DropTable(
                name: "users_roles");

            migrationBuilder.DropTable(
                name: "users_tokens");

            migrationBuilder.DropTable(
                name: "complaints");

            migrationBuilder.DropTable(
                name: "roles");

            migrationBuilder.DropTable(
                name: "users");

            migrationBuilder.DropTable(
                name: "complaints_status");

            migrationBuilder.DropTable(
                name: "complaints_types");

            migrationBuilder.DropTable(
                name: "users_info");

            migrationBuilder.DropTable(
                name: "users_types");

            migrationBuilder.DropTable(
                name: "complaints_privacy");
        }
    }
}
