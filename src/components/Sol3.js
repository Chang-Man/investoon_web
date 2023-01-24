import { Box, Typography } from "@mui/material";
import { Layout } from "./common/Layout";
import IpExampleImg from "../public/IpExample.png";

export function Sol3({ setCurrentPage }) {
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
              // fontSize: "1.2rem",
            }}
          >
            <span style={{ color: "#865FF5" }}>영상화</span> 될 작품에 투자하고
            <br /> 치솟는 <span style={{ color: "#865FF5" }}>수익률</span> 을
            경험하세요
          </Typography>
          <Typography
            variant='h4'
            sx={{ display: { xs: "none", md: "block" }, fontWeight: "bold" }}
          >
            <span style={{ color: "#865FF5" }}>영상화</span> 될 작품에 투자하고
            <br /> 치솟는 <span style={{ color: "#865FF5" }}>수익률</span> 을
            경험하세요
          </Typography>
        </Box>
        <Box sx={{ width: "95%" }}>
          <img src={IpExampleImg} style={{ width: "100%" }} />
        </Box>
      </Box>
    </Layout>
  );
}
