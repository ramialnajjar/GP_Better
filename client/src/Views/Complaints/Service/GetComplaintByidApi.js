import axios from "../../../Common/Utils/AxiosAgent";

export const GetComplaintByidApi = async (complaintId) => {
  try {
    return await axios.get(`api/complaints/${complaintId}`);
  } catch (error) {
    console.error(error);
  }
};
