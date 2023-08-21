using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.DataModels.User
{
    [Table("users_types")]
    public class UserType
    {
        [Column("ID")]
        [Key]
        public int intId { get; set; }

        [Column("NAME")]
        public string strName { get; set; }

        // Relations
        public ICollection<ApplicationUser> Users { get; set; }
    }
}
