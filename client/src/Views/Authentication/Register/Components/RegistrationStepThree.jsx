import React, { useState } from "react";

// Mui
import {
  Typography,
  Button,
  Stack,
  Box,
  Divider,
  Chip,
  useTheme,
  Alert,
  AlertTitle,
  CircularProgress,
} from "@mui/material";

// Project Imports
import { FlexBetween } from "../../../../Common/Components/FlexBetween";

const RegistrationStepThree = ({ request, onSubmit, options }) => {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [error, showError] = useState(false);
  return (
    <>
      <Box>
        <Stack spacing={2}>
          {error && (
            <Alert severity="error">
              <AlertTitle>UNKNOWN ERROR</AlertTitle>
              An error has occurred or the server is down.
            </Alert>
          )}
          <Box width="25rem">
            <Typography variant="h2">
              {request.strFirstName + " " + request.strLastName}
            </Typography>
          </Box>
          <Divider variant="middle" />
          <Typography variant="h4">Details</Typography>
          <FlexBetween>
            <Typography variant="h5" color={theme.palette.grey[500]}>
              Username
            </Typography>
            <Chip
              label={request.strUsername}
              color="primary"
              variant="outlined"
            />
          </FlexBetween>
          <FlexBetween>
            <Typography variant="h5" color={theme.palette.grey[500]}>
              Phonenumber
            </Typography>
            <Typography variant="h5">{request.strPhonenumber}</Typography>
          </FlexBetween>
          <FlexBetween>
            <Typography variant="h5" color={theme.palette.grey[500]}>
              Email
            </Typography>
            <Typography variant="h5">{request.strEmail}</Typography>
          </FlexBetween>
          {NationalityDetails(theme, options, request)}
        </Stack>
      </Box>
      <Button
        onClick={() => onSubmit(setLoading, showError)}
        color="primary"
        variant="contained"
        sx={{ borderRadius: "1rem" }}
      >
        {loading ? (
          <CircularProgress color="inherit" size="1.5rem" />
        ) : (
          "Creat New User"
        )}
      </Button>
    </>
  );
};

const NationalityDetails = (theme, options, request) => {
  return options.nationality === "Jordanian" ? (
    <>
      <FlexBetween>
        <Typography variant="h5" color={theme.palette.grey[500]}>
          National ID
        </Typography>
        <Typography variant="h5">{request.strNationalId}</Typography>
      </FlexBetween>
      {options.document === "nationalIdNumber" ? (
        <FlexBetween>
          <Typography variant="h5" color={theme.palette.grey[500]}>
            National ID Number
          </Typography>
          <Typography variant="h5">{request.strNationalIdNumber}</Typography>
        </FlexBetween>
      ) : (
        <FlexBetween>
          <Typography variant="h5" color={theme.palette.grey[500]}>
            Registration Number
          </Typography>
          <Typography variant="h5">{request.strRegistrationNumber}</Typography>
        </FlexBetween>
      )}
    </>
  ) : (
    <FlexBetween>
      <Typography variant="h5" color={theme.palette.grey[500]}>
        Passport Number
      </Typography>
      <Typography variant="h5">{request.strPassportNumber}</Typography>
    </FlexBetween>
  );
};

export default RegistrationStepThree;
