import { ThemeProvider } from "@emotion/react";
import { theme } from './Theme';
import Router from "./route";


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>

    </>
  );
}

export default App;
