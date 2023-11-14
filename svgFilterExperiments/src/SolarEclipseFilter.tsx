export default function() {
  return (
      <filter id="solarEclipseFilter" primitiveUnits="objectBoundingBox">
        <feTurbulence  type="fractalNoise" baseFrequency="0.01"/>
        <feSpecularLighting specularExponent="128" specularConstant="99" surfaceScale="2">
          <fePointLight x=".50" y=".50" z=".25"/>
        </feSpecularLighting>
        <feBlend in2="SourceGraphic"/>
      </filter>
  )
}
