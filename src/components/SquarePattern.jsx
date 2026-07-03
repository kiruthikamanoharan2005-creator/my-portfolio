function SquarePattern({ size = 90, opacity = 0.55, rotate = 0, style = {} }) {
  const gap = size * 0.28;
  const total = size + gap;
  return (
    <div
      style={{
        display: "inline-block",
        transform: `rotate(${rotate}deg)`,
        lineHeight: 0,
        pointerEvents: "none",
        ...style,
      }}
    >
      <svg
        width={total}
        height={total}
        viewBox={`0 0 ${total} ${total}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Square A — top-right */}
        <rect
          x={gap}
          y={0}
          width={size}
          height={size}
          stroke="#572af9"
          strokeWidth="2.5"
          opacity={opacity}
        />
        {/* Square B — bottom-left, offset to interlock */}
        <rect
          x={0}
          y={gap}
          width={size}
          height={size}
          stroke="#3a1db5"
          strokeWidth="2.5"
          opacity={opacity * 0.75}
        />
      </svg>
    </div>
  );
}

export default SquarePattern;
