import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import LightModeIcon from "@mui/icons-material/LightMode";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Link as RouterLink, NavLink, useLocation } from "react-router-dom";
import { navItems, profile } from "../data/profile.js";
import { useThemeStore } from "../store/themeStore.js";
import GlowBackground from "./GlowBackground.jsx";

function ThemeToggle() {
  const mode = useThemeStore((state) => state.mode);
  const toggleMode = useThemeStore((state) => state.toggleMode);

  return (
    <Tooltip title={`Switch to ${mode === "light" ? "dark" : "light"} theme`}>
      <IconButton
        aria-label="Toggle color theme"
        onClick={toggleMode}
        color="inherit"
        className="h-11 w-11"
      >
        {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </Tooltip>
  );
}

function ThemeButton() {
  const mode = useThemeStore((state) => state.mode);
  const toggleMode = useThemeStore((state) => state.toggleMode);

  return (
    <Button
      onClick={toggleMode}
      variant="outlined"
      startIcon={mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      fullWidth
    >
      {mode === "light" ? "Dark Theme" : "Light Theme"}
    </Button>
  );
}

function NavButtons({ onNavigate, variant = "appbar" }) {
  const location = useLocation();
  const onDark = variant === "appbar";

  return navItems.map((item) => {
    const active = location.pathname === item.path;

    return (
      <Button
        key={item.path}
        component={NavLink}
        to={item.path}
        onClick={onNavigate}
        fullWidth={!onDark}
        sx={{
          px: 1.5,
          minWidth: "auto",
          justifyContent: onDark ? "center" : "flex-start",
          color: onDark
            ? active
              ? "#fff"
              : "rgba(255,255,255,0.75)"
            : active
              ? "primary.main"
              : "text.primary",
          fontWeight: active ? 700 : 500,
          bgcolor: active
            ? onDark
              ? "rgba(255,255,255,0.15)"
              : "action.selected"
            : "transparent",
          "&:hover": onDark
            ? { bgcolor: "rgba(255,255,255,0.12)", color: "#fff" }
            : { bgcolor: "action.hover" },
        }}
      >
        {item.label}
      </Button>
    );
  });
}

function Layout({ children }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box className="site-shell min-h-screen overflow-hidden">
      <GlowBackground />
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{
          backdropFilter: "blur(18px)",
          borderBottom: "1px solid",
          borderColor: "rgba(255,255,255,0.15)",
          bgcolor: "#572af9",
        }}
      >
        <Container maxWidth={false}>
          <Toolbar disableGutters className="gap-3 py-2">
            <Button
              component={RouterLink}
              to="/"
              color="inherit"
              className="min-w-0 shrink-0"
              sx={{ px: 0, justifyContent: "flex-start" }}
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-white/20 text-base font-extrabold text-white">
                KM
              </span>
              <Box component="span" className="ml-3 text-left" sx={{ display: { xs: "none", sm: "block" } }}>
                <span className="block text-sm font-extrabold leading-tight text-white">
                  {profile.name}
                </span>
                <span className="block text-xs font-semibold text-white/70">
                  React UI Engineer
                </span>
              </Box>
            </Button>

            <Stack
              direction="row"
              spacing={0.5}
              className="ml-auto items-center"
              sx={{ display: { xs: "none", lg: "flex" } }}
            >
              <NavButtons />
            </Stack>

            <Stack direction="row" spacing={0.5} className="ml-auto lg:ml-2">
              <Tooltip title="GitHub">
                <IconButton
                  aria-label="Open GitHub profile"
                  color="inherit"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="h-11 w-11"
                  sx={{ display: { xs: "none", sm: "inline-flex" } }}
                >
                  <GitHubIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="LinkedIn">
                <IconButton
                  aria-label="Open LinkedIn profile"
                  color="inherit"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="h-11 w-11"
                  sx={{ display: { xs: "none", sm: "inline-flex" } }}
                >
                  <LinkedInIcon />
                </IconButton>
              </Tooltip>
              <Box sx={{ display: { xs: "none", lg: "block" } }}>
                <ThemeToggle />
              </Box>
              <Tooltip title="Resume">
                <IconButton
                  aria-label="Download resume"
                  color="primary"
                  href={profile.resume}
                  className="h-11 w-11"
                  sx={{ display: { xs: "none", sm: "inline-flex" } }}
                >
                  <DownloadIcon />
                </IconButton>
              </Tooltip>
              <IconButton
                aria-label="Open more options menu"
                color="inherit"
                onClick={() => setDrawerOpen(true)}
                className="h-11 w-11"
                sx={{ display: { xs: "inline-flex", lg: "none" } }}
              >
                <MoreVertIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: "min(88vw, 360px)" } }}
      >
        <Box className="flex h-full flex-col gap-6 p-5">
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="h6">{profile.name}</Typography>
            <IconButton aria-label="Close navigation menu" onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Stack>

          <Stack spacing={1}>
            <NavButtons variant="drawer" onNavigate={() => setDrawerOpen(false)} />
          </Stack>

          <Stack spacing={1.5} className="mt-auto">
            <ThemeButton />
            <Button
              href={profile.resume}
              variant="contained"
              startIcon={<DownloadIcon />}
              fullWidth
            >
              Download Resume
            </Button>
            <Button
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              startIcon={<LinkedInIcon />}
              fullWidth
            >
              LinkedIn
            </Button>
            <Button
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              startIcon={<GitHubIcon />}
              fullWidth
            >
              GitHub
            </Button>
          </Stack>
        </Box>
      </Drawer>

      <main>{children}</main>

      <Box
        component="footer"
        sx={{ bgcolor: "#572af9" }}
        className="mt-12 py-8"
      >
        <Container maxWidth={false}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            alignItems={{ xs: "flex-start", md: "center" }}
            justifyContent="space-between"
          >
            <Typography sx={{ color: "rgba(255,255,255,0.85)" }}>
              Designed for responsive React dashboards and modern frontend roles.
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.85)" }}>
              {profile.email} | {profile.location}
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default Layout;
