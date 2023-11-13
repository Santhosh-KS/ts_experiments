interface FilterInput {
  input:string
}

export default function ChalkFilter() {
  return( 
    <filter id="chalkFilter" width="1" height="1" x="0" y="0" >
      <feTurbulence id="feTurbulence474" baseFrequency="10" result="result1"/>
      <feComposite id="feComposite478" in="SourceGraphic" in2="result1" operator="out" result="result2"/>
      <feDisplacementMap id="feDisplacementMap480" in2="result1" scale="5" xChannelSelector="A" yChannelSelector="A"/>
    </filter>
  )
}


/*
    <feTurbulence baseFrequency="70" numOctaves="1" seed={"0"} result="Turbulance"/>
    <feComposite operator="out" in="Turbulance" operator="out" result="Composit"/>
    <feDisplacementMap in="Turbulance" in2="Composit" scale="5"/> */

/*
    <filter id="chalkFilter"  >
      <feTurbulence  baseFrequency="70" result="result1"/>
      <feComposite  in="SourceGraphic" in2="result1" operator="over" result="result2"/>
      <feDisplacementMap  in2="result1" scale="20" xChannelSelector="A" yChannelSelector="A"/>
  </filter> */
