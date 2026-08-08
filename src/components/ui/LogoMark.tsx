export default function LogoMark({
  size = 72,
  className = '',
}: {
  size?: number
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="The CEE Company"
    >
      {/* Outer thick ring */}
      <circle cx="250" cy="250" r="228" fill="none" stroke="white" strokeWidth="44" />
      {/* Inner thin ring */}
      <circle cx="250" cy="250" r="192" fill="none" stroke="white" strokeWidth="7" />
      {/* Side ear tabs */}
      <rect x="4" y="207" width="20" height="86" fill="white" />
      <rect x="476" y="207" width="20" height="86" fill="white" />
      {/* Banner fill */}
      <rect x="20" y="207" width="460" height="86" fill="white" />
      {/* Banner inner cutout — matches site dark background */}
      <rect x="29" y="215" width="442" height="70" fill="#0A0A0B" />
      {/* Text */}
      <text
        x="250"
        y="252"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Arial Black, Arial, sans-serif"
        fontSize="36"
        fontWeight="900"
        letterSpacing="5"
        fill="white"
      >
        THE CEE COMPANY
      </text>
    </svg>
  )
}
