﻿using Domain.DataModels.Complaints;
using Domain.DataModels.User;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.DataModels.Intersections
{
    [Table("complaints_watchers")]
    public class ComplaintWatchers
    {
        [ForeignKey("User")]
        [Column("USER_ID")]
        public int intUserId { get; set; }
        public ApplicationUser User { get; set; }

        [Column("COMPLAINT_ID")]
        [ForeignKey("Complaint")]
        public int intComplaintId { get; set; }
        public Complaint Complaint { get; set; }
    }
}
