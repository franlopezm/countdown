import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './components/App.tsx'
import { DateProvider } from './contexts/DateContext/DateProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DateProvider>
      <App />
    </DateProvider>
  </StrictMode>,
)
