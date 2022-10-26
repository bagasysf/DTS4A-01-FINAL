import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Logo({ to = "" }) {
  return (
    <>
      <Link
        to={"/" + to}
        style={{
          textDecoration: "none",
        }}
      >
        <Box>
          <Box
            sx={{
              p: "10px",
              backgroundColor: "primary.main",
              color: "white",
              display: "inline-flex",
              border: "3px solid",
              borderColor: "primary.main",
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
              }}
            >
              SJ
            </Typography>
          </Box>
          <Box
            sx={{
              p: "10px",
              backgroundColor: "white",
              color: "secondary.main",
              display: "inline-flex",
              border: "3px solid",
              borderColor: "primary.main",
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
              }}
            >
              News
            </Typography>
          </Box>
        </Box>
      </Link>
    </>
  );
}
