import { Padding } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    localStorage.setItem("token", "pappu-kushwaha");
    navigate("/dashboard");
  };

  return (
    <div className="content content-2">
      <Card className="card">
        <CardContent>
          <form>
            <Grid container spacing={2}>
              <Grid xs={12} item>
                <Typography className="text">SIGN IN</Typography>
              </Grid>

              <Grid xs={12} item>
                <TextField
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  label="Email"
                  size="small"
                  placeholder="Enter Your Email ID"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid xs={12} item>
                <TextField
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  label="Password"
                  size="small"
                  placeholder="Enter Your Password"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid xs={12} item>
                <Button type="submit" onClick={login} variant="contained">
                  {" "}
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
export default Login;
