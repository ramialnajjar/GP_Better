using Domain.DataModels.LookUps;
using Domain.DataModels.User;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace Domain.DataModels.Tasks
{
    [Table("tasks_types")]
    public class WorkTaskType
    {
        [Column("ID")]
        [Key]
        public int intId { get; set; }

        [Column("DEPARTMENT_ID")]
        [Required]
        [ForeignKey("department")]
        public int intDepartmentId { get; set; }
        Department Department { get; set; }

        [Column("NAME_AR")]
        [Required]
        public string strNameAr { get; set; }

        [Column("NAME_EN")]
        [Required]
        public string strNameEn { get; set; }

        [Column("CREATED_BY")]
        [Required]
        [ForeignKey("CreatedBy")]
        public int intCreatedBy { get; set; }
        ApplicationUser CreatedBy { get; set; }

        [Column("DATE_CREATED")]
        [Required]
        public DateTime dtmDateCreated { get; set; }

        [Column("LAST_MODIFIED_BY")]
        [Required]
        [ForeignKey("ModifiedBy")]
        public int intLastModifiedBy { get; set; }
        ApplicationUser ModifiedBy { get; set; }

        [Column("DATE_LAST_MODIFIED")]
        [AllowNull]
        public DateTime dtmDateLastModified { get; set; }

        [Column("IS_DELETED")]
        public Boolean blnIsDeleted { get; set; }
    }
}
