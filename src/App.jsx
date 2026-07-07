import { Box, CssBaseline, LinearProgress, ThemeProvider, createTheme } from "@mui/material";
import { Suspense, lazy, useEffect, useMemo } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import IntroSplash from "./components/IntroSplash.jsx";
import { useThemeStore } from "./store/themeStore.js";

const About = lazy(() => import("./pages/About.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Experience = lazy(() => import("./pages/Experience.jsx"));
const Home = lazy(() => import("./pages/Home.jsx"));
const Projects = lazy(() => import("./pages/Projects.jsx"));
const Skills = lazy(() => import("./pages/Skills.jsx"));

function App() {
  const mode = useThemeStore((state) => state.mode);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [mode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: mode === "light" ? "#572af9" : "#8b66fb" },
          secondary: { main: mode === "light" ? "#c45a43" : "#ffb38a" },
          divider: mode === "light" ? "rgba(87, 42, 249, 0.2)" : "rgba(139, 102, 251, 0.25)",
          background: {
            default: mode === "light" ? "#ffffff" : "#111111",
            paper: mode === "light" ? "#ffffff" : "#1b1b1b",
          },
          text: {
            primary: mode === "light" ? "#1c1c1c" : "#f5f1e8",
            secondary: mode === "light" ? "#5f625f" : "#c9c2b8",
          },
        },
        shape: { borderRadius: 8 },
        typography: {
          fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
          button: { textTransform: "none", fontWeight: 700 },
          h1: { letterSpacing: 0, fontWeight: 800 },
          h2: { letterSpacing: 0, fontWeight: 800 },
          h3: { letterSpacing: 0, fontWeight: 800 },
          h4: { letterSpacing: 0, fontWeight: 800 },
          h5: { letterSpacing: 0, fontWeight: 800 },
          h6: { letterSpacing: 0, fontWeight: 700 },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: { borderRadius: 8, minHeight: 44, boxShadow: "none" },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: { backgroundImage: "none" },
            },
          },
        },
      }),
    [mode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <IntroSplash />
      <Layout>
        <Suspense
          fallback={
            <Box className="mx-auto min-h-[55vh] max-w-7xl px-4 py-16">
              <LinearProgress />
            </Box>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </Suspense>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
