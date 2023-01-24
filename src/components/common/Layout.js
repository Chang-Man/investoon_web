import { Box } from "@mui/material";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

export function Layout({ children, setCurrentPage }) {
  return (
    <Box
      sx={{
        height: "100%",
        weight: "100%",
        pr: { xs: "7%", md: "10%" },
        pl: { xs: "7%", md: "10%" },
        pt: "8%",
        pb: "8%",
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
        {children}
        <ArrowCircleDownIcon
          sx={{ color: "#737373", fontSize: "1.8rem", cursor: "pointer" }}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        />
      </Box>
    </Box>
  );
}
