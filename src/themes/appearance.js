import { createTheme } from "@mui/material/styles";
import typography from "./typography";
import shadows from "./shadows";

export const theme = createTheme({
  shadows,
  typography,
  palette: {
    mode: "dark",
    divider: "rgb(213, 206, 163)",
    background: {
      default: "rgb(60, 42, 33)",
      paper: "rgb(213, 206, 163)",
    },
    text: {
      primary: "rgb(229, 229, 203)",
      secondary: "rgb(26, 18, 11)",
    },
    primary: {
      main: "rgb(229, 229, 203)",
    },
    secondary: {
      main: "rgb(60, 42, 33)",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: 'rgba(26, 18, 11, 0.8)',
          border: '2px solid rgb(213, 206, 163)',
          borderRadius: 20,
        },
      },
    },
  },
});

export default theme;
