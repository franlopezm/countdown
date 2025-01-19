import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from './Router'
import { DateProvider } from './DateContainer'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DateProvider>
      <RouterProvider>
        <App />
      </RouterProvider>
    </DateProvider>
  </StrictMode>,
)
