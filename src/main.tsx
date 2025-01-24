import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { LOAD_DEMO } from './config/env'
import { insertDemoData } from './demo'
import { RouterProvider } from './Router'
import { DateProvider } from './DateContainer'
import App from './App'

if (LOAD_DEMO) {
  insertDemoData()
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DateProvider>
      <RouterProvider>
        <App />
      </RouterProvider>
    </DateProvider>
  </StrictMode>,
)
