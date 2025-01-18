import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.tsx'
import { RouterProvider } from './Router/context/RouterProvider.tsx'
import { DateProvider } from './common/contexts/DateContext/DateProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DateProvider>
      <RouterProvider>
        <App />
      </RouterProvider>
    </DateProvider>
  </StrictMode>,
)
