interface TextProps {
  text:string
}

export default function SvgClipPath({text}:TextProps) {
return (
  <clipPath id="svgTextPath">
    <text x="0" y="150" fontFamily='Vollkorn' fontSize={"120"}  > {text}</text>
    </clipPath>
  )
}
