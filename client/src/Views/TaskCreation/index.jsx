import React, { useState } from "react";

// Mui
import { Stack, Typography, IconButton } from "@mui/material";
import { ChevronLeftOutlined } from "@mui/icons-material/";

// Project Imports
import TaskDetailsInput from "./Components/TaskDetailsInput";
import TaskTeamInput from "./Components/TaskTeamInput";
import { TaskCreationProvider } from "./Context/TaskCreationContext";
import TaskCreationDetails from "./Components/TaskCreationDetails";
import NotFoundPage from "../NotFound";

const TaskCreation = ({ photos, complaint, CloseDrawer }) => {
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState("Date Selection");
  const ResetStep = () => setStep(1);
  const NextStep = () => setStep(step + 1);
  const PrevStep = () => setStep(step - 1);

  const page = () => {
    switch (step) {
      case 1:
        if (title !== "Date Selection") setTitle("Date Selection");
        return (
          <TaskDetailsInput
            photos={photos}
            complaint={complaint}
            NextStep={NextStep}
          />
        );
      case 2:
        if (title !== "Team Selection") setTitle("Team Selection");
        return <TaskTeamInput NextStep={NextStep} />;
      case 3:
        if (title !== "Task Details") setTitle("Task Details");
        return (
          <TaskCreationDetails
            ResetStep={ResetStep}
            complaint={complaint}
            CloseDrawer={CloseDrawer}
          />
        );

      default:
        return <NotFoundPage />;
    }
  };

  return (
    <TaskCreationProvider>
      <Stack spacing={2}>
        <Typography
          variant="h2"
          sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
        >
          {step > 1 && (
            <IconButton onClick={PrevStep}>
              <ChevronLeftOutlined />
            </IconButton>
          )}
          Create Task - {title}
        </Typography>
        <div
          style={{
            height: "98%",
            width: "98%",
            margin: "auto",
            marginTop: "1rem",
          }}
        >
          {page()}
        </div>
      </Stack>
    </TaskCreationProvider>
  );
};

export default TaskCreation;
