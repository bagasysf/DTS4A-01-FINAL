import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import {
  auth,
  registrationWithEmailAndPassword,
} from "../authentication/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export default function RegisterForm() {
  const navigate = useNavigate();
  const [user, isLoading, error] = useAuthState(auth);
  const [statusError, setStatusError] = useState(null);

  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (user) {
      navigate("/home");
    }
    if (error) {
      console.log(error.code);
    }
  });

  const textFieldEmailOnChangeHandler = (event) => {
    setStatusError(null);

    setCredential({
      ...credential,
      email: event.target.value,
    });
  };

  const registerHandler = async () => {
    const error = await registrationWithEmailAndPassword(
      credential.email,
      credential.password
    );

    if (credential.password === "" || credential.password === " ") {
      setStatusError("Password cannot be empty");
      return;
    }

    if (credential.password.length < 6) {
      setStatusError("Password should be at least 6 characters");
      return;
    }

    if (error) {
      setStatusError(error.code);
      return;
    }

    navigate("/signin");
  };

  const textFieldPasswordOnChangeHandler = (event) => {
    setStatusError(null);

    setCredential({
      ...credential,
      password: event.target.value,
    });
  };

  return (
    <>
      <Box sx={{ p: "40px 0px" }}>
        <Typography variant="h6" fontWeight="700" color="secondary.dark">
          Register
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            p: "40px 0px",
          }}
          color="secondary.dark"
        >
          {statusError !== null ? (
            <Typography variant="body1" align="center" color="error.main">
              {statusError}
            </Typography>
          ) : (
            ""
          )}

          <TextField
            required
            id="email"
            label="Email"
            placeholder="Email"
            color="secondary"
            type="email"
            value={credential.user}
            onChange={textFieldEmailOnChangeHandler}
          >
            Email
          </TextField>
          <TextField
            required
            id="password"
            label="Password"
            type="password"
            placeholder="Password"
            color="secondary"
            value={credential.password}
            onChange={textFieldPasswordOnChangeHandler}
          >
            Password
          </TextField>
          <Box sx={{ display: "inline-flex", justifyContent: "end" }}>
            <Button
              variant="contained"
              sx={{
                p: "15px 30px",
                display: "flex",
              }}
              color="secondary"
              onClick={registerHandler}
            >
              <Typography fontWeight="700" color="white">
                Register
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
