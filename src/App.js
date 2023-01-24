import { Box, createTheme, ThemeProvider } from "@mui/material";
import ReactPageScroller from "react-page-scroller";
import { useState, useEffect } from "react";
import { Main } from "./components/Main";

const theme = createTheme({
  typography: {
    fontFamily: "Nanum Gothic",
  },
});

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ height: "calc(var(--vh, 1vh) * 100)" }}>
        {/* <ReactPageScroller
        // animationTimer={700}
        // pageOnChange={(num) => {
        //   setCurrentPage(num);
        // }}
        // customPageNumber={currentPage}
        > */}
        <Main setCurrentPage={setCurrentPage} />
        {/* </ReactPageScroller> */}
      </Box>
    </ThemeProvider>
  );
}

export default App;
