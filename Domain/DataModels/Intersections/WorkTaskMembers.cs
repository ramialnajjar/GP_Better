using Domain.DataModels.Complaints;
using Domain.DataModels.Tasks;
using Domain.DataModels.User;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.DataModels.Intersections
{
    [Table("tasks_members")]
    public class WorkTaskMembers
    {
        [ForeignKey("User")]
        [Column("USER_ID")]
        public int intWorkerId { get; set; }
        public ApplicationUser Worker { get; set; }

        [Column("TASK_ID")]
        [ForeignKey("Task")]
        public int intTaskId { get; set; }
        public WorkTask Task { get; set; }

        [Column("IS_LEADER")]
        public bool blnIsLeader { get; set; }
    }
}
