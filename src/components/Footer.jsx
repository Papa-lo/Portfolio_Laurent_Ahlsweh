import "../styles/Footer.scss"

const Footer = () => {//Création composant Footer
  return (
    <footer className="main-footer">
      <div className="main-footer__content">
        <p className="main-footer__text">© 2026 Laurent Ahlsweh - Développeur Web Junior</p>
        
        <ul className="main-footer__links">
          <li>
            <a href="https://github.com/Papa-lo" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/Papa-lo/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer