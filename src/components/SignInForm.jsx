import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { auth, logInWithEmailAndPassword } from "../authentication/firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";

export default function SignInForm() {
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [user, isLoading, error] = useAuthState(auth);

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
  }, [user, isLoading, navigate]);

  const textFieldEmailOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      email: event.target.value,
    });
  };

  const textFieldPasswordOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      password: event.target.value,
    });
  };

  const loginHandler = () => {
    logInWithEmailAndPassword(credential.email, credential.password);
    navigate("/home");
  };

  return (
    <>
      <Box sx={{ p: "40px 0px" }}>
        <Typography variant="h6" fontWeight="700" color="primary.dark">
          Sign In
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            p: "40px 0px",
          }}
        >
          <TextField
            required
            id="email"
            label="Email"
            placeholder="Email"
            type="email"
            value={credential.email}
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
              onClick={loginHandler}
            >
              <Typography fontWeight="700" color="white">
                Sign In
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
