import { ThemeProvider } from "styled-components";
import Router from "./components/Router";
import { GlobalStyle } from "./styles/global-style";
import theme from "./styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
};

export default App;
