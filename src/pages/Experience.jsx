import BusinessIcon from "@mui/icons-material/Business";
import {
  Box,
  Chip,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import AnimatedPage from "../components/AnimatedPage.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { experience } from "../data/profile.js";

const PRIMARY = "#572af9";

function ImageCollage({ images }) {
  if (images.length === 1) {
    return (
      <Box
        component="img"
        src={images[0].src}
        alt={images[0].alt}
        sx={{
          width: "100%",
          borderRadius: 3,
          border: "1px solid",
          borderColor: "divider",
          boxShadow: "0 8px 32px rgba(87,42,249,0.12)",
          objectFit: "cover",
          display: "block",
        }}
      />
    );
  }

  if (images.length === 3) {
    return (
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "auto auto", gap: 1.5 }}>
        {/* First image spans full width */}
        <Box
          component="img"
          src={images[0].src}
          alt={images[0].alt}
          sx={{
            gridColumn: "1 / -1",
            width: "100%",
            borderRadius: 2,
            border: "1px solid",
            borderColor: "divider",
            boxShadow: "0 4px 16px rgba(87,42,249,0.1)",
            objectFit: "cover",
            aspectRatio: "16/7",
            display: "block",
          }}
        />
        {/* Second and third images side by side */}
        {images.slice(1).map((img) => (
          <Box
            key={img.src}
            component="img"
            src={img.src}
            alt={img.alt}
            sx={{
              width: "100%",
              borderRadius: 2,
              border: "1px solid",
              borderColor: "divider",
              boxShadow: "0 4px 16px rgba(87,42,249,0.08)",
              objectFit: "cover",
              aspectRatio: "16/9",
              display: "block",
            }}
          />
        ))}
      </Box>
    );
  }

  return null;
}

function Experience() {
  return (
    <AnimatedPage>
      <Box sx={{ position: "relative" }}>
      <Container maxWidth="lg" className="py-12 md:py-16">
        <Reveal variant="up">
          <SectionTitle eyebrow="Experience" title="Frontend delivery in production environments">
            A compact track record of building dashboards, improving rendering
            performance, and collaborating in Agile engineering teams.
          </SectionTitle>
        </Reveal>

        <Stack spacing={4}>
          {experience.map((item, itemIndex) => (
            <Reveal key={item.role} variant={itemIndex % 2 === 0 ? "left" : "right"} delay={itemIndex * 0.1}>
            <Paper
              elevation={0}
              className="timeline-card"
              sx={{ border: "1px solid", borderColor: "divider", overflow: "hidden", borderRadius: 3 }}
            >
              {/* Role header */}
              <Box sx={{
                px: { xs: 3, md: 4 }, py: 2.5,
                borderBottom: "1px solid", borderColor: "divider",
                display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap",
                background: "linear-gradient(135deg, #f5f3ff 0%, #faf9ff 100%)",
              }}>
                <Box sx={{ width: 44, height: 44, borderRadius: 2, bgcolor: PRIMARY, display: "grid", placeItems: "center", color: "#fff", flexShrink: 0 }}>
                  <BusinessIcon fontSize="small" />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography sx={{ fontWeight: 800, fontSize: "1rem", color: PRIMARY }}>
                    {item.role}
                  </Typography>
                  <Typography color="text.secondary" sx={{ fontSize: "0.8rem" }}>
                    {item.company}
                  </Typography>
                </Box>
                <Chip
                  label={item.period}
                  size="small"
                  sx={item.current
                    ? { bgcolor: PRIMARY, color: "#fff", fontWeight: 700, fontSize: "0.75rem" }
                    : { fontWeight: 600, fontSize: "0.75rem" }
                  }
                />
              </Box>

              {/* Sections with collage (Software Developer) */}
              {item.sections ? (
                <Stack>
                  {item.sections.map((section, si) => (
                    <Box
                      key={section.heading}
                      sx={{
                        p: { xs: 3, md: 4 },
                        borderTop: si > 0 ? "1px solid" : "none",
                        borderColor: "divider",
                      }}
                    >
                      {/* Section heading */}
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
                        <Box sx={{ width: 4, height: 22, borderRadius: 4, bgcolor: PRIMARY }} />
                        <Typography sx={{ fontWeight: 800, fontSize: "0.95rem", color: PRIMARY }}>
                          {section.heading}
                        </Typography>
                      </Box>

                      {/* Content: bullets left, collage right — alternating per section */}
                      <Box sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: si % 2 === 0 ? "row" : "row-reverse" },
                        gap: 4,
                        alignItems: "flex-start",
                      }}>
                        {/* Bullet points */}
                        <Reveal
                          variant={si % 2 === 0 ? "left" : "right"}
                          className="w-full min-w-0 md:flex-1"
                        >
                          <Stack spacing={1.5}>
                            {section.points.map((point) => (
                              <Box key={point} sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
                                <Box component="span" sx={{
                                  mt: "9px", width: 7, height: 7, borderRadius: "50%",
                                  bgcolor: "#f3b43f", flexShrink: 0,
                                }} />
                                <Typography color="text.secondary" sx={{ fontSize: "0.875rem", lineHeight: 1.8 }}>
                                  {point}
                                </Typography>
                              </Box>
                            ))}
                          </Stack>
                        </Reveal>

                        {/* Image collage */}
                        <Reveal
                          variant={si % 2 === 0 ? "right" : "left"}
                          delay={0.15}
                          className="w-full shrink-0 md:w-[52%]"
                        >
                          <ImageCollage images={section.images} />
                        </Reveal>
                      </Box>
                    </Box>
                  ))}
                </Stack>
              ) : (
                /* Intern — simple bullets */
                <Box sx={{ p: { xs: 3, md: 4 } }}>
                  <Stack spacing={1.5}>
                    {item.highlights.map((highlight) => (
                      <Box key={highlight} sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
                        <Box component="span" sx={{
                          mt: "9px", width: 7, height: 7, borderRadius: "50%",
                          bgcolor: "#f3b43f", flexShrink: 0,
                        }} />
                        <Typography color="text.secondary" sx={{ fontSize: "0.875rem", lineHeight: 1.8 }}>
                          {highlight}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              )}
            </Paper>
            </Reveal>
          ))}
        </Stack>
      </Container>
      </Box>
    </AnimatedPage>
  );
}

export default Experience;
