import { NavLink } from "react-router-dom"
import { Helmet } from 'react-helmet-async'//Gestionnaire méta-données.
import "../styles/Accueil.scss"

const Accueil = () => {//Création composant accueil
  return (//Retourne contenu HTML page
    <section className="hero">

      <Helmet>{/*Helmet modifie les balises <head> HTML pour SEO*/}
        <title>Laurent Ahlsweh | Développeur Web Junior React & Accessibilité</title>{/*Titre onglet navigateur et résultats Google*/}
        <meta name="description" content="Portfolio de Laurent Ahlsweh, développeur web junior spécialisé en React, Node.js, SEO et accessibilité (WCAG). Découvrez mes projets et mon approche technique." />
      </Helmet>

      <div className="hero_container">
        <h1 className="hero_title">Hello !</h1>
        <h2 className="hero_subtitle">Bienvenu sur mon portfolio de Développeur Web "Junior😂" passionné !</h2>
        <p className="hero_text">
        Vous y trouverez mes projets de formation réalisés avec soin et découvrirez mon approche du développement Web : propre, accessible et surtout, pensé pour l'utilisateur.
        </p>
        <NavLink to="/projets" className="hero_AcLink">
          Découvrir mes projets
        </NavLink>
      </div>
    </section>
  )
}

export default Accueil