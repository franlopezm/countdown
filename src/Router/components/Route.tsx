import { ReactElement } from "react"

export interface RouteProps {
  path: string
  component: ReactElement
}

export const Route = (props: RouteProps) => {
  const { component } = props

  return component
}
