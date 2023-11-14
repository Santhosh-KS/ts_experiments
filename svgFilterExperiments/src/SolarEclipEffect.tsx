import SolarEclipseFilter from "./SolarEclipseFilter"

export default function SolarEclipseEffect() {
  return (
  <svg width="100%" height="100%" viewBox="0 0 500 300">
       <SolarEclipseFilter/>
      <rect width="100%" height="100%"
      filter="url(#solarEclipseFilter)"/> 
      <circle cx="50%" cy="50%" r="20%"/>
  </svg>
  )
}


      /* <filter id="blur">
        <feGaussianBlur stdDeviation="2"/>
      </filter>
      <rect width="100%" height="100%"/>
      <circle cx="50%" cy="50%" r="21%" fill="white" filter="url(#blur)"/> */
