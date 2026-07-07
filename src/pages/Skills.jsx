import {
  Box,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import AnimatedPage from "../components/AnimatedPage.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { skills, softSkills } from "../data/profile.js";

const strengths = [
  { label: "React UI",                value: 90, color: "#572af9" },
  { label: "Dashboard Visualization", value: 86, color: "#f3b43f" },
  { label: "REST API Integration",    value: 84, color: "#c45a43" },
  { label: "Responsive Delivery",     value: 92, color: "#16a34a" },
];

// Pie geometry — RY closer to RX = rounder/more like the image
const CX = 130, CY = 90, RX = 115, RY = 75, DEPTH = 38;
const total = strengths.reduce((s, x) => s + x.value, 0);

function toRad(deg) { return (deg * Math.PI) / 180; }
function ellipsePt(angleDeg) {
  const a = toRad(angleDeg);
  return [CX + RX * Math.cos(a), CY + RY * Math.sin(a)];
}

// Build slice data (start from -90 = top of ellipse)
let cursor = -90;
const sliceData = strengths.map((s, i) => {
  const start = cursor;
  const sweep = (s.value / total) * 360;
  cursor += sweep;
  const end = cursor;
  const mid = (start + end) / 2;
  const [lx, ly] = [CX + RX * 0.55 * Math.cos(toRad(mid)), CY + RY * 0.55 * Math.sin(toRad(mid))];
  return { ...s, start, end, sweep, mid, lx, ly, delay: i * 0.38 };
});

function Slice3D({ start, end, color, depth, delay }) {
  const [x1, y1] = ellipsePt(start);
  const [x2, y2] = ellipsePt(end);
  const large = end - start > 180 ? 1 : 0;

  const topFace  = `M ${CX} ${CY} L ${x1.toFixed(2)} ${y1.toFixed(2)} A ${RX} ${RY} 0 ${large} 1 ${x2.toFixed(2)} ${y2.toFixed(2)} Z`;
  const sideWall = `M ${x1.toFixed(2)} ${y1.toFixed(2)} A ${RX} ${RY} 0 ${large} 1 ${x2.toFixed(2)} ${y2.toFixed(2)} L ${x2.toFixed(2)} ${(y2 + depth).toFixed(2)} A ${RX} ${RY} 0 ${large} 0 ${x1.toFixed(2)} ${(y1 + depth).toFixed(2)} Z`;

  return (
    <g style={{ animation: `slicePop 10s ease-in-out infinite`, animationDelay: `${delay}s`, opacity: 0 }}>
      <path d={sideWall} fill={color} opacity={0.5} />
      <path d={topFace}  fill={color} />
    </g>
  );
}

function SoftSkillsTimeline() {
  const getIllustration = (title) => {
    const illustrations = {
      "Problem Solving": (
        <svg viewBox="0 0 100 100" width="60" height="60">
          <circle cx="50" cy="30" r="20" fill="rgba(0,0,0,0.1)" />
          <circle cx="30" cy="60" r="15" fill="rgba(0,0,0,0.1)" />
          <circle cx="70" cy="60" r="15" fill="rgba(0,0,0,0.1)" />
          <path d="M 50 50 Q 40 60 30 70" stroke="rgba(0,0,0,0.2)" strokeWidth="2" fill="none" />
          <path d="M 50 50 Q 60 60 70 70" stroke="rgba(0,0,0,0.2)" strokeWidth="2" fill="none" />
        </svg>
      ),
      "Communication": (
        <svg viewBox="0 0 100 100" width="60" height="60">
          <rect x="20" y="30" width="30" height="30" rx="4" fill="rgba(0,0,0,0.1)" />
          <rect x="50" y="40" width="30" height="30" rx="4" fill="rgba(0,0,0,0.1)" />
          <line x1="35" y1="30" x2="50" y2="40" stroke="rgba(0,0,0,0.15)" strokeWidth="2" />
        </svg>
      ),
      "Collaboration": (
        <svg viewBox="0 0 100 100" width="60" height="60">
          <circle cx="25" cy="35" r="10" fill="rgba(0,0,0,0.1)" />
          <circle cx="50" cy="25" r="10" fill="rgba(0,0,0,0.1)" />
          <circle cx="75" cy="35" r="10" fill="rgba(0,0,0,0.1)" />
          <line x1="25" y1="45" x2="25" y2="70" stroke="rgba(0,0,0,0.1)" strokeWidth="2" />
          <line x1="50" y1="35" x2="50" y2="70" stroke="rgba(0,0,0,0.1)" strokeWidth="2" />
          <line x1="75" y1="45" x2="75" y2="70" stroke="rgba(0,0,0,0.1)" strokeWidth="2" />
        </svg>
      ),
      "Adaptability": (
        <svg viewBox="0 0 100 100" width="60" height="60">
          <path d="M 50 20 L 70 60 L 58 60 L 58 80 L 42 80 L 42 60 L 30 60 Z" fill="rgba(0,0,0,0.1)" />
          <circle cx="50" cy="50" r="8" fill="rgba(0,0,0,0.15)" />
        </svg>
      ),
      "Attention to Detail": (
        <svg viewBox="0 0 100 100" width="60" height="60">
          <rect x="25" y="35" width="50" height="50" rx="4" fill="rgba(0,0,0,0.05)" />
          <circle cx="35" cy="50" r="3" fill="rgba(0,0,0,0.2)" />
          <circle cx="50" cy="55" r="3" fill="rgba(0,0,0,0.2)" />
          <circle cx="65" cy="50" r="3" fill="rgba(0,0,0,0.2)" />
          <circle cx="50" cy="75" r="5" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
        </svg>
      ),
      "Time Management": (
        <svg viewBox="0 0 100 100" width="60" height="60">
          <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="2" />
          <line x1="50" y1="50" x2="50" y2="25" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" />
          <line x1="50" y1="50" x2="65" y2="50" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="2" fill="rgba(0,0,0,0.3)" />
        </svg>
      ),
      "Self-Motivation": (
        <svg viewBox="0 0 100 100" width="60" height="60">
          <path d="M 50 20 L 58 40 L 80 40 L 62 55 L 70 75 L 50 60 L 30 75 L 38 55 L 20 40 L 42 40 Z" fill="rgba(0,0,0,0.15)" />
        </svg>
      ),
    };
    return illustrations[title] || null;
  };

  return (
    <Box sx={{ mt: 16, mb: 8 }}>
      <Reveal variant="up">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            sx={{
              fontSize: "0.85rem",
              fontWeight: 700,
              color: "primary.main",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            Core Strengths
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>
            My Soft Skills
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 600, mx: "auto" }}>
            Professional qualities that drive collaboration, innovation, and project success.
          </Typography>
        </Box>
      </Reveal>

      {/* Horizontal Card Grid Layout with Diamond Header */}
      <Grid
        container
        spacing={4}
        sx={{
          justifyContent: "center",
        }}
      >
        {softSkills.map((skill, index) => {
          // Create a continuous gradient across all 7 cards
          const gradients = [
            "linear-gradient(135deg, #D4A574 0%, #C89C6D 100%)", // Problem Solving - Tan/Beige
            "linear-gradient(135deg, #9B8FB8 0%, #8B7BA8 100%)", // Communication - Light Purple
            "linear-gradient(135deg, #5A4B7E 0%, #4A3B6E 100%)", // Collaboration - Medium Purple
            "linear-gradient(135deg, #3A2A5E 0%, #2A1A4E 100%)", // Adaptability - Dark Purple
            "linear-gradient(135deg, #1A1A3E 0%, #0A0A2E 100%)", // Attention to Detail - Navy
            "linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)", // Time Management - Light Blue
            "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)", // Self-Motivation - Purple
          ];

          return (
            <Grid item xs={12} sm={6} md={4} lg={4} key={skill.title}>
              <Reveal variant="up" delay={index * 0.08}>
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: 2,
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      "& .card-diamond": {
                        transform: "translateY(-4px)",
                      },
                    },
                  }}
                >
                  {/* Diamond Shape at Top */}
                  <Box
                    className="card-diamond"
                    sx={{
                      position: "absolute",
                      top: "-20px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "40px",
                      height: "40px",
                      background: "#fff",
                      clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                      zIndex: 10,
                      transition: "all 0.3s ease",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    }}
                  />

                  {/* Main Card Content */}
                  <Box
                    sx={{
                      background: gradients[index],
                      padding: "32px 24px 24px",
                      width: "250px",
                      height: "250px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      color: "#fff",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        boxShadow: "0 16px 40px rgba(0,0,0,0.25)",
                      },
                    }}
                  >
                  {/* Skill Title */}
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 800,
                        fontSize: "1rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        mb: 2,
                        color: "#fff",
                        textAlign: "center",
                      }}
                    >
                      {skill.title}
                    </Typography>

                    {/* Description - 3-4 lines */}
                    <Typography
                      sx={{
                        fontSize: "0.85rem",
                        color: "rgba(255,255,255,0.95)",
                        lineHeight: 1.7,
                        minHeight: "100px",
                        display: "-webkit-box",
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textAlign: "center",
                      }}
                    >
                      {skill.description}
                    </Typography>
                  </Box>
                </Box>
              </Reveal>
            </Grid>
          );
        })}
      </Grid>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Box>
  );
}

