import React from "react";
import { Link } from "react-router-dom";

// Mui
import { Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const StyledButton = styled(Button)({
  marginTop: "2rem",
});

const NotFoundPage = () => {
  return (
    <Container>
      <Typography variant="h1">404 Not Found</Typography>
      <Typography variant="body1">
        The page you are looking for doesn't exist or has been moved.
      </Typography>
      <StyledButton component={Link} to="/" variant="contained" color="primary">
        Go to Home
      </StyledButton>
    </Container>
  );
};

export default NotFoundPage;
