import { createTheme } from "@mui/material/styles";

const LINE_COLOR = "#9e9e9e";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#4caf50",
      light: "#80e27e",
      dark: "#087f23",
      contrastText: "#ffffff",
    },
    divider: LINE_COLOR,
    action: {
      hover: "rgba(76, 175, 80, 0.08)",
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${LINE_COLOR}`,
          borderRight: `1px solid ${LINE_COLOR}`,
          "&:last-child": { borderRight: "none" },
        },
        head: {
          fontWeight: "bold",
        },
      },
    },
  },
});
