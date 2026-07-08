import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import SpeedIcon from "@mui/icons-material/Speed";
import TimelineIcon from "@mui/icons-material/Timeline";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import DescriptionIcon from "@mui/icons-material/Description";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ContactMailIcon from "@mui/icons-material/ContactMail";
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
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import AnimatedPage from "../components/AnimatedPage.jsx";
import IntroSplash from "../components/IntroSplash.jsx";
import Reveal, { RevealGroup, RevealItem } from "../components/Reveal.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { useThemeStore } from "../store/themeStore.js";
import { highlights, profile, projects, skills, workingStyle } from "../data/profile.js";

const metricValueColors = ["#572af9", "#c45a43", "#b78920", "#7c55fa"];
const skillCardAccents = ["#572af9", "#c45a43", "#f3b43f", "#7c55fa"];
const screenTemplates = [
  {
    title: "Analytics dashboard",
    description: "Clean KPI cards, live charts, and a calm monitoring layout for product teams.",
    tags: ["Live data", "KPI cards", "Dark mode"],
    style: "dashboard",
  },
  {
    title: "Editorial landing",
    description: "A refined hero-first layout with strong typography and airy content spacing.",
    tags: ["Hero flow", "Storytelling", "Minimal"],
    style: "editorial",
  },
  {
    title: "Product spotlight",
    description: "A feature-led layout that highlights benefits, outcomes, and clear CTAs.",
    tags: ["Feature grid", "CTA", "Cards"],
    style: "spotlight",
  },
  {
    title: "Contact experience",
    description: "A friendly, tactile contact surface with layered cards and approachable actions.",
    tags: ["Touchpoints", "Form", "Friendly"],
    style: "contact",
  },
];

function DotsAnimation() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev === "") return ".";
        if (prev === ".") return "..";
        if (prev === "..") return "...";
        return "";
      });
    }, 375);
    return () => clearInterval(interval);
  }, []);

  return <span>{dots}</span>;
}

