import { Outlet } from "react-router";

// Mui
import { Box } from "@mui/material";

// Project Imports
import Logo from "../../Assets/Images/AmmanLogo.png";

const Auth = () => {
  return (
    <div>
      <Box position="absolute" right="3rem" top="3rem">
        <img
          src={Logo}
          style={{
            width: "5rem",
          }}
          alt="Logo"
        />
      </Box>
      <Outlet />
    </div>
  );
};

export default Auth;
