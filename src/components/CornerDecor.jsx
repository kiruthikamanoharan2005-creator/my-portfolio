function CornerDecor({ corner = "tl" }) {
  const c = "#3318c4";
  const sw = 1.5;

  const svgs = {
    tl: (
      <svg width="240" height="240" viewBox="0 0 240 240" fill="none"
        xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
        {/* lavender blob */}
        <rect x="-50" y="-50" width="210" height="210" rx="36"
          fill="#c8bfff" opacity="0.28" />
        {/* rect behind (offset upper-left) */}
        <rect x="-14" y="-2" width="132" height="132" rx="17"
          stroke={c} strokeWidth={sw} fill="none" opacity="0.38" />
        {/* rect front — coloured fill */}
        <rect x="8" y="10" width="132" height="132" rx="17"
          stroke={c} strokeWidth={sw} fill="#572af9" fillOpacity="0.18" opacity="0.7" />
        {/* diagonal line 1 — bottom-left to top-right */}
        <line x1="-16" y1="68" x2="96" y2="-14"
          stroke={c} strokeWidth="1" opacity="0.22" />
        {/* diagonal line 2 — top-left to bottom-right */}
        <line x1="26" y1="-12" x2="158" y2="120"
          stroke={c} strokeWidth="1" opacity="0.18" />
        {/* hollow circle */}
        <circle cx="22" cy="100" r="6"
          stroke={c} strokeWidth={sw} fill="none" opacity="0.6" />
        {/* dot grid — lower portion */}
        {[0,1,2,3,4,5,6].map(row =>
          [0,1,2,3,4,5].map(col => (
            <circle key={`${row}-${col}`}
              cx={2 + col * 12} cy={154 + row * 12}
              r="1.6" fill={c} opacity="0.28" />
          ))
        )}
      </svg>
    ),

    tr: (
      <svg width="240" height="240" viewBox="0 0 240 240" fill="none"
        xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
        {/* diamond */}
        <rect x="176" y="14" width="28" height="28" rx="3"
          transform="rotate(45 190 28)"
          stroke={c} strokeWidth={sw} fill="none" opacity="0.72" />
        {/* tilted rounded rect 1 — coloured fill */}
        <rect x="108" y="-32" width="120" height="78" rx="16"
          transform="rotate(18 168 7)"
          stroke={c} strokeWidth={sw} fill="#572AF9" fillOpacity="0.18" opacity="0.7" />
        {/* tilted rounded rect 2 — smaller, behind */}
        <rect x="124" y="-16" width="100" height="62" rx="13"
          transform="rotate(18 174 15)"
          stroke={c} strokeWidth={sw} fill="none" opacity="0.3" />
        {/* thin diagonal line */}
        <line x1="90" y1="6" x2="176" y2="78"
          stroke={c} strokeWidth="1" opacity="0.18" />
        {/* filled dot */}
        <circle cx="172" cy="94" r="4" fill={c} opacity="0.78" />
        {/* accent square — top-right */}
        <rect x="140" y="-20" width="100" height="100" rx="8"
          stroke={c} strokeWidth={sw} fill="none" opacity="0.5" />
      </svg>
    ),

    bl: (
      <svg width="240" height="240" viewBox="0 0 240 240" fill="none"
        xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
        {/* dot grid — upper portion */}
        {[0,1,2,3,4,5].map(row =>
          [0,1,2,3,4,5].map(col => (
            <circle key={`${row}-${col}`}
              cx={2 + col * 12} cy={2 + row * 12}
              r="1.6" fill={c} opacity="0.28" />
          ))
        )}
        {/* filled dot */}
        <circle cx="50" cy="128" r="5" fill={c} opacity="0.82" />
        {/* diagonal line from dot toward bottom-right */}
        <line x1="50" y1="128" x2="116" y2="200"
          stroke={c} strokeWidth={sw} opacity="0.32" />
        {/* large rounded rect — coloured fill */}
        <rect x="-48" y="112" width="162" height="162" rx="24"
          stroke={c} strokeWidth={sw} fill="#572AF9" fillOpacity="0.2" opacity="0.7" />
        {/* accent square — bottom-left */}
        <rect x="-30" y="130" width="100" height="100" rx="8"
          stroke={c} strokeWidth={sw} fill="none" opacity="0.5" />
      </svg>
    ),

    br: (
      <svg width="240" height="240" viewBox="0 0 240 240" fill="none"
        xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
        {/* lavender blob */}
        <rect x="58" y="58" width="222" height="222" rx="36"
          fill="#c8bfff" opacity="0.28" />
        {/* rounded rect 1 — coloured fill */}
        <rect x="55" y="52" width="165" height="165" rx="20"
          stroke={c} strokeWidth={sw} fill="#572AF9" fillOpacity="0.18" opacity="0.7" />
        {/* rounded rect 2 — offset down-right */}
        <rect x="76" y="74" width="165" height="165" rx="20"
          stroke={c} strokeWidth={sw} fill="none" opacity="0.36" />
        {/* hollow circle */}
        <circle cx="116" cy="116" r="6"
          stroke={c} strokeWidth={sw} fill="none" opacity="0.6" />
        {/* diamond */}
        <rect x="26" y="148" width="24" height="24" rx="2"
          transform="rotate(45 38 160)"
          stroke={c} strokeWidth={sw} fill="none" opacity="0.68" />
        {/* thin diagonal accent */}
        <line x1="60" y1="110" x2="120" y2="58"
          stroke={c} strokeWidth="1" opacity="0.18" />
      </svg>
    ),
  };

  const pos = {
    tl: { top: 0, left: 0 },
    tr: { top: 0, right: 0 },
    bl: { bottom: 0, left: 0 },
    br: { bottom: 0, right: 0 },
  };

  return (
    <div style={{
      position: "fixed",
      pointerEvents: "none",
      zIndex: 0,
      width: 240,
      height: 240,
      overflow: "hidden",
      ...pos[corner],
    }}>
      {svgs[corner]}
    </div>
  );
}

export default CornerDecor;
