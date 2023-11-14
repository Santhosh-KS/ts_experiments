export default function RingNebulaFilter() {
  const sm = "reflect"
  return (
    <defs>
      <radialGradient id="radialGradient">
        <stop stopColor="#259"/>
        <stop offset="25%" stopColor="#7cc" spreadMethod={sm}/>
        <stop offset="42%" stopColor="#c51" spreadMethod={sm}/>
        <stop offset="50%" spreadMethod={sm}/>
      </radialGradient>
      <filter id="nebulaFilter">
        <feTurbulence baseFrequency="100" seed="10"/>
        <feColorMatrix values="0 0 0 9 -5
                               0 0 0 9 -5
                               0 0 0 9 -5
                               0 0 0 0  1" result="cm"/>
        <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="5" seed="10" />
         <feDisplacementMap in="SourceGraphic" scale="10"/>
        <feBlend  mode="color-dodge"/>
      </filter>
    </defs>
  )
}
        // <!-- possible feBlend modes https://developer.mozilla.org/en-US/docs/Web/CSS/blend-mode#overlay -->
