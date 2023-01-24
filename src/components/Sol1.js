import { Box, Typography } from "@mui/material";
import { Layout } from "./common/Layout";
import InvestImg from "../public/invest.png";

export function Sol1({ setCurrentPage }) {
  return (
    <Layout setCurrentPage={setCurrentPage}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "100%", mb: 5 }}>
          <Typography
            variant='h5'
            sx={{
              display: { xs: "block", md: "none" },
              lineHeight: 1.5,
              fontWeight: "bold",
            }}
          >
            <span style={{ color: "#865FF5" }}>INVESTOON</span> 에서는 <br />{" "}
            웹툰/웹소설 지분을
            <br />
            <span style={{ color: "#865FF5" }}>주식</span>처럼 사고 팔 수 있어요
          </Typography>
          <Typography
            variant='h4'
            sx={{ display: { xs: "none", md: "block" }, fontWeight: "bold" }}
          >
            <span style={{ color: "#865FF5" }}>INVESTOON</span> 에서는 <br />{" "}
            웹툰/웹소설 지분을
            <br />
            <span style={{ color: "#865FF5" }}>주식</span>처럼 사고 팔 수 있어요
          </Typography>
        </Box>
        <Box sx={{ width: "100%", mb: 3 }}>
          <img src={InvestImg} style={{ width: "100%" }} />
        </Box>
      </Box>
    </Layout>
  );
}
