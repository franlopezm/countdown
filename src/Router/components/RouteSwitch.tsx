import { ReactElement } from "react"

import { useRouter } from "../hooks/useRouter"
import { RouteProps } from './Route'

interface RouteSwitchProps {
  children: ReactElement<RouteProps>[]
}

export const RouteSwitch = (props: RouteSwitchProps) => {
  const { children } = props
  const [currentPath] = useRouter()

  for (const elem of children) {
    if (currentPath === elem.props.path) return elem
  }

  return (
    <div className="mt-8 text-center">
      <p className="text-7xl font-bold text-slate-700">
        404
      </p>
      <p className="mt-5 text-2xl text-slate-700">
        Lo sentimos, la página a la que desea acceder no existe.
      </p>
    </div>
  )
}
