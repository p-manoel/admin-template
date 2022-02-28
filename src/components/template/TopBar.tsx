import Title from "./Title"

interface TopBarProps {
  title: string
  subtitle: string
}

export default function TopBar(props: TopBarProps) {
  return (
    <div>
      <Title title={props.title} subtitle={props.subtitle}/>
    </div>
  )
}