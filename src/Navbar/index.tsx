import { useContext } from "react"

import { RouterContext } from "../Router/context/RouterContext"
import HomeIcon from "../Icons/HomeIcon"
import PlusIcon from "../Icons/PlusIcon"
import NavbarItem from "./NavbarItem"

const Navbar = () => {
  const { path } = useContext(RouterContext)

  return (
    <div
      className='px-10 md:px-32 xl:px-36 2xl:px-52 py-3 font-medium shadow-md flex items-end'
    >
      <h1 className="text-2xl text-sky-950">Timers</h1>
      <div
        className="ml-8 text-sky-900 flex"
      >
        <NavbarItem
          to='/'
          isActive={path === '/'}
          title="Inicio"
          icon={
            <HomeIcon size="size-5" className="mr-1.5" />
          }
        />
        <NavbarItem
          to='/new'
          isActive={path === '/new'}
          title="Crear"
          icon={
            <PlusIcon size="size-5" className="mr-1" />
          }
        />
      </div>
    </div>
  )
}

export default Navbar
