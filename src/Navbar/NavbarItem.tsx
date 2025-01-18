import { ReactNode } from "react"
import { RouteLink } from "../Router/components"

interface NavbarItemProps {
  title: string
  to: string
  icon?: ReactNode
  isActive?: boolean
}

const NavbarItem = (props: NavbarItemProps) => {
  const { title, icon, to, isActive = false } = props

  const className = isActive ? 'bg-slate-300' : ''

  return (
    <RouteLink to={to}>
      <div
        className={`text-xl mr-1 px-2 cursor-pointer flex items-center rounded hover:bg-slate-300 ${className}`}
      >
        {
          icon && icon
        }
        {title}
      </div>
    </RouteLink>
  )
}

export default NavbarItem
