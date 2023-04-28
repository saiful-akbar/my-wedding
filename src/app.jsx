import React from "react";
import Router from "./routes/Router";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, useMediaQuery } from "@mui/material";
import theme from "./themes/appearance";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeAppearance } from "./redux/reducers/settingsReducer";

/**
 * App (Main component)
 *
 * @returns React.ReactElement
 */
const App = () => {
  const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const dispatch = useDispatch();

  /**
   * Terapkan tema untuk pertama kali
   * setelah komponen dirender.
   */
  useEffect(() => {
    const storage = localStorage.getItem("appearance") || "auto";

    // periksa storage saat ini
    if (storage === "light" || storage === "dark") {
      dispatch(
        changeAppearance({
          mode: storage,
          isDark: storage === "dark",
        })
      );
    } else {
      dispatch(
        changeAppearance({
          mode: "auto",
          isDark: isDarkMode,
        })
      );
    }
  }, [isDarkMode, dispatch]);

  /**
   * Render komponen
   */
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Router />
    </ThemeProvider>
  );
};

export default App;
