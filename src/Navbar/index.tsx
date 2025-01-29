import { ROUTES } from '../config/constants'
import { useRouter } from '../Router'
import { IconWrapper, HomeIcon, PlusIcon } from '../Icons'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  const [path] = useRouter()

  return (
    <div
      className='px-4 md:px-24 xl:px-36 2xl:px-52 py-2 font-medium shadow-md flex items-center'
    >
      <h1 className="text-xl md:text-2xl text-sky-950">Timers</h1>
      <div
        className="ml-5 md:ml-8 text-sky-900 flex"
      >
        <NavbarItem
          to={ROUTES.home}
          isActive={path === ROUTES.home}
          title="Inicio"
          icon={
            <IconWrapper size="size-4 md:size-5" className="mr-0.5 md:mr-1.5">
              <HomeIcon />
            </IconWrapper>
          }
        />
        <NavbarItem
          to={ROUTES.new}
          isActive={path === ROUTES.new}
          title="Crear"
          icon={
            <IconWrapper size="size-4 md:size-5" className="mr-0.5 md:mr-1.5">
              <PlusIcon />
            </IconWrapper>
          }
        />
      </div>
    </div>
  )
}

export default Navbar
