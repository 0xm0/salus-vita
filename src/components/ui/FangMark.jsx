export default function FangMark({ size = 28, strokeColor = "#15324A", dotColor = "#176E79", className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" className={className}>
      <g transform="translate(24, 22)">
        <path d="M -10,-16 C -10,-16 -12,0 -4,10 C 0,15 6,16 6,16" fill="none" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M 10,-16 C 10,-16 12,0 4,10 C 0,15 -6,16 -6,16" fill="none" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="0" cy="20" r="1.5" fill={dotColor}/>
      </g>
    </svg>
  )
}
