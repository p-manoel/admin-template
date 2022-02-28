import { IconMoon, IconSun } from "../icons"

interface AlterThemeButtonProps {
  theme: string
  alterTheme: () => void
}

export default function AlterThemeButton(props: AlterThemeButtonProps) {
  return props.theme === 'dark' ? (
    <div onClick={props.alterTheme} className={`
      hidden sm:flex items-center
      bg-gradient-to-r from-yellow-300 to-yellow-600
      h-8 w-14 lg:w-16
      p-1
      rounded-full
      cursor-pointer
    `}>
      <div className={`
        flex
        items-center justify-center
        bg-white text-yellow-600
        h-h w-6
        rounded-full
      `}>
        {IconSun(4)}
      </div>
    </div>
  ) : (
    <div onClick={props.alterTheme} className={`
      hidden sm:flex items-center justify-end
      bg-gradient-to-r from-gray-500 to-gray-900
      h-8 w-14 lg:w-16
      p-1
      rounded-full
      cursor-pointer
    `}>
      <div className={`
        flex
        items-center justify-center
        bg-black text-gray-200
        h-h w-6
        rounded-full
      `}>
        {IconMoon(4)}
      </div>
    </div>
  )
}