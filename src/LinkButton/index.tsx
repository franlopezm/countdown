import { RouteLink } from "../Router/components"

type size = 'large' | 'medium'

interface LinkButtonProps {
  title: string
  to: string
  size?: size
}

const getClassnames = ({ size }: { size: size }): string => {
  if (size === 'medium') return 'px-3 py-1 text-md'

  return 'px-4 py-2 text-lg'
}

const LinkButton = (props: LinkButtonProps) => {
  const { to, title, size = 'large' } = props

  const className = getClassnames({ size })

  return (
    <RouteLink
      to={to}
    >
      <button
        type="button"
        className={`rounded shadow-md bg-sky-600 text-neutral-100 hover:bg-sky-700 ${className}`}
      >
        {title}
      </button>
    </RouteLink>
  )
}

export default LinkButton
