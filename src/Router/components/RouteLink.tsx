import { MouseEvent, ReactNode, useCallback } from "react"

interface RouteLinkProps {
  to: string
  children: ReactNode
  className?: string
}

export const RouteLink = (props: RouteLinkProps) => {
  const { children, to, className = '' } = props

  const onClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()

      window.history.pushState({}, '', to)
      window.dispatchEvent(new PopStateEvent("popstate"))
    }, [to]
  )

  return (
    <a
      className={className}
      href={to}
      onClick={onClick}
    >
      {children}
    </a>
  )
}
