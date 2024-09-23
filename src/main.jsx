import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <StrictMode>
    <App />
    </StrictMode>
  </HelmetProvider>
)
