import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

const variantsMap = {
  up: {
    hidden: { opacity: 0, y: 46 },
    show: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -40 },
    show: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -56 },
    show: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 56 },
    show: { opacity: 1, x: 0 },
  },
  zoom: {
    hidden: { opacity: 0, scale: 0.82 },
    show: { opacity: 1, scale: 1 },
  },
  pop: {
    hidden: { opacity: 0, scale: 0.6 },
    show: { opacity: 1, scale: 1 },
  },
  flip: {
    hidden: { opacity: 0, rotateX: -70 },
    show: { opacity: 1, rotateX: 0 },
  },
  tilt: {
    hidden: { opacity: 0, rotate: -6, y: 30, scale: 0.94 },
    show: { opacity: 1, rotate: 0, y: 0, scale: 1 },
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
    show: { opacity: 1, filter: "blur(0px)", y: 0 },
  },
};

const transitionMap = {
  pop: { type: "spring", stiffness: 260, damping: 18 },
  tilt: { type: "spring", stiffness: 210, damping: 16 },
};

function Reveal({
  children,
  variant = "up",
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.25,
  className,
  style,
}) {
  const variants = variantsMap[variant] || variantsMap.up;
  const baseTransition = transitionMap[variant] || { duration, ease: EASE };

  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={variants}
      transition={{ ...baseTransition, delay }}
    >
      {children}
    </motion.div>
  );
}

export function RevealGroup({
  children,
  stagger = 0.12,
  delayChildren = 0,
  once = true,
  amount = 0.2,
  className,
  style,
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, variant = "up", duration = 0.6, className, style }) {
  const variants = variantsMap[variant] || variantsMap.up;
  const baseTransition = transitionMap[variant] || { duration, ease: EASE };

  return (
    <motion.div className={className} style={style} variants={variants} transition={baseTransition}>
      {children}
    </motion.div>
  );
}

export default Reveal;
