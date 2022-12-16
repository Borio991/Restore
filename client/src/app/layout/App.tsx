import {
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import Catalog from "../features/Catalog";
import Header from "./Header";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const PaletteType = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: PaletteType,
      background: {
        default:
          PaletteType === "light" ? "#eaeaea" : "#121212",
      },
    },
  });

  const handleChange = () => {
    setDarkMode((prevState) => !prevState);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        darkMode={darkMode}
        handleChange={handleChange}
      />
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;
