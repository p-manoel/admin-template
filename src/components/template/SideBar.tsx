import ItemBar from "./ItemBar";
import Logo from "./Logo";
import { IconHome, IconSettings, IconNotifications, IconLogout } from "../icons";

interface SideBarProps {

}

export default function SideBar(props: SideBarProps) {
  return (
    <aside className="flex flex-col">
      <div className={`
        flex flex-col
        items-center justify-center
        bg-gradient-to-r from-indigo-500 to-purple-800
        h-20 w-20
      `}>
        <Logo />
      </div>
      <ul className="flex-grow">
        <ItemBar url="/" text="Home" icon={IconHome}/>
        <ItemBar url="/settings" text="Settings" icon={IconSettings}/>
        <ItemBar url="/notifications" text="Notifications" icon={IconNotifications}/>
      </ul>
      <ul>
        <ItemBar 
          onClick={() => console.log('Log out!')}
          text="Log out" icon={IconLogout} 
          className={`
            text-red-600
            hover:bg-red-400 hover:text-white
          `}/>
      </ul>
    </aside>
  )  
}