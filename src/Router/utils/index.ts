import { DNS, ROUTES } from '../../config/constants'
import { DateStorageItem } from '../../services/localStorage/dateStorage'

const goTo = (path: string) => {
  window.history.pushState({}, '', path)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

const getViewPath = (params: DateStorageItem): string => {
  const queryParams: string[] = []

  Object.entries(params).forEach(([key, value]) => {
    queryParams.push(`${key}=${value}`)
  })

  return `${ROUTES.view}?${encodeURIComponent(queryParams.join('&'))}`
}

const getURL = (path: string): string => {
  return `${DNS}${path}`
}

export const routerUtils = {
  goTo,
  getViewPath,
  getURL
}
