import {
  Box,
  Button,
  FormControl,
  Grid,
  OutlinedInput,
  Typography,
} from "@mui/material";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { useState } from "react";
import ReactGA from "react-ga";
import Investoon from "../public/investoon.png";
import Logo from "../public/logo.png";

export function Action({ setCurrentPage }) {
  const [email, setEmail] = useState("");

  return (
    <Box
      sx={{
        height: "calc(var(--vh, 1vh) * 100)",
        weight: "100%",
        pr: { xs: "5%", md: "10%" },
        pl: { xs: "5%", md: "10%" },
        pt: "8%",
        // pb: "8%",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ArrowCircleUpIcon
          sx={{ color: "#737373", fontSize: "1.8rem", cursor: "pointer" }}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        />
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
              sx={{ display: { xs: "block", md: "none" }, fontWeight: "bold" }}
            >
              <span style={{ color: "#865FF5" }}>E-mail</span>을 남기면
              <br /> 정식 서비스 출시 후 무료로 유명 작품{" "}
              <span style={{ color: "#865FF5" }}>한 주</span>를 드립니다!
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: { xs: "flex", md: "none" },
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <form
              method='POST'
              action='https://script.google.com/macros/s/AKfycbx0ZQzgEaLHBD68YPmuQhsZ0AWq1-YlHPGfwHimWY16cMy_SduBwUD026MePLHyzDicNw/exec'
              target='iframe1'
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onSubmit={() => {
                window.alert("제출 완료했습니다.");
                // setEmail("");
              }}
            >
              <input
                style={{
                  width: "80%",
                  height: "45px",
                  border: "none",
                  fontSize: "1rem",
                  borderRadius: "45px",
                  boxSizing: "border-box",
                  paddingLeft: "5%",
                  // padding: "auto 20px auto 50px",
                  backgroundColor: "#D9D9D9",
                }}
                name='email'
                type='email'
                placeholder='E-mail을 입력해주세요 :)'
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                sx={{
                  mt: 5,
                  width: "40%",
                  height: "45px",
                  fontSize: "1.2rem",
                  borderRadius: "45px",
                  color: "white",
                  backgroundColor: "#865FF5",
                  "&:hover": {
                    backgroundColor: "#865FF5",
                  },
                }}
                onClick={() => {
                  window.alert("제출 완료했습니다.");
                }}
                type='submit'
              >
                완료
              </Button>
            </form>
          </Box>

          <iframe
            id='iframe1'
            name='iframe1'
            style={{ display: "none" }}
          ></iframe>
        </Box>
        <ArrowCircleUpIcon sx={{ color: "white", fontSize: "1.8rem" }} />
        <Box
          sx={{
            height: "25%",
            width: "100vw",
            bottom: 0,
            backgroundColor: "#865FF5",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: 5,
          }}
        >
          <Box sx={{ width: "15%" }}>
            <img style={{ width: "100%" }} src={Logo} alt='로고' />
          </Box>
          <Box sx={{ width: "25%" }}>
            <img style={{ width: "100%" }} src={Investoon} alt='인베스툰' />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
