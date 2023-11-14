export default function DarkWaterEffect() {
  return (
  <svg width="100%" height="100%" viewBox="0 0 300 200">
      <filter id="darkWaterColor">
        <feTurbulence baseFrequency="0.01" seed="12" numOctaves="5"/>
        <feDisplacementMap yChannelSelector="G" scale="90" />
        <feBlend type="multiply"/>
      </filter>
      <rect x="-10%" y="-10%" width="120%" height="120%" 
      filter="url(#darkWaterColor)"/>
  </svg>
  )
}

        /* <feColorMatrix values=" 1 0 0 0 0 
                                0 1 0 0 0
                                0 0 1 0 0
                                0 0 0 0 1"/> */
