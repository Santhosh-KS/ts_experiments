// https://www.w3.org/TR/2001/REC-smil-animation-20010904/#Introduction
export default function RotatingRect() {

  const timeslots = [-0.4, -0.2, 0]
  const animatingCircle = timeslots.map((time) => (
      <circle fill="#FF156D" stroke="#FF156D" strokeWidth="15" r="15" cx="40" cy="65">
    <animate attributeName="cx" 
        calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin={time}/>
    </circle>))
      // {animatingCircle}
  return (
      <svg viewBox='0 0 200 200'>
        <path id="path40042" d="M4071.863 2630.96a6.004 6.004 0 0 1 1.943-3.973 6.004 6.004 0 0 1 4.151-1.526 5.988 5.988 0 0 1 3.664 1.406" stroke="black" strokeWidth="10"/>
      <rect width="10%" height="10%" >
        <animate attributeName="x" dur="10s" values="0; 10; 100"  calcMode="linear" fill="freeze"/>
      </rect>
      <rect y="21" width="10%" height="10%" fill="red" >
        <animate attributeName="x" dur="10s" values="0; 10; 100"  calcMode="paced" fill="freeze"/>
      </rect>
      <rect y="42" width="10%" height="10%" fill="yellow" zoomAndPan="200%" >
        <animate attributeName="x" dur="10s" values="0; 10; 100"  calcMode="linear"
        keyTimes="0;0.8;1" fill="freeze" />
      </rect>
      <rect y="63" width="10%" height="10%" fill="green" >
        <animate attributeName="x" dur="10s" values="0; 10; 100"  calcMode="spline"
        keyTimes="0;0.8;1" keySplines=".5 0 .5 1; 0.75 0.25 1 1" fill="freeze"/>
      </rect>
      <rect y="84" width="10%" height="10%" fill="violet" >
        <animate attributeName="x" dur="10s" values="10; 40; 100"  calcMode="spline"
        keyTimes="0;0.8;1" keySplines="0 0 1 1; 0 0 1 1" fill="freeze"/>

        <animate attributeName="rx" dur="10s" values="0;10" fill="freeze"/>
        <animate attributeName="fill" dur="10s" from="red" to="magenta" repeatCount="2" fill="freeze"/>

      </rect>
      <rect y="101" width="10%" height="10%" >
         <animate id="pulse" attributeName="width" dur="5s"
            values="0; 15; 10" additive="sum"
            accumulate="sum" repeatCount="3" begin="0" end="next.click"/>
        <animate attributeName="rx" begin="pulse.end" dur="10s" values="0;10" fill="freeze"/>
        <animate attributeName="fill" begin="pulse.end" dur="5s" from="gray" to="green" fill="freeze"/>
      </rect>
        <animate attributeName="stroke" dur="10s" from="green" to="magenta" fill="freeze"/>
      <rect y="122" width="10%" height="10%" fill="none" stroke="green" >
        <animate attributeName="rx" dur="10s" values="0;10" fill="freeze"/>
        <animate attributeName="stroke-width" dur="10s" values="0;10;2" fill="freeze"/>
      </rect>
     <circle fill="none" stroke="blue" strokeOpacity="0.1" stroke-width="4" cx="50" cy="50" r="44" />
  <circle fill="blue" stroke="blue" opacity="0.8" cx="8" cy="54" r="6" >
    <animateTransform
      attributeName="transform"
      dur="2s"
      type="rotate"
      from="0 50 48"
      to="360 50 52"
      repeatCount="indefinite" />
    
  </circle>

      </svg>
      )
}


      /* <line x1="10" y1="30" x2="30" y2="20" stroke="black" strokeWidth="10">
      <animate attributeName="stroke-linecap" from="square" to="round" dur="10s" fill="freeze"/>
      </line> */
      /* <rect width="20%" height="20%" >
        <animate attributeName="x" dur="10s" values="0; 50; 100" keyTimes="0; 0.8; 1"
     calcMode="spline" keySplines=".5 0 .5 1; 0 0 1 1"/>
      </rect> */
