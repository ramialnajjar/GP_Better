import React from "react";

// Third party
import { Controller, useFormContext } from "react-hook-form";

// Mui
import { InputAdornment, useTheme } from "@mui/material";
import InsertInvitationOutlinedIcon from "@mui/icons-material/InsertInvitationOutlined";

// Date picker
import {
  LocalizationProvider,
  MobileDateTimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const FormDateTimePicker = ({ name, label, minDateTime, maxDateTime }) => {
  const { control } = useFormContext();
  const theme = useTheme();
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDateTimePicker
            label={label}
            value={value || null}
            minDateTime={minDateTime}
            maxDateTime={maxDateTime}
            onChange={(newDate) => onChange(newDate)}
            format="DD.MM.YYYY - hh:mm A"
            slotProps={{
              textField: textFieldProps(theme, error),
            }}
          />
        </LocalizationProvider>
      )}
    />
  );
};

const textFieldProps = (theme, error) => ({
  sx: {
    width: "50%",
    borderRadius: "1rem",
    color: theme.palette.primary.main,
    boxShadow: "none",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.primary.main,
        borderRadius: "1rem",
      },
      "&:hover fieldset": {
        color: theme.palette.grey[400],
        borderRadius: "1rem",
      },
      "& .MuiOutlinedInput-notchedOutline": {
        borderWidth: "0.01rem",
      },
      "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
        borderColor: "transparent",
      },
    },
    "& input": {
      color: theme.palette.primary.main,
      textAlign: "center",
      padding: "0.4rem 0.4rem 0.4rem 0rem",
    },
    "&:hover": {
      backgroundColor: theme.palette.grey[50],
    },
  },
  variant: "outlined",
  error: error ? true : false,
  helperText: error ? error.message : null,
  readOnly: true,
  InputProps: {
    placeholder: "--/--/-- --:--",
    notched: false,
    startAdornment: (
      <InputAdornment position="start">
        <InsertInvitationOutlinedIcon color="primary" />
      </InputAdornment>
    ),
  },
});

export default FormDateTimePicker;
