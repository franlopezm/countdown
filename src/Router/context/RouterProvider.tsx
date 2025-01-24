import { ReactNode, useEffect, useState } from 'react'

import { getLocationPath, redirectToRouteHash } from '../utils'
import { RouterContext } from './RouterContext'

export const RouterProvider = ({ children }: { children: ReactNode }) => {
  const [path, setPath] = useState(() => {
    return getLocationPath()
  })

  useEffect(
    () => {
      const onLocationChange = () => {
        setPath(getLocationPath())
      }

      window.addEventListener('popstate', onLocationChange)

      redirectToRouteHash()

      return () => {
        window.removeEventListener('popstate', onLocationChange)
      }
    }, []
  )

  return (
    <RouterContext.Provider
      value={{ path }}
    >
      {children}
    </RouterContext.Provider>
  )
}
