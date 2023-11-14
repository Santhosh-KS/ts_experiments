import ChalkFilter from "./ChalkFilter";

export default function ChalkEffect() {
  return (
  <svg width="100%" height="100%" viewBox="0 0 500 200" >
   <ChalkFilter/>
    <rect width="100%" height="100%" fill="black" />
    <text x="0" y="150" fontFamily='Vollkorn' fontSize={"120"}  filter="url(#chalkFilter)" fill="#f210aa"> Sweta!</text>
  </svg>
  );
}
