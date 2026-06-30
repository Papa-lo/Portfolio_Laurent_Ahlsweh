import { StrictMode } from 'react'//Mode strict React.
import { createRoot } from 'react-dom/client'//Fonction d'accrochage HTML.
import { BrowserRouter } from 'react-router-dom'//Routeur React.
import App from './App.jsx'//Composant principal.
import './index.scss'//Style global.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
