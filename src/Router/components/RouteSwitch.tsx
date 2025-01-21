import { ReactElement } from 'react'

import { useRouter } from '../hooks/useRouter'
import { RouteProps } from './Route'
import RouteNotFound from './RouteNotFound'

interface RouteSwitchProps {
  children: ReactElement<RouteProps>[]
  notFoundText: string
}

export const RouteSwitch = (props: RouteSwitchProps) => {
  const { children, notFoundText } = props
  const [currentPath] = useRouter()

  for (const elem of children) {
    if (currentPath === elem.props.path) return elem
  }

  return (
    <RouteNotFound
      text={notFoundText}
    />
  )
}
