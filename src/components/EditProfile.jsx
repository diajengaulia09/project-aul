import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  MenuItem,
  Paper,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";

export default function EditProfile() {
  const [formData, setFormData] = useState({
    firstName: "Stebin",
    lastName: "Ben",
    email: "stebin.ben@gmail.com",
    month: "March",
    day: "10",
    year: "1990",
    countryCode: "+91",
    phone: "9632564852",
    designation: "Full Stack Developer",
    address1: "3601 Chalk Butte Rd, Cut Bank, MT 59427, United States",
    address2: "301 Chalk Butte Rd, Cut Bank, NY 90573, New York",
    country: "United States",
    state: "California",
    note: "",
  });

  const [skills, setSkills] = useState([
    "Adobe XD",
    "Angular",
    "Corel Draw",
    "Figma",
    "HTML",
    "Illustrator",
    "Javascript",
    "Logo Design",
    "Material UI",
    "NodeJS",
    "npm",
    "Photoshop",
    "React",
    "Reduxjs & toolkit",
    "SASS",
  ]);
  const [newSkill, setNewSkill] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = Array.from({ length: 31 }, (_, i) => String(i + 1));
  const years = Array.from({ length: 50 }, (_, i) => String(2024 - i));

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Grid container>
        <Grid item size={{ xs: 12 }}>
          {/* Personal Info */}
          <Paper sx={{ p: 3, mb: 2 }}>
            <Typography variant="h6" gutterBottom>
              Personal Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item size={{ xs: 12, sm: 6 }}>
                <Typography variant="subtitle2" mb={1}>
                  First Name
                </Typography>
                <TextField
                  fullWidth
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item size={{ xs: 12, sm: 6 }}>
                <Typography variant="subtitle2" mb={1}>
                  Last Name
                </Typography>
                <TextField
                  fullWidth
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item size={{ xs: 12, sm: 6 }} mt={2}>
                <Typography variant="subtitle2" mb={1}>
                  Email Address
                </Typography>
                <TextField
                  fullWidth
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item size={{ xs: 12, sm: 6 }} mt={2}>
                <Typography variant="subtitle2" mb={1}>
                  Date of Birth (Y-M-D)
                </Typography>
                <Grid container spacing={1}>
                  <Grid item size={{ xs: 4 }}>
                    <TextField
                      select
                      fullWidth
                      label="Month"
                      name="month"
                      value={formData.month}
                      onChange={handleChange}
                    >
                      {months.map((month) => (
                        <MenuItem key={month} value={month}>
                          {month}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item size={{ xs: 4 }}>
                    <TextField
                      select
                      fullWidth
                      label="Day"
                      name="day"
                      value={formData.day}
                      onChange={handleChange}
                    >
                      {days.map((day) => (
                        <MenuItem key={day} value={day}>
                          {day}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item size={{ xs: 4 }}>
                    <TextField
                      select
                      fullWidth
                      label="Year"
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                    >
                      {years.map((year) => (
                        <MenuItem key={year} value={year}>
                          {year}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item size={{ xs: 12, sm: 6 }} mt={2}>
                <Typography variant="subtitle2" mb={1}>
                  Phone Number
                </Typography>
                <TextField
                  fullWidth
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <TextField
                          select
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleChange}
                          variant="standard"
                          sx={{ width: 70 }}
                        >
                          <MenuItem value="+1">+1</MenuItem>
                          <MenuItem value="+44">+44</MenuItem>
                          <MenuItem value="+91">+91</MenuItem>
                        </TextField>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item size={{ xs: 12, sm: 6 }} mt={2}>
                <Typography variant="subtitle2" mb={1}>
                  Designation
                </Typography>
                <TextField
                  fullWidth
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Paper>

          {/* Address */}
          <Paper sx={{ p: 3, mb: 2 }}>
            <Typography variant="h6" gutterBottom>
              Address
            </Typography>
            <Grid container spacing={2}>
              <Grid item size={{ xs: 12, sm: 6 }} mt={2}>
                <Typography variant="subtitle2" mb={1}>
                  Address Line 1
                </Typography>
                <TextField
                  fullWidth
                  name="address1"
                  value={formData.address1}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item size={{ xs: 12, sm: 6 }} mt={2}>
                <Typography variant="subtitle2" mb={1}>
                  Address Line 2
                </Typography>
                <TextField
                  fullWidth
                  name="address2"
                  value={formData.address2}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item size={{ xs: 12, sm: 6 }} mt={2}>
                <Typography variant="subtitle2" mb={1}>
                  Country
                </Typography>
                <TextField
                  select
                  fullWidth
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <MenuItem value="United States">United States</MenuItem>
                  <MenuItem value="United Kingdom">United Kingdom</MenuItem>
                  <MenuItem value="India">India</MenuItem>
                </TextField>
              </Grid>
              <Grid item size={{ xs: 12, sm: 6 }} mt={2}>
                <Typography variant="subtitle2" mb={1}>
                  State
                </Typography>
                <TextField
                  fullWidth
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Paper>

          {/*  Skills */}
          <Paper sx={{ p: 3, mb: 2 }}>
            <Typography variant="h6" gutterBottom>
              Skills
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
                  {skills.map((skill, index) => (
                    <Box
                      key={index}
                      sx={{
                        px: 1.5,
                        py: 0.5,
                        bgcolor: "#f5f5f5",
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        fontSize: 14,
                      }}
                    >
                      {skill}
                      <IconButton
                        size="small"
                        onClick={() => handleRemoveSkill(skill)}
                      >
                        ×
                      </IconButton>
                    </Box>
                  ))}
                  <TextField
                    size="small"
                    variant="standard"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Add Skills"
                    onKeyDown={(e) => e.key === "Enter" && handleAddSkill()}
                    sx={{ minWidth: 100 }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Paper>

          {/* Note */}
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Note
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={4}
              placeholder="Write a note here..."
              name="note"
              value={formData.note}
              onChange={handleChange}
            />
            <Divider sx={{ my: 2 }} />
            <Button variant="text">Cancel</Button>
            <Button variant="contained">Save</Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
