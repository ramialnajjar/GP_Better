import { useLocation, useNavigate, Link } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";

// Mui
import {
  Typography,
  Button,
  Stack,
  Alert,
  AlertTitle,
  CircularProgress,
} from "@mui/material";

// Third Party
import { yupResolver } from "@hookform/resolvers/yup";

// Project Imports
import { Authorize } from "../Service/Auth";
import FormTextField from "../../../Common/Components/UI/FormFields/FormTextField";
import Colors from "../../../Assets/Styles/_themes-vars.module.scss";

// Schema
import { LoginSchema as schema } from "../Utils/Schemas";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [error, showError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data) => {
    setLoading(true);
    showError(false);
    const request = {
      strLogin: data.login,
      strPassword: data.password,
    };
    const response = await Authorize.Login(request);
    if (response.status) {
      navigate({
        pathname: "/auth/home",
      });
      window.location.reload();
    } else {
      showError(true);
      setErrorMessage(response.message);
    }
    setLoading(false);
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2} sx={{ width: "25vw" }}>
            {error && (
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {errorMessage}
              </Alert>
            )}
            <Typography variant="h2">Log in</Typography>
            <Typography style={{ color: Colors.grey500 }}>
              Don't have an account?{" "}
              <Link
                style={{ textDecoration: "none", color: Colors.primary800 }}
                to={"/register"}
              >
                Register
              </Link>
            </Typography>
            <FormTextField name="login" label="Username/Phonenumber" />
            <FormTextField name="password" label="Password" type="password" />

            <Button
              type="submit"
              color="primary"
              variant="contained"
              sx={{ borderRadius: "1rem" }}
            >
              {loading ? (
                <CircularProgress color="inherit" size="1.5rem" />
              ) : (
                "Continue"
              )}
            </Button>
            <Link
              style={{ textDecoration: "none", color: Colors.primary800 }}
              to={location.pathname + ""}
            >
              Forgot password?
            </Link>
          </Stack>
        </form>
      </FormProvider>
    </div>
  );
}

export default Login;
