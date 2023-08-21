using System.ComponentModel.DataAnnotations;

namespace Domain.ClientDTOs.User
{
    public class LoginDTO
    {
        [Required]
        public string strLogin { get; set; }

        [Required]
        public string strPassword { get; set; }
    }
}
