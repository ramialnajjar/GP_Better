import React from "react";

// Third party
import { Controller, useFormContext } from "react-hook-form";

// Mui
import { InputAdornment } from "@mui/material";
import InsertInvitationOutlinedIcon from "@mui/icons-material/InsertInvitationOutlined";

// Date picker
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const FormDatePicker = ({ name, label, minDate, maxDate }) => {
  const { control } = useFormContext();

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
          <MobileDatePicker
            label={label}
            value={value || null}
            minDate={minDate}
            maxDate={maxDate}
            onChange={(newDate) => onChange(newDate)}
            format="DD-MM-YYYY"
            slotProps={{
              textField: {
                error: error ? true : false,
                helperText: error ? error.message : null,
                readOnly: true,
                InputProps: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <InsertInvitationOutlinedIcon />
                    </InputAdornment>
                  ),
                },
              },
            }}
          />
        </LocalizationProvider>
      )}
    />
  );
};

export default FormDatePicker;
