import { useParams, Link } from "react-router-dom"//Importe useParams pour récupérer la variable "slug" présente dans l'URL
import { Helmet } from 'react-helmet-async'//Import Helmet modifie titre et description onglet.
import projetsData from "../data/projetsdata"//Import tableau de données
import "../styles/ProjetDetail.scss"

const ProjetDetail = () => {
  const { slug } = useParams()//Déstructure useParams pour extraire directement "slug" Si URL = /projets/nina-carducci, slug contiendra "nina-carducci"

  const projetTrouve = projetsData.find((projet) => projet.slug === slug)//Cherche dans tableau projet dont slug = celui de URL

  if (!projetTrouve) {//Si user tape URL fausse, projetTrouve : indéfini
    return (
      <section className="projet-detail">

        <Helmet>
          <title>Projet non trouvé | Portfolio</title>
        </Helmet>

        <div className="projet-detail_container">
          <h2>Projet non trouvé</h2>
          <p>Ce projet n'existe pas dans mon portfolio.</p>
          <Link to="/projets">Retour à la liste des projets</Link>
        </div>
      </section>
    )
  }

  return (//Si projet trouvé, affiche détails
    <article className="projet-detail">
      <div className="projet-detail_container">

        <Helmet>
          <title>{projetTrouve.titre} | Portfolio Laurent Ahlsweh</title>{/*Helmet dynamique*/}
          <meta name="description" content={projetTrouve.description} />{/*Utilise description projet dynamiquement*/}
        </Helmet>
        
        <h2>{projetTrouve.titre}</h2>
        <p className="projet-detail_description">{projetTrouve.description}</p>
        
        <div className="projet-detail_tech">
          <h3>Technologies utilisées</h3>
          <ul>
            {projetTrouve.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>//utilise index car pas d'ID unique pour technologies
            ))}
          </ul>
        </div>

        <div className="projet-detail_links">
          <a href={projetTrouve.github} target="_blank" rel="noopener noreferrer">
            Voir le code source sur GitHub
          </a>
          <Link to="/projets">Retour à la liste des projets</Link>
        </div>

      </div>
    </article>
  )
}

export default ProjetDetail