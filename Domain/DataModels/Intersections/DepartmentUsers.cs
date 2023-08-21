using Domain.DataModels.LookUps;
using Domain.DataModels.User;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.DataModels.Intersections
{
    [Table("department_users")]
    public class DepartmentUsers
    {
        [ForeignKey("User")]
        [Required]
        [Column("USER_ID")]
        public int intUserId { get; set; }
        public ApplicationUser User { get; set; }

        [Column("DEPARTMENT_ID")]
        [Required]
        [ForeignKey("department")]
        public int intDepartmentId { get; set; }
        public Department Department { get; set; }
    }
}
