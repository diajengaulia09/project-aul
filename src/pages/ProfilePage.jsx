import React from "react"
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Avatar,
  Tabs,
  Tab,
  Chip,
  LinearProgress,
  Link,
} from "@mui/material"
import {
  Person as PersonIcon,
  Assignment as AssignmentIcon,
  AccountCircle as AccountCircleIcon,
  VpnKey as VpnKeyIcon,
  SupervisorAccount as SupervisorAccountIcon,
  Settings as SettingsIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationOnIcon,
  Language as LanguageIcon,
} from "@mui/icons-material"
import Layout from "../components/Layout"

export default function ProfilePage() {
  const [tabValue, setTabValue] = React.useState(0)

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
            Basic Profile
          </Typography>
        </Box>

        <Paper sx={{ mb: 4 }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{ borderBottom: 1, borderColor: "divider" }}
          >
            <Tab icon={<PersonIcon />} label="Profile" iconPosition="start" />
            <Tab icon={<AssignmentIcon />} label="Personal" iconPosition="start" />
            <Tab icon={<AccountCircleIcon />} label="My Account" iconPosition="start" />
            <Tab icon={<VpnKeyIcon />} label="Change Password" iconPosition="start" />
            <Tab icon={<SupervisorAccountIcon />} label="Role" iconPosition="start" />
            <Tab icon={<SettingsIcon />} label="Settings" iconPosition="start" />
          </Tabs>
        </Paper>

        <Grid container spacing={4}>
          <Grid item size={{ xs: 12, md: 4 }}>
            <Paper sx={{ p: 3, mb: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Box sx={{ position: "relative", mb: 2 }}>
                <Avatar alt="Anshan H." src="/placeholder.svg?height=120&width=120" sx={{ width: 120, height: 120 }} />
                <Chip
                  label="Pro"
                  color="primary"
                  size="small"
                  sx={{ position: "absolute", top: 0, right: -15 }}
                />
              </Box>
              <Typography variant="h6" gutterBottom>
                Anshan H.
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Project Manager
              </Typography>

              <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", my: 3 }}>
                {["86", "40", "4.5K"].map((val, i) => (
                  <Box key={i} sx={{ textAlign: "center" }}>
                    <Typography variant="h6">{val}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {i === 0 ? "Post" : i === 1 ? "Project" : "Members"}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Box sx={{ width: "100%", mt: 2 }}>
                {[{
                  icon: <EmailIcon fontSize="small" sx={{ mr: 1, color: "text.secondary" }} />,
                  text: "anshan.dh81@gmail.com",
                }, {
                  icon: <PhoneIcon fontSize="small" sx={{ mr: 1, color: "text.secondary" }} />,
                  text: "(+1-876) 8654 239 581",
                }, {
                  icon: <LocationOnIcon fontSize="small" sx={{ mr: 1, color: "text.secondary" }} />,
                  text: "New York",
                }, {
                  icon: <LanguageIcon fontSize="small" sx={{ mr: 1, color: "text.secondary" }} />,
                  text: <Link href="https://anshan.dh.url" underline="hover" variant="body2">https://anshan.dh.url</Link>,
                }].map((item, idx) => (
                  <Box key={idx} sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                    {item.icon}
                    <Typography variant="body2">{item.text}</Typography>
                  </Box>
                ))}
              </Box>
            </Paper>

            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Skills
              </Typography>
              <Box sx={{ mt: 3 }}>
                {[{
                  label: "Junior",
                  value: 30,
                }, {
                  label: "UX Researcher",
                  value: 80,
                }, {
                  label: "WordPress",
                  value: 90,
                }, {
                  label: "HTML",
                  value: 30,
                }, {
                  label: "Graphic Design",
                  value: 95,
                }, {
                  label: "Code Style",
                  value: 75,
                }].map((skill, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                      <Typography variant="body2">{skill.label}</Typography>
                      <Typography variant="body2">{skill.value}%</Typography>
                    </Box>
                    <LinearProgress variant="determinate" value={skill.value} sx={{ height: 6, borderRadius: 3 }} />
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>

          <Grid item size={{ xs: 12, md: 8 }}>
            {[{
              title: "About me",
              content: ["Hello, I'm Anshan Handgun Creative Graphic Designer & User Experience Designer based in Website. I create digital Products a more Beautiful and usable place. Morbid accusant ipsum. Nam nec tellus at."]
            }, {
              title: "Personal Details",
              content: [
                ["Full Name", "Anshan Handgun"],
                ["Father Name", "Mr. Deepen Handgun"],
                ["Phone", "(+1-876) 8654 239 581"],
                ["Country", "New York"],
                ["Email", "anshan.dh81@gmail.com"],
                ["Zip Code", "956 754"],
                ["Address", "Street 110-B Kalians Bag, Dewan, M.P. New York"],
              ]
            }, {
              title: "Education",
              content: [
                ["Master Degree (Year)", "2014-2017"],
                ["Institute", "-"],
                ["Bachelor (Year)", "2011-2013"],
                ["Institute", "Imperial College London"],
                ["School (Year)", "2009-2011"],
                ["Institute", "School of London, England"],
              ]
            }, {
              title: "Employment",
              content: [
                ["Senior UI/UX designer (Year)", "2019-Current"],
                ["Job Responsibility", "Perform task related to project manager with the 100+ team under my observation. Team management is key role in this company."],
                ["Trainee cum Project Manager (Year)", "2017-2019"],
                ["Job Responsibility", "Team management is key role in this company."],
              ]
            }].map((section, idx) => (
              <Paper key={idx} sx={{ p: 3, mb: 4 }}>
                <Typography variant="h6" gutterBottom>
                  {section.title}
                </Typography>
                {typeof section.content[0] === "string" ? (
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {section.content[0]}
                  </Typography>
                ) : (
                  <Grid container spacing={3} sx={{ mt: 1 }}>
                    {section.content.map(([label, value], i) => (
                      <Grid item size={{ xs: 12, sm: 6 }} key={i}>
                        <Typography variant="body2" color="text.secondary">
                          {label}
                        </Typography>
                        <Typography variant="body1">{value}</Typography>
                      </Grid>
                    ))}
                  </Grid>
                )}
              </Paper>
            ))}
          </Grid>
        </Grid>

        <Box
          sx={{ mt: 4, pt: 2, borderTop: 1, borderColor: "divider", display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", gap: 2 }}
        >
          <Typography variant="body2" color="text.secondary">
            © All rights reserved {" "}
            <Link href="#" underline="hover" color="primary">
              CodedThemes
            </Link>
          </Typography>
          <Box>
            <Link href="#" underline="hover" variant="body2" sx={{ mr: 2 }}>
              About us
            </Link>
            <Link href="#" underline="hover" variant="body2" sx={{ mr: 2 }}>
              Privacy
            </Link>
            <Link href="#" underline="hover" variant="body2">
              Terms
            </Link>
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}