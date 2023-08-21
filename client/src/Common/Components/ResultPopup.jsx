import React from "react";

// Mui
import { Stack, Typography, Button } from "@mui/material";

// Assets
import { CheckCircleOutline, ErrorOutline } from "@mui/icons-material";

const ResultPopup = ({ type, successMessage, failMessage, onClick }) => {
  return (
    <Stack spacing={2} justifyContent="center" alignItems="center">
      {type ? (
        <CheckCircleOutline color="success" sx={{ fontSize: "8rem" }} />
      ) : (
        <ErrorOutline color="error" sx={{ fontSize: "8rem" }} />
      )}
      <Typography variant="h3">{type ? "Succeeded" : "Failed"}</Typography>
      <Typography
        variant="h5"
        sx={{
          maxWidth: "30ch",
          textAlign: "center",
        }}
      >
        {type ? successMessage : failMessage}
      </Typography>
      <Button
        onClick={onClick}
        variant="contained"
        color="primary"
        sx={{
          borderRadius: "1rem",
        }}
      >
        Continue
      </Button>
    </Stack>
  );
};

export default ResultPopup;
