import { ReactNode } from "react"
import RouteLink from "../Router/components/RouteLink"

interface NavbarItemProps {
  title: string
  to: string
  icon?: ReactNode
  isActive?: boolean
}

const NavbarItem = (props: NavbarItemProps) => {
  const { title, icon, to, isActive = false } = props

  return (
    <RouteLink to={to}>
      <div
        className="text-xl mr-1 px-2 cursor-pointer flex items-center hover:bg-slate-300 hover:rounded"
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
