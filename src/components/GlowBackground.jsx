// Dark glowing background — soft blurred colour blobs, flowing light-trail
// curves and sparkles. Only visible in dark mode; sits behind all content.
function GlowBackground() {
  return (
    <div className="glow-bg corner-decor" aria-hidden>
      {/* soft blurred colour blobs */}
      <span className="glow-blob glow-blob-1" />
      <span className="glow-blob glow-blob-2" />
      <span className="glow-blob glow-blob-3" />
      <span className="glow-blob glow-blob-4" />

      {/* sparkles */}
      <span className="glow-spark glow-spark-1" />
      <span className="glow-spark glow-spark-2" />
      <span className="glow-spark glow-spark-3" />
      <span className="glow-spark glow-spark-4" />

      {/* flowing light-trail curves */}
      <svg
        className="glow-lines"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMax slice"
        fill="none"
      >
        <defs>
          <linearGradient id="glowLineA" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0" />
            <stop offset="35%" stopColor="#6366f1" />
            <stop offset="70%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#a3e635" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="glowLineB" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#a3e635" stopOpacity="0" />
            <stop offset="45%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <path
          className="glow-line glow-line-1"
          d="M-50 760 C 320 640, 520 880, 820 720 S 1280 560, 1520 700"
          stroke="url(#glowLineA)"
        />
        <path
          className="glow-line glow-line-2"
          d="M-50 820 C 300 720, 560 900, 880 780 S 1300 660, 1520 760"
          stroke="url(#glowLineB)"
        />
      </svg>
    </div>
  );
}

export default GlowBackground;
