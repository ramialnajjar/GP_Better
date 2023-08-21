using Microsoft.AspNetCore.Http;
using System.Text.Json.Serialization;

namespace Domain.ClientDTOs.Task
{
    public class TaskTypeDTO
    {
        [JsonIgnore]
        public string strUserName { get; set; }
        public int intId { get; set; }
        public int intDepartmentId { get; set; }
        public string strNameAr { get; set; }
        public string strNameEn { get; set; }
    }
}
