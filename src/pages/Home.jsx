import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import SpeedIcon from "@mui/icons-material/Speed";
import TimelineIcon from "@mui/icons-material/Timeline";
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import AnimatedPage from "../components/AnimatedPage.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { profile, projects, skills } from "../data/profile.js";

const metricValueColors = ["#572af9", "#c45a43", "#b78920", "#7c55fa"];
const skillCardAccents = ["#572af9", "#c45a43", "#f3b43f", "#7c55fa"];

function Home() {
  return (
    <AnimatedPage>
      <Box className="relative">
<Container maxWidth="md" className="grid min-h-[calc(100vh-73px)] items-center pb-8 pt-4 md:pb-12 md:pt-6">
          <Box className="relative flex w-full flex-col items-center text-center">
            <Box
              aria-hidden
              className="running-border"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: { xs: "94%", sm: "88%", md: "108%" },
                height: { xs: "94%", sm: "100%", md: "108%" },
                borderRadius: "28px",
                background: "#ffffff",
                boxShadow: "0 30px 80px rgba(87, 42, 249, 0.3)",
                zIndex: 0,
                pointerEvents: "none",
              }}
            />
            <Stack spacing={2} className="relative z-[1] w-full max-w-2xl">
              <Stack
                direction="row"
                spacing={1}
                flexWrap="wrap"
                justifyContent="center"
                useFlexGap
              >
                <Chip icon={<SpeedIcon />} label="React.js" color="primary" />
                <Chip icon={<TimelineIcon />} label="Real-time dashboards" />
              </Stack>

              <Box>
                <Typography
                  variant="h1"
                  className="leading-[1.04]"
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    color: "#1c1c1c",
                    fontSize: {
                      xs: "calc(1.35rem + 2px)",
                      sm: "calc(1.9rem + 2px)",
                      md: "calc(2.35rem + 2px)",
                      lg: "calc(3rem + 2px)",
                    },
                  }}
                >
                  {profile.name}
                </Typography>
                <Typography
                  variant="h2"
                  color="primary"
                  className="mt-1.5 leading-tight"
                  sx={{
                    fontSize: {
                      xs: "calc(0.9rem + 2px)",
                      sm: "calc(1.12rem + 2px)",
                      md: "calc(1.28rem + 2px)",
                      lg: "calc(1.55rem + 2px)",
                    },
                  }}
                >
                  {profile.role} for data-rich interfaces.
                </Typography>
              </Box>

              <Typography className="text-base leading-7" sx={{ color: "#5f625f" }}>
                {profile.summary}
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} justifyContent="center">
                <Button
                  component={RouterLink}
                  to="/projects"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                >
                  View Projects
                </Button>
                <Button
                  href={`mailto:${profile.email}`}
                  variant="outlined"
                  size="large"
                  startIcon={<EmailIcon />}
                >
                  Contact Me
                </Button>
                <Button
                  href={profile.resume}
                  variant="text"
                  size="large"
                  startIcon={<DownloadIcon />}
                >
                  Resume
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Box component="section" className="w-full px-4 py-8 md:px-6 md:py-12">
        <Box className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {profile.metrics.map((metric, index) => (
            <Box key={metric.label} className="min-w-0">
              <Paper
                elevation={0}
                className="h-full w-full p-4 text-center"
                sx={{ border: "1px solid", borderColor: "divider" }}
              >
                <Typography
                  variant="h3"
                  className="text-3xl"
                  sx={{ color: metricValueColors[index % metricValueColors.length] }}
                >
                  {metric.value}
                </Typography>
                <Typography color="text.secondary" className="mt-1 text-sm">
                  {metric.label}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Box>
      </Box>

      <Container maxWidth={false} className="py-12">
        <SectionTitle eyebrow="Featured work" title="Built around responsive apps and live data">
          Architecture pages, PMS workflows, OEE analytics, and machine monitoring
          are the center of this portfolio.
        </SectionTitle>
        <Grid container spacing={2.5} justifyContent="center">
          {projects.map((project) => (
            <Grid item xs={12} lg={6} key={project.title}>
              <Paper
                elevation={0}
                className="mx-auto flex h-full w-full flex-col p-5 text-center md:text-left"
                sx={{ border: "1px solid", borderColor: "divider" }}
              >
                <Typography variant="h6">{project.title}</Typography>
                <Typography color="text.secondary" className="mt-3">
                  {project.summary}
                </Typography>
                <Stack spacing={1.25} className="mt-5 flex-1">
                  {project.outcomes.slice(0, 4).map((outcome) => (
                    <Box key={outcome} className="flex gap-3 text-left">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#f3b43f]" />
                      <Typography color="text.secondary" className="text-sm">
                        {outcome}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
                <Stack
                  direction="row"
                  spacing={1}
                  flexWrap="wrap"
                  justifyContent={{ xs: "center", md: "flex-start" }}
                  useFlexGap
                  className="mt-5"
                >
                  {project.stack.map((item) => (
                    <Chip key={item} label={item} size="small" />
                  ))}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container maxWidth={false} className="py-12">
        <SectionTitle eyebrow="Core stack" title="Frontend tools with dashboard depth" />
        <Box className="skill-carousel-panel">
          <Box className="skill-carousel-track">
            {[...skills, ...skills].map((group, index) => (
            <Box key={`${group.group}-${index}`} className="skill-carousel-card">
              <Paper
                elevation={0}
                className="w-full p-5 pt-6 text-left"
                sx={{
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: "0 18px 44px rgba(17, 17, 17, 0.06)",
                  position: "relative",
                  transition: "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    backgroundColor: skillCardAccents[index % skillCardAccents.length],
                  },
                  "&:hover": {
                    borderColor: skillCardAccents[index % skillCardAccents.length],
                    boxShadow: "0 22px 52px rgba(17, 17, 17, 0.1)",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: skillCardAccents[index % skillCardAccents.length] }}
                >
                  {group.group}
                </Typography>
                <Box
                  sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}
                >
                  {group.items.map((item) => (
                    <Chip key={item} label={item} size="small" color="primary" variant="outlined" sx={{ maxWidth: "100%" }} />
                  ))}
                </Box>
              </Paper>
            </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </AnimatedPage>
  );
}

export default Home;
