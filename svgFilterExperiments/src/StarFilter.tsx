export default function StarFilter() {
  return (
      <filter id="starFilter">
        <feTurbulence baseFrequency="0.8" seed="2"/>
        <feColorMatrix values=" 0.5 0 0 9 -5 
                                0 0.3 0 9 -5
                                0 0 1 9 -5 
                                0 0 0 0 1"/>
      </filter>
  )
}
