import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(8).max(32).required(),
});

export const RegisterStepOne = yup.object().shape({
  firstname: yup
    .string()
    .min(2, "First Name must be 2 characters or more.")
    .required(),
  lastname: yup
    .string()
    .min(2, "First Name must be 2 characters or more.")
    .required(),
  username: yup
    .string()
    .matches(
      /^(?=.*[a-zA-Z])[a-zA-Z0-9._]{4,}$/,
      "Username must be at least 4 characters long and no special characters."
    )
    .required(),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,32}$/,
      "Password must have at least 8 characters, and contains at least one uppercase letter, one lowercase letter, one digit, and one non-alphanumeric character."
    )
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match.")
    .required(),
});

export const RegisterStepTwoJo = yup
  .object()
  .shape({
    phone: yup
      .string()
      .matches(
        /^07\d{8}$/,
        "Phone number must be 10 digits only and starts with 07."
      )
      .required(),
    email: yup.string().email().required(),
    nationalId: yup
      .string()
      .matches(/^\d{10}$/, "National Id must be 10 digits only.")
      .required(),
    registrationNumber: yup
      .string()
      .matches(/^000\/000$/, 'Invalid Registration Number, must be "000/000"')
      .nullable(),
    nationalIdNumber: yup
      .string()
      .matches(/^[A-Z]{3}\d{5}$/, 'Invalid Id number, must be "AAA00000"')
      .nullable(),
  })
  .test("registrationNumberFilled", function (values) {
    const { registrationNumber, nationalIdNumber } = values;

    if (registrationNumber || nationalIdNumber) {
      return true;
    }

    return this.createError({
      path: "registrationNumber",
      message: "Registration Number is required",
    });
  })
  .test("nationalIdNumberFilled", function (values) {
    const { registrationNumber, nationalIdNumber } = values;

    if (registrationNumber || nationalIdNumber) {
      return true;
    }

    return this.createError({
      path: "nationalIdNumber",
      message: "National ID Number is required",
    });
  });

export const RegisterStepTwoNonJo = yup.object().shape({
  phone: yup
    .string()
    .matches(
      /^07\d{8}$/,
      "Phone number must be 10 digits only and starts with 07."
    )
    .required(),
  email: yup.string().email().required(),
  passport: yup.string().required(),
});
