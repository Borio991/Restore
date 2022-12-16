import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import AboutPage from "../features/about/AboutPage";
import Catalog from "../features/catalog/Catalog";
import ProductDetails from "../features/catalog/ProductDetails";
import ContactPage from "../features/contact/ContactPage";
import HomePage from "../features/home/HomePage";
import Header from "./Header";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const PaletteType = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: PaletteType,
      background: {
        default: PaletteType === "light" ? "#eaeaea" : "#121212",
      },
    },
  });

  const handleChange = () => {
    setDarkMode((prevState) => !prevState);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleChange={handleChange} />
      <Container>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route exact path="/catalog" component={Catalog} />
          <Route path="/catalog/:id" component={ProductDetails} />
        </Switch>
      </Container>
    </ThemeProvider>
  );
}

export default App;
