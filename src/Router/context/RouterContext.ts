import { createContext } from "react"

export interface RouterContextValues {
  path: string
}

export const RouterContext = createContext<RouterContextValues>({
  path: '/'
})
