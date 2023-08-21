import { createContext, useState } from "react";

const AppContext = createContext();
export const AppProvider = ({ children }) => {
  // App states
  const [mode, setMode] = useState("light");

  // Functions
  const ToggleDisplayMode = () => {
    mode === "light" ? setMode("dark") : setMode("light");
  };

  // Values
  const values = { mode, ToggleDisplayMode };

  /////////////
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContext;
