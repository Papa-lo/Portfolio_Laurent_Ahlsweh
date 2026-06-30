import { NavLink } from 'react-router-dom'
// import './Accueil.scss' // On ajoutera celle-ci quand on créera le fichier SCSS

const Accueil = () => {//Création composant page d'accueil

  return (//Retourne contenu HTML de ma page

    <section className="hero">

      <div className="hero_container">

        <h1 className="hero_title">Bonjour, je suis Laurent Ahlsweh</h1>
        <h2 className="hero_subtitle">Développeur Web Junior passionné</h2>
        <p className="hero_text">
          Bienvenu sur mon portfolio. Vous y trouverez mes projets de formation réalisés avec soin et découvrirez mon approche du développement Web : propre, accessible et pensé pour l'utilisateur.
        </p>

        <NavLink to="/projets" className="hero_cta">
          Découvrir mes projets
        </NavLink>

      </div>

    </section>
    
  )
}

export default Accueil