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
import { skills } from "../data/profile.js";

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

function Skills() {
  return (
    <AnimatedPage>
      <Box sx={{ position: "relative" }}>
      <Container maxWidth={false} className="py-12 md:py-16">
        <SectionTitle eyebrow="Skills" title="Modern React skills for analytics products">
          A balanced frontend toolkit covering implementation, data handling,
          visualization, responsive QA, and delivery workflow.
        </SectionTitle>

        {/* 3D Pie + legend */}
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", justifyContent: "center", gap: 8, mb: 10 }}>

          {/* Legend — left side */}
          <Stack spacing={3}>
            {sliceData.map((s) => (
              <Stack key={s.label} direction="row" spacing={2} alignItems="center">
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
            ))}
          </Stack>

          {/* SVG 3D Pie — right side */}
          <Box sx={{ flexShrink: 0 }}>
            <svg width={CX * 2 + 20} height={CY * 2 + DEPTH + 20} style={{ overflow: "visible" }}>
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

        </Box>

        {/* Skill group cards */}
        <Grid container spacing={2}>
          {skills.map((group) => (
            <Grid item xs={12} sm={6} lg={4} key={group.group}>
              <Paper
                elevation={0}
                className="h-full p-5"
                sx={{ border: "1px solid", borderColor: "divider" }}
              >
                <Typography variant="h6">{group.group}</Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap className="mt-4">
                  {group.items.map((item) => (
                    <Chip key={item} label={item} size="small" />
                  ))}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
      </Box>
    </AnimatedPage>
  );
}

export default Skills;
