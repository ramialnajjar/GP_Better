import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

// Mui
import {
  Button,
  Stack,
  FormLabel,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

// Third Party
import { yupResolver } from "@hookform/resolvers/yup";

// Project Imports
import FormTextField from "../../../../Common/Components/UI/FormFields/FormTextField";

import { RegisterStepTwoJo, RegisterStepTwoNonJo } from "../../Utils/Schemas";

const RegistrationStepTwo = ({
  selectedOption,
  setRequest,
  request,
  setOptions,
  setStep,
}) => {
  const [selectedDocument, setSelectedDocument] = useState("nationalIdNumber");
  const schema =
    selectedOption === "Jordanian" ? RegisterStepTwoJo : RegisterStepTwoNonJo;
  // Keep values
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      phone: request?.strPhonenumber,
      email: request?.strEmail,
      nationalId: request?.strNationalId,
      registrationNumber: request?.strRegistrationNumber,
      nationalIdNumber: request?.strNationalIdNumber,
      passport: request?.strPassportNumber,
    },
  });
  const { handleSubmit } = methods;
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit((data) => {
          setRequest({
            ...request,
            strPhonenumber: data.phone,
            strEmail: data.email,
            strNationalId: data.nationalId,
            strRegistrationNumber: data.registrationNumber,
            strNationalIdNumber: data.nationalIdNumber,
            strPassportNumber: data.passport,
          });
          setOptions({
            nationality: selectedOption,
            document: selectedDocument,
          });
          setStep(3);
        })}
      >
        <Stack spacing={2}>
          {NationalityInputs(
            selectedOption,
            methods.setValue,
            selectedDocument,
            setSelectedDocument
          )}
          <FormTextField name="phone" label="Phone Number" />
          <FormTextField name="email" label="Email" />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            sx={{ borderRadius: "1rem" }}
          >
            Next
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
};
const NationalityInputs = (
  selectedOption,
  setValue,
  selectedDocument,
  setSelectedDocument
) => {
  if (selectedOption === "Jordanian") {
    return (
      <>
        <FormControl>
          <FormLabel>Document Type</FormLabel>
          <RadioGroup
            row
            value={selectedDocument}
            onChange={(event) => {
              setValue("registrationNumber", null);
              setValue("nationalIdNumber", null);
              setSelectedDocument(event.target.value);
            }}
          >
            <FormControlLabel
              value="registrationNumber"
              control={<Radio />}
              label="Registration Number"
            />
            <FormControlLabel
              value="nationalIdNumber"
              control={<Radio />}
              label="National ID Number"
            />
          </RadioGroup>
        </FormControl>
        <FormTextField name="nationalId" label="National ID" />
        {selectedDocument === "registrationNumber" ? (
          <FormTextField
            name="registrationNumber"
            label="Registration Number"
          />
        ) : (
          <FormTextField name="nationalIdNumber" label="National ID Number" />
        )}
      </>
    );
  } else if (selectedOption === "Non-Jordanian") {
    return (
      <>
        <FormTextField name="passport" label="Passport" />
      </>
    );
  }
};

export default RegistrationStepTwo;
