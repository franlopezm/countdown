import { useContext } from "react"

import { RouterContext } from "../context/RouterContext"

const useRouter = () => {
  const { path } = useContext(RouterContext)

  return [path]
}

export default useRouter
