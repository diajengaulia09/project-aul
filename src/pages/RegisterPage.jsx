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
  LinearProgress,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nik, setNik] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Simple password strength calculation
    let strength = 0;
    if (newPassword.length > 0) strength += 20;
    if (newPassword.length > 6) strength += 20;
    if (/[A-Z]/.test(newPassword)) strength += 20;
    if (/[0-9]/.test(newPassword)) strength += 20;
    if (/[^A-Za-z0-9]/.test(newPassword)) strength += 20;

    setPasswordStrength(strength);
  };

  const getPasswordStrengthLabel = () => {
    if (passwordStrength <= 20) return "Poor";
    if (passwordStrength <= 40) return "Weak";
    if (passwordStrength <= 60) return "Fair";
    if (passwordStrength <= 80) return "Good";
    return "Strong";
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 20) return "#f44336";
    if (passwordStrength <= 40) return "#ff9800";
    if (passwordStrength <= 60) return "#ffeb3b";
    if (passwordStrength <= 80) return "#4caf50";
    return "#2e7d32";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log({ firstName, lastName, nik, email, password });
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
              Sign up
            </Typography>
          </Box>

          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Grid container spacing={2}>
              <Grid item size={{ xs: 12, sm: 6 }}>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  First Name*
                </Typography>
                <TextField
                  required
                  fullWidth
                  id="firstName"
                  name="firstName"
                  placeholder="John"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item size={{ xs: 12, sm: 6 }}>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  Last Name*
                </Typography>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  name="lastName"
                  placeholder="Doe"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
            </Grid>

            <Box sx={{ mt: 2 }}>
              <Typography variant="body1" sx={{ mb: 1 }}>
                NIK
              </Typography>
              <TextField
                fullWidth
                id="nik"
                name="nik"
                placeholder="3201234567890001"
                value={nik}
                onChange={(e) => setNik(e.target.value)}
              />
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Email Address*
              </Typography>
              <TextField
                required
                fullWidth
                id="email"
                name="email"
                placeholder="demo@company.com"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Password
              </Typography>
              <TextField
                required
                fullWidth
                name="password"
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="••••••"
                autoComplete="new-password"
                value={password}
                onChange={handlePasswordChange}
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
              />
              {password && (
                <Box sx={{ mt: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={passwordStrength}
                    sx={{
                      height: 8,
                      borderRadius: 5,
                      bgcolor: "rgba(0,0,0,0.1)",
                      "& .MuiLinearProgress-bar": {
                        bgcolor: getPasswordStrengthColor(),
                      },
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ mt: 0.5, color: getPasswordStrengthColor() }}
                  >
                    {getPasswordStrengthLabel()}
                  </Typography>
                </Box>
              )}
            </Box>

            <Box sx={{ mt: 3 }}>
              <Typography variant="body2" color="text.secondary">
                By Signing up, you agree to our{" "}
                <Link
                  to="/terms"
                  style={{ textDecoration: "none", color: "#1976d2" }}
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  to="/privacy"
                  style={{ textDecoration: "none", color: "#1976d2" }}
                >
                  Privacy Policy
                </Link>
              </Typography>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                py: 1.5,
                bgcolor: "#1976d2",
                "&:hover": {
                  bgcolor: "#1565c0",
                },
              }}
            >
              Create Account
            </Button>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Already have an account?{" "}
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "#1976d2" }}
              >
                Login here
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
