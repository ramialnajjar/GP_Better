import { createTheme } from "@mui/material/styles";

// Assets
import LightColors from "../../Assets/Styles/_themes-vars.module.scss";

// Project imports
import ThemePalette from "./Palette";
import ThemeTypography from "./Typography";

export const theme = (mode) => {
  // Add Dark Colors then change the code inside Palette.js
  const color = mode === "light" ? LightColors : {};

  const themeOption = {
    colors: color,
    heading: color.grey900,
    paper: color.paper,
    backgroundDefault: color.paper,
    background: color.primaryLight,
    backgroundGradient: color.backgroundGradient,
    darkTextPrimary: color.grey700,
    darkTextSecondary: color.grey500,
    textDark: color.grey900,
    menuSelected: color.secondaryDark,
    menuSelectedBack: color.secondaryLight,
    divider: color.grey200,
    mode: mode,
  };

  const themeOptions = {
    palette: ThemePalette(themeOption),
    typography: ThemeTypography(themeOption),
  };

  const themes = createTheme(themeOptions);

  return themes;
};

export default theme;
