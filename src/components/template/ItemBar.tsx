import Link from "next/link"

interface ItemBarProps {
  url?: string
  text: string
  icon: any
  className?: string
  onClick?: (event: any) => void
}

export default function ItemBar(props: ItemBarProps) {
  function renderLink() {
    return (
      <a className={`
        flex flex-col
        justify-center items-center
        h-20 w-20
        dark:text-gray-200
        ${props.className}
      `}>
        {props.icon}
        <span className={`
          text=xs font-light 
        `}>
          {props.text}
        </span>
      </a>
    )
  }

  return (
    <li onClick={props.onClick} className={`
      hover:bg-gray-100 dark:hover:bg-gray-800 
      cursor-pointer
    `}>
      {props.url ? (
        <Link href={props.url}>
          {renderLink()}
        </Link>
      ) : renderLink()}
      

    </li>
  )
}