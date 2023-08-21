import React, { useContext } from "react";

// Mui
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

// Project imports
import Routes from "./Common/Routes";

// App context
import AppContext from "./Common/Context/AppContext";

// Themes
import theme from "./Common/Themes";

const App = () => {
  const { mode } = useContext(AppContext);
  return (
    <ThemeProvider theme={theme(mode)}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
