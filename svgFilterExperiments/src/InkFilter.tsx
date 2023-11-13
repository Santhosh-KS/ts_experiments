export default function InkFilter() {
  return (

<filter id="inkFilter">
        <feTurbulence baseFrequency="0.01" numOctaves="200"/>
        <feColorMatrix values=" 0.5 0 0 0.2 -0.5 
                                0 0.3 0 2 -0.2
                                0 0 1 5 -0.3
                                0 0 0 0 1"/>
      </filter>
  )
}
