import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { Box, Typography } from "@mui/material";

const SESSION_KEY = "portfolio_intro_shown";

const FLIGHT_DELAY = 1.1;
const FLIGHT_DURATION = 3.6;
const TOTAL_DURATION = (FLIGHT_DELAY + FLIGHT_DURATION) * 1000 + 150;

const flightTransition = {
  duration: FLIGHT_DURATION,
  delay: FLIGHT_DELAY,
  ease: [0.65, 0, 0.35, 1],
};

const TOTAL_ANIM = FLIGHT_DELAY + FLIGHT_DURATION;
const TEXT_FADE_IN = 0.8;
const TEXT_FADE_OUT = 2.6;

const textTransition = {
  duration: TOTAL_ANIM,
  ease: "easeInOut",
  times: [
    0,
    TEXT_FADE_IN / TOTAL_ANIM,
    FLIGHT_DELAY / TOTAL_ANIM,
    (FLIGHT_DELAY + TEXT_FADE_OUT) / TOTAL_ANIM,
    1,
  ],
};

const clouds = [
  { top: "14%", left: "8%", size: 130 },
  { top: "22%", left: "58%", size: 90 },
  { top: "55%", left: "16%", size: 150 },
  { top: "68%", left: "70%", size: 110 },
  { top: "8%", left: "78%", size: 80 },
  { top: "78%", left: "38%", size: 95 },
];

function IntroSplash() {
  const [visible, setVisible] = useState(
    () => typeof window !== "undefined" && !sessionStorage.getItem(SESSION_KEY)
  );

  useEffect(() => {
    if (!visible) return undefined;
    sessionStorage.setItem(SESSION_KEY, "1");
    const timer = setTimeout(() => setVisible(false), TOTAL_DURATION);
    return () => clearTimeout(timer);
  }, [visible]);

  if (!visible) return null;

  return (
    <Box sx={{ position: "fixed", inset: 0, zIndex: 2000, overflow: "hidden" }}>
      {/* Sky + clouds: masked so the rocket's flight tears this layer open,
          growing from the launch corner (bottom-left) to the exit corner (top-right). */}
      <motion.div
        initial={{
          WebkitMaskImage: "radial-gradient(circle at 0% 100%, transparent 0%, black 3%)",
          maskImage: "radial-gradient(circle at 0% 100%, transparent 0%, black 3%)",
        }}
        animate={{
          WebkitMaskImage: "radial-gradient(circle at 0% 100%, transparent 100%, black 100%)",
          maskImage: "radial-gradient(circle at 0% 100%, transparent 100%, black 100%)",
        }}
        transition={flightTransition}
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, #d9ecff 0%, #f3f9ff 55%, #ffffff 100%)",
        }}
      >
        {clouds.map((cloud, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 0.95, x: 20 }}
            transition={{ duration: FLIGHT_DELAY + FLIGHT_DURATION, ease: "linear" }}
            style={{
              position: "absolute",
              top: cloud.top,
              left: cloud.left,
              width: cloud.size,
              height: cloud.size * 0.42,
              borderRadius: 999,
              background: "#ffffff",
              boxShadow: "0 0 30px 12px rgba(255,255,255,0.85)",
              filter: "blur(0.5px)",
            }}
          />
        ))}
      </motion.div>

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 3,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: [0, 1, 1, 0, 0], y: [18, 0, 0, -12, -12] }}
          transition={textTransition}
          style={{ textAlign: "center" }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: "#1c1c1c",
              fontSize: { xs: "1.6rem", sm: "2.2rem", md: "2.8rem" },
            }}
          >
            Welcome to my portfolio
          </Typography>
        </motion.div>
      </Box>

      <motion.div
        initial={{ left: "-10%", top: "105%", opacity: 0 }}
        animate={{ left: "105%", top: "-15%", opacity: 1 }}
        transition={flightTransition}
        style={{ position: "absolute" }}
      >
        <RocketLaunchIcon sx={{ fontSize: { xs: 44, sm: 56, md: 64 }, color: "#572af9" }} />
      </motion.div>
    </Box>
  );
}

export default IntroSplash;