function Skills() {
  return (
    <AnimatedPage>
      <Box sx={{ position: "relative" }}>
      <Container maxWidth={false} className="py-12 md:py-16">
        <Reveal variant="up">
          <SectionTitle eyebrow="Skills" title="Modern React skills for analytics products">
            A balanced frontend toolkit covering implementation, data handling,
            visualization, responsive QA, and delivery workflow.
          </SectionTitle>
        </Reveal>

        {/* 3D Pie + legend */}
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", justifyContent: "center", gap: 8, mb: 10 }}>

          {/* Legend — left side */}
          <Reveal variant="left">
            <Stack spacing={3}>
              {sliceData.map((s, index) => (
                <Reveal key={s.label} variant="left" delay={index * 0.08}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box sx={{
                      width: 16, height: 16, borderRadius: "4px",
                      bgcolor: s.color, flexShrink: 0,
                      boxShadow: `0 2px 8px ${s.color}66`,
                    }} />
                    <Box>
                      <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", lineHeight: 1.2 }}>
                        {s.label}
                      </Typography>
                      <Typography color="text.secondary" sx={{ fontSize: "0.8rem" }}>
                        {s.value}% proficiency
                      </Typography>
                    </Box>
                  </Stack>
                </Reveal>
              ))}
            </Stack>
          </Reveal>

          {/* SVG 3D Pie — right side */}
          <Reveal variant="pop" delay={0.15}>
            <Box sx={{ flexShrink: 0, width: "100%", maxWidth: CX * 2 + 20, px: 2 }}>
              <svg
                viewBox={`0 0 ${CX * 2 + 20} ${CY * 2 + DEPTH + 20}`}
                width="100%"
                height="auto"
                style={{ display: "block" }}
              >
                {sliceData.map((s) => (
                  <Slice3D
                    key={s.label}
                    start={s.start}
                    end={s.end}
                    color={s.color}
                    depth={DEPTH}
                    delay={s.delay}
                  />
                ))}
                {sliceData.map((s) => (
                  <text
                    key={s.label + "-label"}
                    x={s.lx}
                    y={s.ly}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#fff"
                    fontWeight="800"
                    fontSize="13"
                    style={{
                      animation: `slicePop 10s ease-in-out infinite`,
                      animationDelay: `${s.delay}s`,
                      opacity: 0,
                    }}
                  >
                    {s.value}%
                  </text>
                ))}
              </svg>
            </Box>
          </Reveal>

        </Box>

        {/* Skill group cards */}
        <Grid container spacing={2}>
          {skills.map((group, index) => (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={group.group}>
              <Reveal
                variant={["up", "zoom", "down"][index % 3]}
                delay={(index % 3) * 0.1}
              >
                <Paper
                  elevation={0}
                  className="h-full p-5"
                  sx={{ border: "1px solid", borderColor: "divider" }}
                >
                  <Typography variant="h6">{group.group}</Typography>
                  <Stack direction="row" spacing={1} useFlexGap className="mt-4" sx={{ flexWrap: "wrap" }}>
                    {group.items.map((item) => (
                      <Chip key={item} label={item} size="small" />
                    ))}
                  </Stack>
                </Paper>
              </Reveal>
            </Grid>
          ))}
        </Grid>

        {/* Soft Skills Section */}
        <SoftSkillsTimeline />
      </Container>
      </Box>
    </AnimatedPage>
  );
}

export default Skills;
