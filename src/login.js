import React from "react";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import { useState } from "react";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const validatePass = (event) => {
    var password = event.target.value;

    if (passwordRegex.test(password)) {
      setIsValid(true);
      setMessage("Your password looks good!");

      return true;
    } else {
      setIsValid(false);
      setMessage("Please enter a valid password!");
      return false;
    }
  };

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto"
  };
  return (
    <>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <h2>Login Page</h2>
          </Grid>
          <TextField
            label="Username"
            placeholder="Enter username"
            fullWidth
            required
            onChange={handleEmailChange}
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type={passwordShown ? "text" : "password"}
            fullWidth
            required
            onChange={(e) => validatePass(e)}
          />
          <button style={{ float: "right" }} onClick={togglePassword}>
            Show Password
          </button>
          <div>
            <Button
              style={{ width: "100px", height: "36px", color: "white" }}
              type="submit"
              color="primary"
              variant="contained"
              fullWidth
              disabled={!email || !isValid}
            >
              Login
            </Button>
          </div>
          <div className={`message ${isValid ? "success" : "error"}`}>
            {message}
          </div>
        </Paper>
      </Grid>
    </>
  );
};
export default Login;
