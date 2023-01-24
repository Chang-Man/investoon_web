import { Box, Typography } from "@mui/material";
import { Layout } from "./common/Layout";
import DividendImg from "../public/dividend.png";

export function Sol2({ setCurrentPage }) {
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
            보유한 지분만큼 매월 <br />
            <span style={{ color: "#865FF5" }}>안정적</span>
            으로 <br />
            <span style={{ color: "#865FF5" }}>배당 수익</span>을 받아보세요.
          </Typography>
          <Typography
            variant='h4'
            sx={{ display: { xs: "none", md: "block" }, fontWeight: "bold" }}
          >
            보유한 지분만큼 매월 <br />
            <span style={{ color: "#865FF5" }}>안정적</span>
            으로 <br />
            <span style={{ color: "#865FF5" }}>배당 수익</span>을 받아보세요.
          </Typography>
        </Box>
        <Box sx={{ width: "95%" }}>
          <img src={DividendImg} style={{ width: "100%" }} />
        </Box>
      </Box>
    </Layout>
  );
}
