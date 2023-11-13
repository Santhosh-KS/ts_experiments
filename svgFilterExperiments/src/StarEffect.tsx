import StarFilter from "./StarFilter";

export default function StarEffect() {
  return (
  <svg width="100%" height="100%" viewBox="0 0 500 200" >
    <StarFilter/>
    <rect width="100%" height="100%" filter="url(#starFilter)" />
  </svg>
  );
}

     //
