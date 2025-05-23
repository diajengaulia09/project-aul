import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  InputAdornment,
  IconButton,
  Grid,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ email, password });
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "#f5f5f5",
        width: "100vw",
      }}
    >
      <Container
        maxWidth="sm"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            width: "100%",
            borderRadius: 2,
            mt: 4,
            mb: 4,
          }}
        >
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Login
            </Typography>
          </Box>

          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Email Address
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              placeholder="info@codedthemes.com"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 3 }}
            />

            <Typography variant="body1" sx={{ mb: 1 }}>
              Password
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="••••••"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 2 }}
            />

            <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
              <Link to="/forgot-password" style={{ textDecoration: "none" }}>
                <Typography variant="body2" color="primary">
                  Forgot Password?
                </Typography>
              </Link>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                mb: 2,
                py: 1.5,
                bgcolor: "#1976d2",
                "&:hover": {
                  bgcolor: "#1565c0",
                },
              }}
            >
              Login
            </Button>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Don't have an account?{" "}
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "#1976d2" }}
              >
                Sign up here
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
