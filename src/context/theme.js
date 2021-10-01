import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../components/styles/theme";

const ThemeContext = React.createContext();
ThemeContext.displayName = "ThemeContext";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState("dark");
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <StyledThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

const useThemeProvider = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("ThemeProvider consumer must be in a ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useThemeProvider };
