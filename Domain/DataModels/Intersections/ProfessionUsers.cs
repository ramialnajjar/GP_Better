using Domain.DataModels.LookUps;
using Domain.DataModels.User;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.DataModels.Intersections
{
    [Table("profession_users")]
    public class ProfessionUsers
    {
        [ForeignKey("User")]
        [Required]
        [Column("USER_ID")]
        public int intUserId { get; set; }
        public ApplicationUser User { get; set; }

        [Column("PROFESSION_ID")]
        [Required]
        [ForeignKey("Profession")]
        public int intProfessionId { get; set; }
        public Profession Profession { get; set; }
    }
}
