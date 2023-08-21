import React from "react";
import { Outlet } from "react-router-dom";

// Mui
import { Box, CssBaseline, Stack, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/system";

// Project Imports
import MediaGallery from "../../Components/MediaGallery";

// Assets
import Amman1 from "../../../Assets/Images/Amman1.jpg";
import Amman2 from "../../../Assets/Images/Amman2.jpg";
import Amman3 from "../../../Assets/Images/Amman3.jpg";

const photos = [
  { media: Amman1, title: "Amman1" },
  { media: Amman2, title: "Amman2" },
  { media: Amman3, title: "Amman3" },
];

const Main = styled(Box)({
  display: "flex",
  height: "100vh",
  width: "100vw",
});

const SplashPage = styled(MediaGallery)(({ theme }) => ({
  backgroundImage: theme?.palette?.background.image,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 1),
  flex: "0 1 auto",
  boxShadow: "inset -0.2rem 0rem 4rem rgba(0, 0, 0, 0.2)",
}));

const Gradiant = styled("div")({
  height: "100vh",
  width: "100%",
  position: "absolute",
  bottom: 0,
  background: "rgba(0,0,0,0.3)",
  zIndex: 2,
});

const Overlay = styled("div")({
  display: "flex",
  height: "100vh",
  width: "69vw",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  bottom: 0,
  left: 0,
  zIndex: 3,
  boxShadow: "inset 0 0 3rem 1.5rem rgba(0,0,0,0.5)",
  backgroundColor: "rgba(0,0,0,0.5)",
});

const MainContent = styled("main")(({ theme }) => ({
  flex: "1 1 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 1),
}));

function MinimalLayout() {
  const theme = useTheme();

  return (
    <Main>
      <CssBaseline />
      <SplashPage items={photos} height="100vh" width="69vw">
        <Overlay>
          <Stack>
            <Typography variant="h1" color="white">
              Ma'an lil E'mar
            </Typography>
            <Typography variant="h3" color={theme.palette.grey[300]}>
              Experience the difference of high-quality streets in Amman with
              our app -
            </Typography>
            <Typography variant="h3" color={theme.palette.grey[300]}>
              join us in creating a safer, cleaner, and more enjoyable
              environment for all.
            </Typography>
          </Stack>
        </Overlay>
        <Gradiant />
      </SplashPage>
      <MainContent>
        <Outlet />
      </MainContent>
    </Main>
  );
}

export default MinimalLayout;
