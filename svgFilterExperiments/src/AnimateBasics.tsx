export default function RotatingRect() {
  return (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'>
         <rect transform='rotate(0)' transform-origin='center' fill='#808' width='100' height='100' x='50' y='50'>
            <animateTransform 
               attributeName='transform'
               type='rotate'
               from='0'
               to='360'
               dur='2'
               repeatCount='indefinite'>
            </animateTransform>
         </rect>
      </svg>
      )
}
