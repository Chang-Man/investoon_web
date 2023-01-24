import { Box, Typography } from "@mui/material";
import { Layout } from "./common/Layout";
import Need2Img from "../public/need2.png";
import Need1Img from "../public/need1.png";

export function Needs({ setCurrentPage }) {
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
              display: { xs: "block", lineHeight: 1.5, md: "none" },
              fontWeight: "bold",
            }}
          >
            그동안 웹툰/웹소설,
            <br /> <span style={{ color: "#865FF5" }}>소비</span>만 하셨나요?
          </Typography>
          <Typography
            variant='h4'
            sx={{ display: { xs: "none", md: "block" }, fontWeight: "bold" }}
          >
            그동안 웹툰/웹소설,
            <br /> <span style={{ color: "#865FF5" }}>소비</span>만 하셨나요?
          </Typography>
        </Box>
        <Box sx={{ width: "100%", mb: 3 }}>
          <img src={Need2Img} style={{ width: "70%" }} />
        </Box>
        <Box sx={{ width: "100%" }}>
          <img src={Need1Img} style={{ width: "70%", float: "right" }} />
        </Box>
      </Box>
    </Layout>
  );
}
