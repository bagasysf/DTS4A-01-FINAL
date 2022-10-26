import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import countTime from "../utils/countTime";
import Stack from "@mui/material/Stack";

const ListNews = ({ news }) => {
  return (
    <Stack spacing={3}>
      {news.map((data) => (
        <Link
          key={data.id}
          to={"/content/" + data.id}
          style={{
            textDecoration: "none",
            display: "inline-block",
            marginTop: "20px",
            color: "black",
          }}
        >
          <Box
            sx={{ display: "flex", position: "relative", cursor: "pointer" }}
          >
            <Box
              sx={{
                backgroundImage: `url(${data.fields.thumbnail})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "200px",
                height: "100px",
                borderRadius: "10px",
              }}
            />
            <Stack
              spacing={2}
              sx={{
                ml: "20px",
                width: "100%",
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  mb: "10px",
                  mt: "10px",
                  flexGrow: "1",
                  fontSize: { xs: "1.2rem", lg: "1.5rem" },
                  fontFamily: "Playfair Display",
                }}
              >
                {data.webTitle}
              </Typography>
              <Box
                sx={{
                  display: { xs: "flex", md: "inline-block" },
                  flexDirection: "column",
                  mt: { xs: "0px !important", md: "16px" },
                }}
              >
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{
                    mr: "15px",
                  }}
                >
                  {data.webPublicationDate != null
                    ? countTime(data.webPublicationDate)
                    : ""}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {data.fields.publication}
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Link>
      ))}
    </Stack>
  );
};

export default ListNews;
