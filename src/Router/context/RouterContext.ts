import { createContext } from 'react'

import { ROUTES } from '../../config/constants'

export interface RouterContextValues {
  path: string
}

export const RouterContext = createContext<RouterContextValues>({
  path: ROUTES.home
})
