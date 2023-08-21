import React from "react";

// Third party
import { Controller, useFormContext, useWatch } from "react-hook-form";

// Mui
import { Autocomplete, TextField, IconButton } from "@mui/material";

// Mui Icons
import CircularProgress from "@mui/material/CircularProgress";

const FormAutocompleteBox = ({
  name,
  items,
  label,
  iconButton,
  onClickIcon,
  endIcon,
}) => {
  // Items should be an array of {intId: int, strName: "String", ...any properties}
  const { control, setValue } = useFormContext();
  const optionValue = useWatch({ control, name });
  const options = items ? items : [];

  const handleOptionChange = (event, value) => {
    if (options?.includes(value)) {
      setValue(name, value);
    } else {
      setValue(name, options[0]);
    }
  };

  const [open, setOpen] = React.useState(false);
  const [load, setLoad] = React.useState(false);
  const loading = open && load;

  React.useEffect(() => {
    handleOptionChange(null, optionValue);
  }, [options]);

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
          options={options}
          value={value || null}
          onChange={(_, value) => handleOptionChange(_, value)}
          getOptionLabel={(option) => option.strName || ""}
          isOptionEqualToValue={(option, value) => option.intId === value.intId}
          onInputChange={() => setLoad(true)}
          filterSelectedOptions={true}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          renderOption={(props, option) => {
            return (
              <li {...props} key={option.intId}>
                {option.strName}
              </li>
            );
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              error={error ? true : false}
              helperText={error ? error.message : null}
              InputProps={{
                ...params.InputProps,
                endAdornment: iconButton ? (
                  <>
                    <IconButton onClick={onClickIcon}>{iconButton}</IconButton>
                    {loading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : (
                      endIcon
                    )}
                    {params.InputProps.endAdornment}
                  </>
                ) : endIcon ? (
                  <>
                    {loading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : (
                      endIcon
                    )}
                    {params.InputProps.endAdornment}
                  </>
                ) : (
                  <>{params.InputProps.endAdornment}</>
                ),
              }}
            />
          )}
        />
      )}
    />
  );
};

export default FormAutocompleteBox;
