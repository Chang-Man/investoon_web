import { Box, createTheme, IconButton, ThemeProvider } from "@mui/material";
import ReactPageScroller from "react-page-scroller";
import { useState, useEffect } from "react";
import { Main } from "./components/Main";
import { Needs } from "./components/Need";
import { Sol1 } from "./components/Sol1";
import { Sol2 } from "./components/Sol2";
import { Sol3 } from "./components/Sol3";
import { Action } from "./components/Action";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

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
        <Box
          sx={{
            zIndex: 1000,
            width: "100%",
            position: "fixed",
            padding: 3,
            boxSizing: "border-box",
            display: currentPage === 0 ? "none" : "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton />
          <IconButton
            onClick={() => setCurrentPage(0)}
            sx={{
              display: "block",
              width: "42px",
              height: "42px",
              // position: "sticky",
              color: "white",
              backgroundColor: "#865FF5",
            }}
          >
            <KeyboardDoubleArrowUpIcon />
          </IconButton>
        </Box>

        <ReactPageScroller
          animationTimer={700}
          pageOnChange={(num) => {
            setCurrentPage(num);
          }}
          customPageNumber={currentPage}
        >
          <Main setCurrentPage={setCurrentPage} />
          <Needs setCurrentPage={setCurrentPage} />
          <Sol1 setCurrentPage={setCurrentPage} />
          <Sol2 setCurrentPage={setCurrentPage} />
          <Sol3 setCurrentPage={setCurrentPage} />
          <Action setCurrentPage={setCurrentPage} />
        </ReactPageScroller>
      </Box>
    </ThemeProvider>
  );
}

export default App;
