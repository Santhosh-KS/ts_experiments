interface TextProps {
  text:string
}

export default function SvgClipPath({text}:TextProps) {
return (
  <clipPath id="svgTextPath">
    <text x="0" y="150" fontFamily='Vollkorn' fontSize={"180"}  > {text}</text>
    </clipPath>
  )
}
