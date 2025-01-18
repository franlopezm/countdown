import { ReactNode } from "react"

interface NavbarItemProps {
  title: string
  icon?: ReactNode
}

const NavbarItem = (props: NavbarItemProps) => {
  const { title, icon } = props

  return (
    <div
      className="text-xl mr-1 px-2 cursor-pointer flex items-center hover:bg-slate-300 hover:rounded"
    >
      {
        icon && icon
      }
      {title}
    </div>
  )
}

export default NavbarItem
