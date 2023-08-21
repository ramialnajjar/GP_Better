import axios from "../../../Common/Utils/AxiosAgent";

export const CreateTaskApi = async (data, intComplaintId) => {
  const taskForm = new FormData();
  taskForm.append("decCost", data.cost);
  taskForm.append("scheduledDate", data.startDate);
  taskForm.append("deadlineDate", data.endDate);
  taskForm.append("strComment", data.comment);

  // Append the workers individually.
  data.team.forEach((worker, index) => {
    taskForm.append(`workersList[${index}].intId`, worker.intId);
    taskForm.append(`workersList[${index}].isLeader`, worker.isLeader);
  });

  try {
    await axios.post(`api/tasks/${intComplaintId}`, taskForm);
    return true;
  } catch (error) {
    return false;
  }
};
