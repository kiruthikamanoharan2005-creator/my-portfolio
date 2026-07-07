import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Box, Typography } from "@mui/material";

const SESSION_KEY = "portfolio_intro_shown";

const HOLD_DURATION = 2.4;
const EXIT_DURATION = 0.7;
const TOTAL_DURATION = (HOLD_DURATION + EXIT_DURATION) * 1000 + 100;

const accentShapes = [
  { top: "14%", left: "10%", size: 46, color: "#ef4b3a", rotate: -20, shape: "pill" },
  { top: "10%", left: "66%", size: 28, color: "#4f8ff0", rotate: 0, shape: "circle" },
  { top: "34%", left: "86%", size: 40, color: "#ef4b3a", rotate: 30, shape: "pill" },
  { top: "60%", left: "6%", size: 32, color: "#a8d96b", rotate: 0, shape: "circle" },
  { top: "66%", left: "80%", size: 44, color: "#f4a13a", rotate: -35, shape: "pill" },
  { top: "42%", left: "3%", size: 24, color: "#f4a13a", rotate: 0, shape: "circle" },
  { top: "20%", left: "40%", size: 22, color: "#a8d96b", rotate: 0, shape: "circle" },
];

const cloudShapes = [
  { left: "-2%", size: 200 },
  { left: "16%", size: 150 },
  { left: "32%", size: 230 },
  { left: "50%", size: 170 },
  { left: "66%", size: 220 },
  { left: "84%", size: 180 },
  { left: "100%", size: 200 },
];

function IntroSplash() {
  const [visible, setVisible] = useState(
    () => typeof window !== "undefined" && !sessionStorage.getItem(SESSION_KEY)
  );
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (!visible) return undefined;
    sessionStorage.setItem(SESSION_KEY, "1");
    const exitTimer = setTimeout(() => setExiting(true), HOLD_DURATION * 1000);
    const hideTimer = setTimeout(() => setVisible(false), TOTAL_DURATION);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, [visible]);

  if (!visible) return null;

  return createPortal(
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="intro-splash"
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: EXIT_DURATION, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 2000,
            overflow: "hidden",
            background:
              "radial-gradient(circle at 50% 32%, #4fe4dd 0%, #1fc7cf 45%, #0da7bb 100%)",
          }}
        >
          {accentShapes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.25 + index * 0.08, ease: "backOut" }}
              style={{
                position: "absolute",
                top: item.top,
                left: item.left,
                width: item.size,
                height: item.shape === "pill" ? item.size * 1.8 : item.size,
                borderRadius: item.shape === "pill" ? 999 : "50%",
                background: item.color,
                transform: `rotate(${item.rotate}deg)`,
                boxShadow: "0 8px 18px rgba(0,0,0,0.18)",
              }}
            />
          ))}

          <Box
            sx={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              px: 3,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              style={{ textAlign: "center" }}
            >
              <Typography
                sx={{
                  fontWeight: 800,
                  color: "#ffffff",
                  letterSpacing: "0.02em",
                  lineHeight: 1.05,
                  fontSize: { xs: "2.3rem", sm: "3.2rem", md: "4rem" },
                  textShadow:
                    "0 2px 0 rgba(0,0,0,0.1), 0 18px 30px rgba(0,60,60,0.35)",
                }}
              >
                Welcome
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  color: "#ffffff",
                  opacity: 0.94,
                  mt: 0.5,
                  fontSize: { xs: "1.05rem", sm: "1.3rem", md: "1.6rem" },
                }}
              >
                to my portfolio
              </Typography>
            </motion.div>
          </Box>

          <Box
            aria-hidden
            sx={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: "24%",
              minHeight: 90,
              pointerEvents: "none",
            }}
          >
            {cloudShapes.map((cloud, index) => (
              <Box
                key={index}
                sx={{
                  position: "absolute",
                  left: cloud.left,
                  top: 0,
                  width: cloud.size,
                  height: cloud.size,
                  borderRadius: "50%",
                  background: "#ffffff",
                  transform: "translate(-50%, 32%)",
                }}
              />
            ))}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                top: "50%",
                background: "#ffffff",
              }}
            />
          </Box>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

export default IntroSplash;
