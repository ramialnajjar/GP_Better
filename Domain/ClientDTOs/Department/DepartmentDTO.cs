using System.Text.Json.Serialization;

namespace Domain.ClientDTOs.Department
{
    public class DepartmentDTO
    {
        [JsonIgnore]
        public string strUserName { get; set; }
        public string strNameAr { get; set; }
        public string strNameEn { get; set; }
    }
}
