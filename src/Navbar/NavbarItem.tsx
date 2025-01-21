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
    <RouteLink to={to}>
      <div
        className={`text-xl mr-1 px-2 cursor-pointer flex items-center rounded hover:bg-slate-200 ${className}`}
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