function Home() {
  const mode = useThemeStore((state) => state.mode);
  const isDark = mode === "dark";

  return (
    <AnimatedPage>
      <IntroSplash />
      <Box className="relative">
<Container maxWidth="md" className="grid min-h-[calc(100vh-73px)] items-center pb-8 pt-4 md:pb-12 md:pt-6">
          <Box className="relative flex w-full flex-col items-center text-center">
            <Box
              aria-hidden
              className="running-border"
              sx={{
                position: "absolute",
                inset: {
                  xs: "-20px -16px",
                  sm: "-28px -32px",
                  md: "-32px -48px",
                },
                borderRadius: "28px",
                background: isDark ? "#000000" : "#ffffff",
                boxShadow: isDark
                  ? "0 30px 80px rgba(0, 0, 0, 0.5)"
                  : "0 30px 80px rgba(87, 42, 249, 0.3)",
                zIndex: 0,
                pointerEvents: "none",
              }}
            />
            <RevealGroup
              className="relative z-[1] flex w-full max-w-2xl flex-col gap-4"
              stagger={0.16}
              amount={0.4}
            >
              <RevealItem variant="pop">
                <Stack
                  direction="row"
                  spacing={1}
                  justifyContent="center"
                  useFlexGap
                  sx={{ flexWrap: "wrap" }}
                >
                  <Chip icon={<SpeedIcon />} label="React.js" color="primary" />
                  <Chip icon={<TimelineIcon />} label="Real-time dashboards" />
                </Stack>
              </RevealItem>

              <RevealItem variant="blur">
                <Box>
                  <Typography
                    variant="h1"
                    className="leading-[1.04]"
                    sx={{
                      position: "relative",
                      zIndex: 1,
                      color: isDark ? "#f5f1e8" : "#1c1c1c",
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
              </RevealItem>

              <RevealItem variant="up">
                <Typography className="text-base leading-7" sx={{ color: isDark ? "#c9c2b8" : "#5f625f" }}>
                  {profile.summary}
                </Typography>
              </RevealItem>

              <RevealItem variant="zoom">
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
              </RevealItem>
            </RevealGroup>
          </Box>
        </Container>
      </Box>

      <Box component="section" className="w-full px-4 py-8 md:px-6 md:py-12">
        <Box className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {profile.metrics.map((metric, index) => (
            <Reveal
              key={metric.label}
              className="min-w-0"
              variant={["up", "zoom", "left", "right"][index % 4]}
              delay={index * 0.1}
            >
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
            </Reveal>
          ))}
        </Box>
      </Box>

      <Container maxWidth={false} className="py-12">
        <Reveal variant="up">
          <SectionTitle eyebrow="Featured work" title="Built around responsive apps and live data">
            Architecture pages, PMS workflows, OEE analytics, and machine monitoring
            are the center of this portfolio.
          </SectionTitle>
        </Reveal>

        <Reveal variant="zoom">
          <Paper
            elevation={0}
            className="mb-6 overflow-hidden p-5 md:p-7"
            sx={{ border: "1px solid", borderColor: "divider", background: "linear-gradient(135deg, rgba(87,42,249,0.08), rgba(243,180,63,0.12))" }}
          >
            <Grid container spacing={3} alignItems="center">
              <Grid size={{ xs: 12, lg: 7 }}>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 1.5 }}>
                  Designing for speed, clarity, and real-world use
                </Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  From production monitoring platforms to polished marketing sites, I focus on interfaces that feel effortless while still handling complex data and workflows.
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, lg: 5 }}>
                <Stack spacing={1.5}>
                  {highlights.map((item) => (
                    <Box key={item.title} sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
                      <Box component="span" sx={{ mt: 1, width: 8, height: 8, borderRadius: "50%", bgcolor: "#f3b43f" }} />
                      <Box>
                        <Typography sx={{ fontWeight: 700 }}>{item.title}</Typography>
                        <Typography color="text.secondary" sx={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
                          {item.copy}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        </Reveal>

        <Grid container spacing={2.5} justifyContent="center">
          {projects.map((project, index) => (
            <Grid size={{ xs: 12, lg: 6 }} key={project.title}>
              <Reveal variant={index % 2 === 0 ? "left" : "right"} delay={0.1}>
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
                    justifyContent={{ xs: "center", md: "flex-start" }}
                    useFlexGap
                    className="mt-5"
                    sx={{ flexWrap: "wrap" }}
                  >
                    {project.stack.map((item) => (
                      <Chip key={item} label={item} size="small" />
                    ))}
                  </Stack>
                </Paper>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container maxWidth={false} className="py-12">
        <Reveal variant="up">
          <SectionTitle eyebrow="Screen design templates" title="A few UI directions you can explore">
            These layouts reflect the kind of polished screen systems I enjoy building for products, dashboards, and storytelling experiences.
          </SectionTitle>
        </Reveal>
        <Box className="design-patterns design-patterns--simple">
          {screenTemplates.map((template, index) => (
            <Reveal key={template.title} variant="up" delay={index * 0.06}>
              <Box className="pattern-item pattern-simple">
                <Box className={`pattern-icon pattern-icon--${template.style}`} aria-hidden>
                  <Box className="icon-circle" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {template.style === 'dashboard' && <ShowChartIcon sx={{ color: '#fff', fontSize: 28 }} />}
                    {template.style === 'editorial' && <DescriptionIcon sx={{ color: '#1c1c1c', fontSize: 28 }} />}
                    {template.style === 'spotlight' && <AutoAwesomeIcon sx={{ color: '#fff', fontSize: 28 }} />}
                    {template.style === 'contact' && <ContactMailIcon sx={{ color: '#fff', fontSize: 28 }} />}
                  </Box>
                </Box>
                <Box className="pattern-content" sx={{ textAlign: "center" }}>
                  <Typography variant="h6" sx={{ fontWeight: 800 }}>{template.title}</Typography>
                  <Typography color="text.secondary" sx={{ mt: 1 }}>{template.description}</Typography>
                </Box>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Container>

      <Container maxWidth={false} className="py-12">
        <Reveal variant="up">
          <SectionTitle eyebrow="Core stack" title="Frontend tools with dashboard depth" />
        </Reveal>
        <Reveal variant="zoom">
          <Paper elevation={0} sx={{ border: "1px solid", borderColor: "divider", p: { xs: 3, md: 4 }, mb: 3, background: "linear-gradient(135deg, rgba(87,42,249,0.05), rgba(255,255,255,0.7))" }}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 1.5 }}>
              How I approach implementation
            </Typography>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 1.5 }}>
              {workingStyle.map((item) => (
                <Box key={item} sx={{ display: "flex", gap: 1.25, alignItems: "flex-start" }}>
                  <Box component="span" sx={{ mt: 0.75, width: 8, height: 8, borderRadius: "50%", bgcolor: "#c45a43" }} />
                  <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>{item}</Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Reveal>
        <Reveal variant="zoom">
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
                  <DotsAnimation />
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
        </Reveal>
      </Container>
    </AnimatedPage>
  );
}

export default Home;
