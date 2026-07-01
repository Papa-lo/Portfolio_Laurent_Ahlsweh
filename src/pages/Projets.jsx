import { NavLink } from "react-router-dom"
import projetsData from "../data/projetsData"//Import données
import "../styles/Projets.scss"

const Projets = () => {
  return (

    <section className="projets">
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