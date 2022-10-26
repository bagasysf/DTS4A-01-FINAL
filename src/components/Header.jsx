import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import LogoutIcon from "@mui/icons-material/Logout";
import Logo from "../components/Logo";
import { TextField, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { logOut } from "../authentication/firebase";

const Header = ({ typeHeader }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const logoutHandler = () => {
    logOut();
    navigate("/");
  };

  const handleTypeSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmitSearch = () => {
    navigate(`/search/${search}`);
    setSearch("");
  };

  const handleEnter = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      handleSubmitSearch();
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Logo to="home" />
        <Button
          sx={{ display: "flex", gap: "10px", textTransform: "none" }}
          onClick={logoutHandler}
        >
          <LogoutIcon color="secondary" />
          <Typography color="secondary" fontWeight="700">
            Logout
          </Typography>
        </Button>
      </Box>

      {typeHeader === "search" ? (
        <Box
          sx={{ display: "flex", justifyContent: "space-between", gap: "20px" }}
        >
          <Box
            sx={{ display: "flex", alignItems: "center", gap: "20px" }}
          ></Box>
          <TextField
            id="search"
            placeholder="Search"
            type="text"
            onInput={handleTypeSearch}
            onKeyUp={handleEnter}
            value={search}
            inputProps={{ "aria-label": "search" }}
          />
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => navigate(-1)}
        >
          <ArrowBackIcon color="primary"></ArrowBackIcon>
          <Typography color="primary" fontWeight="700">
            Back
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Header;
