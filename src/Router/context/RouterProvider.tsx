import { ReactNode, useEffect, useState } from 'react'

import { RouterContext } from './RouterContext'

export const RouterProvider = ({ children }: { children: ReactNode }) => {
  const [path, setPath] = useState(() => {
    return window.location.pathname
  })

  useEffect(
    () => {
      const onLocationChange = () => {
        setPath(window.location.pathname)
      }

      window.addEventListener('popstate', onLocationChange)

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
