import { useContext } from 'react'

import { RouterContext } from '../context/RouterContext'

export const useRouter = () => {
  const { path } = useContext(RouterContext)

  return [path]
}
