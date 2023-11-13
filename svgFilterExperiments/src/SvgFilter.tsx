import StarFilter from "./StarFilter"

export default function SvgFilter() {

  return (
  <svg width="100%" height="100%" viewBox="0 0 500 100">
      <StarFilter/>
      <rect width="100%" height="100%" filter="url(#starFilter)"/>
      <StarFilter/>
      <rect x="10" y="10" width="30%" height="30%"  fill="red"/>
  </svg>
  );

}
