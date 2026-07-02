import { StrictMode } from "react"//Mode strict React.
import { createRoot } from "react-dom/client"//Fonction d'accrochage HTML.
import { BrowserRouter } from "react-router-dom"//Routeur React.
import { HelmetProvider } from 'react-helmet-async'//Modificateur SEO pour chaque page
import App from "./App.jsx"//Composant principal.
import "./styles/index.scss"//Style global.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
    </BrowserRouter>
  </StrictMode>,
)
