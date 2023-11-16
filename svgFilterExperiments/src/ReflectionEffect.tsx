export default function ReflectionEffect() {
// style="background:linear-gradient(#135,#fbc,#135)"
  return (
    <>
    <svg width="100%" height="100%" viewBox="0 0 300 200" >
        <filter id="filter">
            <feTurbulence type="fractalNoise" baseFrequency=".005 0" numOctaves="10"></feTurbulence>
            <feDisplacementMap in="SourceAlpha" scale="99"></feDisplacementMap>
            <feColorMatrix values="0 0 0 0 .01
                                   0 0 0 0 .02
                                   0 0 0 0 .02
                                   0 0 0 -1 1"></feColorMatrix>
        </filter>
        <use href="#e" y="-100%" transform="scale(1 -1)" filter="blur(3px)"></use>
        <ellipse id="e" cx="50%" rx="63%" ry="43%" filter="url(#filter)"></ellipse>
    </svg>
    </>
  )
}
