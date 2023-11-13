import StarFilter from "./StarFilter"

export default function SvgFilter() {

  return (
  <svg width="100%" height="100%">
      <StarFilter/>
      <rect width="100%" height="100%" filter="url(#starFilter)"/>
  </svg>
  );

}
