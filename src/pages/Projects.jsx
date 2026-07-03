import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GitHubIcon from "@mui/icons-material/GitHub";
import InsightsIcon from "@mui/icons-material/Insights";
import LaunchIcon from "@mui/icons-material/Launch";
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
import { projects } from "../data/profile.js";

function Projects() {
  return (
    <AnimatedPage>
      <Container maxWidth={false} className="py-12 md:py-16">
        <SectionTitle eyebrow="Projects" title="Websites, PMS workflows, and production dashboards">
          Projects selected from Kiruthika's resume, shaped into case-study style
          cards for quick recruiter and engineering review.
        </SectionTitle>

        <Grid container spacing={3} justifyContent="center">
          {projects.map((project) => (
            <Grid item xs={12} lg={6} key={project.title}>
              <Paper
                elevation={0}
                className="project-card mx-auto flex h-full w-full flex-col p-5 md:p-6"
                sx={{ border: "1px solid", borderColor: "divider" }}
              >
                <Box className="mb-5 grid h-12 w-12 place-items-center rounded-lg bg-[#572af9] text-white">
                  <InsightsIcon />
                </Box>
                <Typography variant="h5" className="leading-tight">
                  {project.title}
                </Typography>
                <Typography color="text.secondary" className="mt-4">
                  {project.summary}
                </Typography>

                <Stack spacing={1.5} className="my-6 flex-1">
                  {project.outcomes.map((outcome) => (
                    <Box key={outcome} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#f3b43f]" />
                      <Typography color="text.secondary" className="text-sm">
                        {outcome}
                      </Typography>
                    </Box>
                  ))}
                </Stack>

                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {project.stack.map((item) => (
                    <Chip key={item} label={item} size="small" color="primary" variant="outlined" />
                  ))}
                </Stack>

                {(project.liveUrl || project.githubUrl) && (
                  <Stack direction="row" spacing={1.5} className="mt-5">
                    {project.liveUrl && (
                      <Button
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="contained"
                        size="small"
                        startIcon={<LaunchIcon fontSize="small" />}
                      >
                        Live Demo
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outlined"
                        size="small"
                        startIcon={<GitHubIcon fontSize="small" />}
                      >
                        GitHub
                      </Button>
                    )}
                  </Stack>
                )}
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Paper
          elevation={0}
          className="mt-8 p-5 md:p-7"
          sx={{ border: "1px solid", borderColor: "divider" }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            alignItems={{ xs: "stretch", md: "center" }}
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="h5">Need the technical stack at a glance?</Typography>
              <Typography color="text.secondary" className="mt-2">
                See languages, visualization tools, APIs, testing workflow, and UI libraries.
              </Typography>
            </Box>
            <Button
              component={RouterLink}
              to="/skills"
              variant="contained"
              endIcon={<ArrowForwardIcon />}
            >
              View Skills
            </Button>
          </Stack>
        </Paper>
      </Container>
    </AnimatedPage>
  );
}

export default Projects;
