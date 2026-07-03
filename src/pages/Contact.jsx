import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";
import Swal from "sweetalert2";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AnimatedPage from "../components/AnimatedPage.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { profile } from "../data/profile.js";

const contactItems = [
  { icon: <EmailIcon />, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: <PhoneIcon />, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replaceAll(" ", "")}` },
  { icon: <LocationOnIcon />, label: "Location", value: profile.location },
  { icon: <LinkedInIcon />, label: "LinkedIn", value: "linkedin.com/in/kiruthika-m", href: profile.linkedin },
  { icon: <GitHubIcon />, label: "GitHub", value: "github.com/kiruthikamanoharan2005-creator", href: profile.github },
];

// High to medium opacity
const opacities = [1, 0.88, 0.76, 0.64, 0.52];

// Scattered collage positions (top, left, width, height, rotate)
const collagePos = [
  { top: "2%",  left: "1%",   width: "38%", height: 150, rotate: "-1deg"  }, // Email
  { top: "0%",  left: "43%",  width: "28%", height: 130, rotate: "1.5deg" }, // Phone
  { top: "32%", left: "23%",  width: "42%", height: 155, rotate: "-0.8deg"}, // Location (center)
  { top: "55%", left: "2%",   width: "34%", height: 140, rotate: "1deg"   }, // LinkedIn
  { top: "50%", left: "55%",  width: "40%", height: 135, rotate: "-1.2deg"}, // GitHub
];

function Contact() {
  return (
    <AnimatedPage>
      <Box sx={{ position: "relative" }}>
      <Container maxWidth={false} className="py-12 md:py-16">
        <SectionTitle eyebrow="Contact" title="Let us build the next interface">
          Kiruthika is open to frontend engineering opportunities where React,
          performance, and user-friendly dashboards matter.
        </SectionTitle>

        {/* Scattered collage contact cards */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 8 }}>
        <Box sx={{ position: "relative", height: { xs: 520, md: 420 }, width: "100%", maxWidth: 1100 }}>
          {contactItems.map((item, i) => {
            const pos = collagePos[i];
            return (
              <Box
                key={item.label}
                {...(item.href ? {
                  component: "a",
                  href: item.href,
                  target: item.href.startsWith("http") ? "_blank" : undefined,
                  rel: item.href.startsWith("http") ? "noreferrer" : undefined,
                } : {})}
                sx={{
                  position: "absolute",
                  top: pos.top,
                  left: pos.left,
                  width: pos.width,
                  height: pos.height,
                  bgcolor: `rgba(87, 42, 249, ${opacities[i]})`,
                  border: "5px solid #fff",
                  borderRadius: 2,
                  boxShadow: "0 8px 28px rgba(0,0,0,0.18)",
                  transform: `rotate(${pos.rotate})`,
                  transition: "transform 220ms ease, box-shadow 220ms ease",
                  p: 2.5,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textAlign: "center",
                  textDecoration: "none",
                  cursor: item.href ? "pointer" : "default",
                  zIndex: i === 2 ? 3 : i < 2 ? 1 : 2,
                  "&:hover": {
                    transform: `rotate(0deg) translateY(-6px)`,
                    boxShadow: "0 16px 40px rgba(87,42,249,0.35)",
                    zIndex: 10,
                  },
                }}
              >
                {/* Icon */}
                <Box sx={{
                  width: 44, height: 44, borderRadius: 2,
                  bgcolor: "rgba(255,255,255,0.2)",
                  display: "grid", placeItems: "center", color: "#fff",
                }}>
                  {item.icon}
                </Box>

                {/* Label + Value */}
                <Box>
                  <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", mb: 0.5 }}>
                    {item.label}
                  </Typography>
                  <Typography sx={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem", wordBreak: "break-all" }}>
                    {item.value}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
        </Box>

        {/* Quick message form */}
        <Paper
          elevation={0}
          sx={{ border: "1px solid", borderColor: "divider", width: "100%", p: { xs: 3, md: 5 } }}
        >
          <Typography variant="h5" textAlign="center">Quick message</Typography>
          <Typography color="text.secondary" className="mt-2" textAlign="center">
            This form opens your email client with the message details.
          </Typography>

          <Box
            component="form"
            sx={{ mt: 4, display: "flex", flexDirection: "column", gap: 3 }}
            onSubmit={(event) => {
              event.preventDefault();
              const form = event.currentTarget;
              const formData = new FormData(form);
              const subject = encodeURIComponent(`Portfolio inquiry from ${formData.get("name")}`);
              const body = encodeURIComponent(
                `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\n${formData.get("message")}`,
              );
              window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
              form.reset();
              Swal.fire({
                icon: "success",
                title: "Message Sent!",
                text: "Your email client has been opened. Thank you for reaching out!",
                confirmButtonColor: "#572af9",
                confirmButtonText: "Done",
                timer: 4000,
                timerProgressBar: true,
              });
            }}
          >
            {/* Name + Email centered on one line */}
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
              <TextField label="Name" name="name" required sx={{ flex: "1 1 240px", maxWidth: 340 }} />
              <TextField label="Email" name="email" type="email" required sx={{ flex: "1 1 240px", maxWidth: 340 }} />
            </Box>

            {/* Message full width */}
            <TextField label="Message" name="message" required fullWidth multiline minRows={5} />

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button type="submit" variant="contained" size="large" startIcon={<SendIcon />}>
                Send Message
              </Button>
            </Box>
          </Box>
        </Paper>

      </Container>
      </Box>
    </AnimatedPage>
  );
}

export default Contact;
