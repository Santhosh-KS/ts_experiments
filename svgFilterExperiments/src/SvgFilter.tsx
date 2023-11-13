import StarFilter from "./StarFilter"
import SvgClipPath from "./SvgClipPath";

export default function SvgFilter() {

  return (
  <svg width="100%" height="100%" viewBox="0 0 500 200" >
    <StarFilter/>
    <SvgClipPath text="Smoke" />
    <rect width="100%" height="100%" filter="url(#starFilter)" clipPath="url(#svgTextPath)" />
  </svg>
  );
}

