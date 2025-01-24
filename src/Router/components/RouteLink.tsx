import { MouseEvent, ReactNode, useCallback } from 'react'
import { addHash, goTo } from '../utils'

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

      goTo(to)
    }, [to]
  )

  return (
    <a
      className={className}
      href={addHash(to)}
      onClick={onClick}
    >
      {children}
    </a>
  )
}
