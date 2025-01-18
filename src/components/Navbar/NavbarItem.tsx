interface NavbarItemProps {
  title: string
}

const NavbarItem = (props: NavbarItemProps) => {
  const { title } = props

  return (
    <div
      className="text-xl mr-1 px-2 cursor-pointer hover:bg-slate-300 hover:rounded"
    >
      {title}
    </div>
  )
}

export default NavbarItem
