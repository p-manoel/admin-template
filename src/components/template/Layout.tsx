import Content from "./Content"
import SideBar from "./SideBar"
import TopBar from "./TopBar"

interface LayoutProps {
  title: string
  subtitle: string
  children?: any
}

export default function Layout(props: LayoutProps) {
  return (
    <div>
      <SideBar />
      <TopBar title={props.title} subtitle={props.subtitle} />
      <Content>
        {props.children}
      </Content>
    </div>
  )
}