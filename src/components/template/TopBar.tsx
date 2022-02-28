import useAppData from "../../data/hook/useAppData"
import AlterThemeButton from "./AlterThemeButton"
import Title from "./Title"

interface TopBarProps {
  title: string
  subtitle: string
}

export default function TopBar(props: TopBarProps) {
  const { theme, alterTheme } = useAppData();

  return (
    <div className={`flex`}>
      <Title title={props.title} subtitle={props.subtitle}/>
      <div className={`flex flex-grow justify-end`}>

      </div>
      <AlterThemeButton theme={theme} alterTheme={alterTheme}/>
    </div>
  )
}