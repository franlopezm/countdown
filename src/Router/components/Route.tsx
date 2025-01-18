import { ReactNode } from "react"
import useRouter from "../hooks/useRouter"

interface RouteProps {
  path: string
  component: ReactNode
}

const Route = (props: RouteProps) => {
  const { path, component } = props

  const [currentPath] = useRouter()

  if (path !== currentPath) return null

  return component
}

export default Route
