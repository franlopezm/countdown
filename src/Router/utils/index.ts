import { DNS, ROUTES, HASH_ROUTER } from '../../config/constants'
import { DateStorageItem } from '../../services/localStorage/dateStorage'

const DEFAULT_HASH = HASH_ROUTER ? '/#' : ''

export const addHash = (path: string): string => {
  if (HASH_ROUTER && !path.startsWith('/#')) {
    path = `${DEFAULT_HASH}${path}`
  }

  return path
}

export const redirectToRouteHash = () => {
  if (HASH_ROUTER && !window.location.hash) {
    const path = window.location.pathname || ROUTES.home
    const search = window.location.search

    goTo(`${path.replace(/^\/+/, '/')}${search}`)
  }
}

export const goTo = (path: string) => {
  window.history.pushState({}, '', addHash(path))
  window.dispatchEvent(new PopStateEvent('popstate'))
}

export const getViewPath = (params: DateStorageItem): string => {
  const queryParams = new URLSearchParams()

  Object.entries(params).forEach(([key, value]) => {
    queryParams.append(key, value)
  })

  return addHash(`${ROUTES.view}?${queryParams.toString()}`)
}

export const getURL = (path: string): string => {
  return `${DNS}${addHash(path)}`
}

export const getLocationPath = (): string => {
  if (HASH_ROUTER) {
    return window.location.hash.replace(/^#|\?.*/g, '') || ROUTES.home
  }

  return window.location.pathname
}

export const getSearchParams = (): string => {
  if (HASH_ROUTER) {
    const hash = window.location.hash
    const idxQueryStart = hash.indexOf('?')

    return hash.substring(idxQueryStart)
  }

  return window.location.search
}

export const routerUtils = {
  goTo,
  getViewPath,
  getURL,
  getLocationPath,
  addHash
}
