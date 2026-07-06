import { Helmet } from 'react-helmet-async'//Import Helmet pour SEO
import "../styles/Competences.scss"

const Competences = () => {//Création tableau
  const categoriesDeCompetences = [
    {
      titre: "Front-End & Design",
      liste: ["HTML5", "CSS3", "JavaScript", "React", "React Router", "Sass", "MUI", "DOM", "Responsive Design", "Design", "Figma"]
    },
    {
      titre: "Back-End & Sécurité",
      liste: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Modélisation", "API REST", "Auth (Bcrypt, JWT)", "CORS"]
    },
    {
      titre: "Outils, Méthodes & Qualité",
      liste: ["Git", "GitHub", "VS Code", "Vite", "DevTools", "GitHub Pages", "Lighthouse", "Optimisation", "Accessibilité numérique", "Audit outils", "Tests / QA", "Méthode Agile (scrum)", "Suivi projet (Kanban)", "Spécifications techniques", "Présentation technique", "Veille"]
    }
  ]

  return (
    <section className="competences">
      <Helmet>
        <title>Compétences | Portfolio Laurent Ahlsweh</title>
        <meta name="description" content="Découvrez les compétences techniques et méthodologiques de Laurent Ahlsweh : React, Node.js, SEO, Accessibilité, et gestion de projet Agile." />
      </Helmet>
      
      <div className="competences_container">
        <h2>Mes compétences</h2>
        
        <div className="competences_grid">{/*Grid pour CSS*/}
          {/*mapping sur catégories*/}
          {categoriesDeCompetences.map((categorieCourante, indexCategorie) => (
            <article className="competences_categorie" key={indexCategorie}>
              <h3>{categorieCourante.titre}</h3>

              <ul className="competences_liste">
                {/*Mapping sur compétences*/}
                {categorieCourante.liste.map((nomCompetence, indexCompetence) => (
                  <li key={indexCompetence}>{nomCompetence}</li>
                ))}
              </ul>
            </article>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Competences