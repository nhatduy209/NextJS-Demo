import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { PrimaryContainer } from "../components/PrimaryContainer";

import { GlobalStyles, lightTheme } from "../theme-provider/config";

function MyApp({ Component, pageProps }) {
  const [background, setBackground] = useState("white");

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />

      <PrimaryContainer backgroundColor={background}>
        {background === "green" ? (
          <div onClick={() => setBackground("white")}>
            Change theme background to white
          </div>
        ) : (
          <div onClick={() => setBackground("green")}>
            Change theme background to green
          </div>
        )}

        <Component {...pageProps} />
      </PrimaryContainer>
    </ThemeProvider>
  );
}

export default MyApp;
