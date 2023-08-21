import axios from "../../../Common/Utils/AxiosAgent";

export const GetTasksTypesApi = async () => {
  try {
    const response = await axios.get(`/api/tasks/types`);
    return response.data.map((item) => ({
      intId: item.intId,
      strName: item.strNameEn,
    }));
  } catch (error) {
    return false;
  }
};
