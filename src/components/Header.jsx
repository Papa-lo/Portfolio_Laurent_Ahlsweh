import { NavLink } from "react-router-dom"//Composant liens sans recharge page.
import "../styles/Header.scss"//Importe mon fichier SCSS pour le style de ce composant.

const Header = () => {
  return (
    <header className="main-header">
      <nav className="main-nav" aria-label="Navigation principale">
        
        <NavLink to="/" className="main-nav__logo">
          Laurent Ahlsweh
        </NavLink>

        <ul className="main-nav__list">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "main-nav__link active" : "main-nav__link"} end>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/a-propos" className={({ isActive }) => isActive ? "main-nav__link active" : "main-nav__link"}>
              À propos
            </NavLink>
          </li>
          <li>
            <NavLink to="/projets" className={({ isActive }) => isActive ? "main-nav__link active" : "main-nav__link"}>
              Projets
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "main-nav__link active" : "main-nav__link"}>
              Contact
            </NavLink>
          </li>
        </ul>

      </nav>
    </header>
  )
}

export default Header