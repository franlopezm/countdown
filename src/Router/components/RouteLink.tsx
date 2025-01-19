import { MouseEvent, ReactNode, useCallback } from "react"
import { routerUtils } from "../utils"

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

      routerUtils.goTo(to)
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
