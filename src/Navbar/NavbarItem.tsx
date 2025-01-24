import { ReactNode } from 'react'
import { RouteLink } from '../Router'

interface NavbarItemProps {
  title: string
  to: string
  icon?: ReactNode
  isActive?: boolean
}

const NavbarItem = (props: NavbarItemProps) => {
  const { title, icon, to, isActive = false } = props

  const className = isActive ? 'bg-slate-200' : ''

  return (
    <RouteLink
      className={`text-xl mr-2 px-2.5 py-1 flex items-center rounded hover:bg-slate-200 ${className}`}
      to={to}
    >
      {
        icon && icon
      }
      {title}
    </RouteLink>
  )
}

export default NavbarItem
