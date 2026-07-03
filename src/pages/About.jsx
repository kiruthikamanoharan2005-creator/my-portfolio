import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import {
  Box,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import AnimatedPage from "../components/AnimatedPage.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { certifications, education, profile } from "../data/profile.js";

const PRIMARY = "#572af9";

const focusAreas = [
  {
    icon: <CodeIcon />,
    title: "Component Architecture",
    copy: "Reusable React components, hooks, responsive states, and maintainable UI patterns.",
    iconBg: "#572af9",
    cardBg: "#f5f3ff",
    accent: "rgba(87,42,249,0.2)",
  },
  {
    icon: <AutoGraphIcon />,
    title: "Data Visualization",
    copy: "Production KPIs, live machine data, OEE charts, and analytics-heavy interfaces.",
    iconBg: "#16a34a",
    cardBg: "#f0fdf4",
    accent: "rgba(22,163,74,0.25)",
  },
  {
    icon: <WorkspacePremiumIcon />,
    title: "Performance Mindset",
    copy: "Render optimization, lazy loading, cross-browser checks, and smoother dashboard UX.",
    iconBg: "#2563eb",
    cardBg: "#eff6ff",
    accent: "rgba(37,99,235,0.22)",
  },
  {
    icon: <WorkspacePremiumIcon />,
    title: "Collaborative Delivery",
    copy: "Sprint-based workflows, daily standups, and consistent delivery within agile teams.",
    iconBg: "#c45a43",
    cardBg: "#fff7f5",
    accent: "rgba(196,90,67,0.2)",
  },
];

function About() {
  return (
    <AnimatedPage>
      <Box sx={{ position: "relative" }}>
      <Container maxWidth="lg" className="py-12 md:py-16">

        <SectionTitle eyebrow="About" title="A frontend developer focused on useful interfaces">
          Kiruthika combines React.js implementation, data visualization, and
          responsive UI engineering for manufacturing and analytics products.
        </SectionTitle>

        {/* Bio — full width */}
        <Paper
          elevation={0}
          className="p-6 md:p-8"
          sx={{ border: "1px solid", borderColor: "divider", mb: 3 }}
        >
          <Typography
            variant="h5"
            sx={{ color: PRIMARY, fontSize: "clamp(1.1rem, 2vw, 1.4rem)", fontWeight: 800 }}
          >
            Promoted from intern to full-time in 6 months.
          </Typography>
          <Typography color="text.secondary" className="mt-4 leading-7">
            {profile.summary}
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap className="mt-6">
            {["React Hooks", "REST APIs", "ECharts", "Highcharts", "Responsive Design"].map(
              (item) => (
                <Chip key={item} label={item} color="primary" variant="outlined" />
              ),
            )}
          </Stack>
        </Paper>

        {/* Education — centered */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
          <Paper
            elevation={0}
            sx={{
              p: 3, border: "1px solid", borderColor: "divider",
              width: "100%", maxWidth: 480,
            }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <Box className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-[#f3b43f] text-black">
                <SchoolIcon />
              </Box>
              <Typography variant="h6" sx={{ color: PRIMARY, fontSize: "0.95rem", fontWeight: 700 }}>
                {education[0].degree}
              </Typography>
            </Stack>
            <Typography color="text.secondary" className="mt-3 text-sm">
              {education[0].institution}
            </Typography>
            <Typography color="text.secondary" className="mt-1 text-sm">
              {education[0].period}
            </Typography>
            <Chip label={education[0].detail} className="mt-4" color="primary" variant="outlined" size="small" />
          </Paper>
        </Box>

        {/* Focus areas — 2 per row */}
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2.5, mb: 6 }}>
          {focusAreas.map((area) => (
            <Box key={area.title}>
              <Paper
                elevation={0}
                sx={{
                  height: "100%",
                  p: 3.5,
                  background: area.cardBg,
                  border: `1px solid ${area.accent}`,
                  borderRadius: 3,
                  display: "flex",
                  gap: 2.5,
                  alignItems: "flex-start",
                }}
              >
                <Box sx={{
                  flexShrink: 0,
                  width: 48, height: 48,
                  borderRadius: 2,
                  bgcolor: area.iconBg,
                  color: "#fff",
                  display: "grid",
                  placeItems: "center",
                }}>
                  {area.icon}
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 800, fontSize: "1rem", mb: 1, color: area.iconBg }}>
                    {area.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ fontSize: "0.875rem", lineHeight: 1.75 }}>
                    {area.copy}
                  </Typography>
                </Box>
              </Paper>
            </Box>
          ))}
        </Box>

        {/* Certifications — centered */}
        <SectionTitle eyebrow="Certifications" title="Learning signals" />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2.5, width: "100%", maxWidth: 720 }}>
            {certifications.map((cert) => (
              <Paper
                key={cert.title}
                elevation={0}
                className="h-full p-5"
                sx={{ border: "1px solid", borderColor: "divider" }}
              >
                <Typography variant="h6" sx={{ color: PRIMARY, fontSize: "0.95rem", fontWeight: 700 }}>
                  {cert.title}
                </Typography>
                <Typography color="text.secondary" className="mt-2 text-sm">
                  {cert.issuer}
                </Typography>
                <Chip label={cert.period} className="mt-4" color="secondary" size="small" />
              </Paper>
            ))}
          </Box>
        </Box>

      </Container>
      </Box>
    </AnimatedPage>
  );
}

export default About;
