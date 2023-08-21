import axios from "../../Common/Utils/AxiosAgent";

export const GetWorkersApi = async () => {
  try {
    const response = await axios.get("api/tasks/users");
    return response.data.map((employee) => ({
      intId: employee.intId,
      strName: employee.strFirstName + " " + employee.strLastName,
    }));
  } catch (error) {
    console.error(error);
  }
};
