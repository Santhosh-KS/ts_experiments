export default function OilOnWaterEffect() {
  return (
  <svg width="100%" height="100%" viewBox="0 0 300 200">
      <filter id="oilOnWater">
        <feTurbulence baseFrequency="1 2" result="n" seed="12"/>
        <feTurbulence baseFrequency="0.01" seed="12" numOctaves="5"/>
        <feDisplacementMap in="n" yChannelSelector="G" scale="90" />
        <feColorMatrix values=" 1 0 0 0 0 
                                0 1 0 0 0
                                0 0 1 0 0
                                0 0 0 0 1"/>
      </filter>
      <rect x="-10%" y="-10%" width="120%" height="120%" 
      filter="url(#oilOnWater)"/>
  </svg>
  )
}
