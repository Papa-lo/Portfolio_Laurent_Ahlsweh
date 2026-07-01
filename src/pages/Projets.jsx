import './Projets.scss'

const Projets = () => {
  return (

    <section className="projets">
      <div className="projets_container">
        
        <h2>Mes projets de formation</h2>

        <div className="projets_grid">
          
          <article className="projet_card">
            <h3>Nina Carducci</h3>
            <p>Optimisation complète du référencement naturel (SEO) et mise en conformité avec les normes d'accessibilité (WCAG) d'un site de photographe.</p>

            <a href="LIEN_VERS_TON_REPO_GITHUB_NINA" target="_blank" rel="noopener noreferrer">
              Voir le code sur GitHub
            </a>
          </article>

          <article className="projet_card">
            <h3>Mon Vieux Grimoire</h3>
            <p>Développement d'une application de notation de livres avec gestion d'une base de données MongoDB et mise en place de mesures de sécurité en backend.</p>

            <a href="LIEN_VERS_TON_REPO_GITHUB_GRIMOIRE" target="_blank" rel="noopener noreferrer">
              Voir le code sur GitHub
            </a>
          </article>

        </div>
      </div>
    </section>
  )
}

export default Projets