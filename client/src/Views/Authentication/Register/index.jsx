import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

// Mui
import { Typography, Stack, IconButton } from "@mui/material";
import { ChevronLeftOutlined } from "@mui/icons-material";

// Project Imports
import { Authorize } from "../Service/Auth";
import Colors from "../../../Assets/Styles/_themes-vars.module.scss";
import NotFoundPage from "../../NotFound";
import RegistrationStepOne from "./Components/RegistrationStepOne";
import RegistrationStepTwo from "./Components/RegistrationStepTwo";
import RegistrationStepThree from "./Components/RegistrationStepThree";

const Register = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [options, setOptions] = useState({
    nationality: null,
    document: null,
  });
  const [request, setRequest] = useState({
    strFirstName: null,
    strLastName: null,
    strUsername: null,
    strPassword: null,
    strPhonenumber: null,
    strEmail: null,
    strNationalId: null,
    strPassportNumber: null,
    strRegistrationNumber: null,
    strNationalIdNumber: null,
  });
  const [selectedOption, setSelectedOption] = useState("Jordanian");

  const onSubmit = async (setLoading, showError) => {
    setLoading(true);
    showError(false);
    if (await Authorize.Register(request)) {
      navigate({
        pathname: "/auth/home",
      });
      window.location.reload();
    } else {
      showError(true);
    }
    setLoading(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "25vw" }}>
      <Typography
        variant="h2"
        sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
      >
        {step > 1 && (
          <IconButton onClick={() => setStep(step - 1)}>
            <ChevronLeftOutlined />
          </IconButton>
        )}
        Register
      </Typography>
      <Typography style={{ color: Colors.grey500 }}>
        Already have an account?{" "}
        <Link
          style={{ textDecoration: "none", color: Colors.primary800 }}
          to={"/"}
        >
          Login
        </Link>
      </Typography>
      {(() => {
        switch (step) {
          case 1:
            return (
              <RegistrationStepOne
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                setRequest={setRequest}
                request={request}
                setStep={setStep}
              />
            );
          case 2:
            return (
              <RegistrationStepTwo
                selectedOption={selectedOption}
                setRequest={setRequest}
                request={request}
                setOptions={setOptions}
                setStep={setStep}
              />
            );
          case 3:
            return (
              <RegistrationStepThree
                request={request}
                onSubmit={onSubmit}
                options={options}
              />
            );
          default:
            return <NotFoundPage />;
        }
      })()}
      <Link
        style={{ textDecoration: "none", color: Colors.primary800 }}
        to={"/contact"}
      >
        Having a problem?
      </Link>
    </Stack>
  );
};

export default Register;
