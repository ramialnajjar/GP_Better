// Mui
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

// Third Party
import { Controller, useFormContext } from "react-hook-form";

const FormMultiDropDown = ({ name, label, items }) => {
  // Items should be an array of {intId: int, strName: "String", ...any properties}

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
        <Autocomplete
          multiple
          options={items}
          value={value || []}
          onChange={(_, data) => onChange(data)}
          getOptionLabel={(option) => option.strName}
          isOptionEqualToValue={(option, value) => option.intId === value.intId}
          renderOption={(props, option) => {
            return (
              <li {...props} key={option.intId}>
                {option.strName}
              </li>
            );
          }}
          renderInput={(params) => <TextField {...params} label={label} />}
        />
      )}
    />
  );
};

export default FormMultiDropDown;
