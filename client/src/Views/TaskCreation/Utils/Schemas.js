import * as yup from "yup";

const startDateSchema = yup.object().shape({
  startDate: yup
    .date()
    .min(new Date(), "Start date cannot be in the past")
    .max(yup.ref("dueDate"), "Start date must be before due date")
    .required("Start date is required"),
});

const dueDateSchema = yup.object().shape({
  dueDate: yup
    .date()
    .min(yup.ref("startDate"), "Due date must be after start date")
    .required("Due date is required"),
});

export const TaskSchema = startDateSchema.concat(dueDateSchema).shape({
  taskType: yup
    .object({
      intId: yup.number().required(),
      strName: yup.string().required(),
    })
    .required("Task type is required"),
});
