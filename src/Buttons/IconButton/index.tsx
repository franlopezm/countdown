import { ReactNode } from 'react'

interface IconButtonProps {
  icon: ReactNode
  onClick: () => void
  iconClassNames?: string
  title?: string
}

const IconButton = (props: IconButtonProps) => {
  const { onClick, title, icon, iconClassNames = 'hover:text-sky-700' } = props

  return (
    <button
      type='button'
      className={`p-0.5 text-slate-600 rounded border border-transparent hover:bg-slate-100 hover:border-slate-300 hover:shadow-sm ${iconClassNames}`}
      title={title}
      onClick={onClick}
    >
      {icon}
    </button>
  )
}

export default IconButton
