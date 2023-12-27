import { Box, CssBaseline, ThemeProvider, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";
import Header3 from "./components/header/Header3";
import Hero from "./components/hero/Hero";
import { ColorModeContext, useMode } from "./theme";
import Main from "./components/main/Main";
 const theme=useTheme()
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}
    >
      <ThemeProvider
        // @ts-ignore
        theme={theme}
      >
        <CssBaseline />

        <Header1 />
        <Header2 />
        <Header3 />
        <Box bgcolor={theme.
// @ts-ignore
        palette.bg.main}>
        <Hero/>
        <Main/>
        </Box>
       
        <Outlet />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
