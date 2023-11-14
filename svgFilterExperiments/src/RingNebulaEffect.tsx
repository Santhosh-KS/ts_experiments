import RingNebulaFilter from "./RingNebulaFilter"

export default function RingNebula() {
  return (
  <svg width="100%" height="100%" viewBox="0 0 100 75">
   <RingNebulaFilter/>
    <circle cx="50%" cy="50%" r="70%" fill="url(#radialGradient)"  filter="url(#nebulaFilter)" />
  </svg>
  )
}
