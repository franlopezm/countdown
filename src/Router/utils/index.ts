const goTo = (path: string) => {
  window.history.pushState({}, '', path)
  window.dispatchEvent(new PopStateEvent("popstate"))
}

export const routerUtils = {
  goTo
}
