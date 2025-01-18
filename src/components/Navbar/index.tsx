import NavbarItem from "./NavbarItem"

const Navbar = () => {
  return (
    <div
      className='px-10 md:px-32 xl:px-36 2xl:px-52 py-3 font-medium shadow-md flex items-end'
    >
      <h1 className="text-2xl text-sky-950">Timers</h1>
      <div
        className="ml-8 text-sky-900 flex"
      >
        <NavbarItem
          title="Inicio"
        />
        <NavbarItem
          title="Nuevo"
        />
      </div>
    </div>
  )
}

export default Navbar
