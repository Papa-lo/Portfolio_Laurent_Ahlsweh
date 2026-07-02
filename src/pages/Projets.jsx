import { NavLink } from "react-router-dom"
import { Helmet } from 'react-helmet-async'//Import Helmet modifie titre et description onglet.
import projetsData from "../data/projetsData"//Import données
import "../styles/Projets.scss"

const Projets = () => {
  return (

    <section className="projets">

      <Helmet>
        <title>Mes Projets | Portfolio Laurent Ahlsweh</title>
        <meta name="description" content="Découvrez les projets de développement web de Laurent Ahlsweh : optimisation SEO, applications React, gestion de bases de données et sécurité." />
      </Helmet>

      <div className="projets_container">
        <h2>Mes projets de formation</h2>

        <div className="projets_grid">

            {projetsData.map((projet) => (
              
              <article className="projet_card" key={projet.id}>
                
                <h3>{projet.titre}</h3>
                <p>{projet.description}</p>
                
                <NavLink to={`/projets/${projet.slug}`}>
                  Voir les détails du projet
                </NavLink>

              </article>
            ))}

        </div>
      </div>
    </section>
  )
}

export default Projets