using System.Text.Json.Serialization;

namespace Domain.ClientDTOs.Profession
{
    public class ProfessionDTO
    {
        [JsonIgnore]
        public string strUserName { get; set; }
        public string strNameAr { get; set; }
        public string strNameEn { get; set; }
    }
}
