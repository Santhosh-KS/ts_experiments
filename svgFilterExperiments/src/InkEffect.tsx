import SvgClipPath from "./SvgClipPath";
import InkFilter from "./InkFilter";

export default function InkEffect() {
  return (
  <svg width="100%" height="100%" viewBox="0 0 500 200" >
    <InkFilter/>
    <rect width="100%" height="100%" fill="black" />
    <SvgClipPath text="Ink Blob" />
    <rect width="100%" height="100%" filter="url(#inkFilter)" clipPath="url(#svgTextPath)" />
  </svg>
  );
}

