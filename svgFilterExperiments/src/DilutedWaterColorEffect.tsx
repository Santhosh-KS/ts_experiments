export default function DilutedWaterPaintEffect() {
  return (
  <svg width="100%" height="100%" viewBox="0 0 300 200">
      <filter id="dilutedWaterPaint">
        <feTurbulence baseFrequency="0.1 0.2" seed="12" />
        <feTurbulence baseFrequency="0.01" seed="12" numOctaves="5"/>
        <feDisplacementMap 
          yChannelSelector="R"
          xChannelSelector="B"
          scale="70" />
      </filter>
      <rect x="-10%" y="-10%" width="120%" height="120%" 
      filter="url(#dilutedWaterPaint)"/>
  </svg>
  )
}
