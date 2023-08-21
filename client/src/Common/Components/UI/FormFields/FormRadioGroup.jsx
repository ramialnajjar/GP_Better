import React from "react";

// Third party
import { Controller, useFormContext } from "react-hook-form";

// Mui
import {
  Radio,
  RadioGroup,
  FormLabel,
  FormControl,
  FormControlLabel,
} from "@mui/material";

const FormRowRadioGroup = ({ name, radioLabel, labels }) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={labels[0].toLowerCase()}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <FormControl>
          <FormLabel>{radioLabel}</FormLabel>
          <RadioGroup
            onChange={onChange}
            value={value || labels[0].toLowerCase()}
            row
          >
            {labels.map((label, i) => (
              <FormControlLabel
                key={i}
                value={label.toLowerCase()}
                control={<Radio />}
                label={label}
              />
            ))}
          </RadioGroup>
        </FormControl>
      )}
    />
  );
};

export default FormRowRadioGroup;
