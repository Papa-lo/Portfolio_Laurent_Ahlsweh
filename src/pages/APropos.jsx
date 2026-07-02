import { Helmet } from 'react-helmet-async'//Gestionnaire méta-données.
import "../styles/APropos.scss"

const APropos = () => {//Création composant page A propos

  return (
    <section className="a-propos">

      <Helmet>
        <title>À propos | Laurent Ahlsweh - Développeur Web Junior</title>
        <meta name="description" content="Découvrez le parcours de reconversion de Laurent Ahlsweh, développeur web junior passionné par le code propre, le SEO et l'accessibilité numérique." />
      </Helmet>

      <div className="a-propos_container">
        <h2>A propos de moi</h2>
        <article className="a-propos_acte">
          <h3>Qui suis-je ?</h3>
          <p>Bonjour, je suis Laurent Ahlsweh, développeur web junior passionné par la création d'applications accessibles et performantes.</p>
        </article>
        <article className="a-propos_acte">
          <h3>Mon parcours</h3>
          <p>Issue d'une reconversion professionnelle, j'ai choisi le développement web pour allier logique et créativité. Ma formation chez OpenClassrooms m'a permis d'acquérir une solide méthode de travail.</p>
        </article>
        <article className="a-propos_acte">
          <h3>Mon expertise technique</h3>
          <p>Je maîtrise HTML, CSS, JavaScript, React, Node.js et les bases de données. Mon attention se porte particulièrement sur l'optimisation SEO et le respect des normes d'accessibilité.</p>
        </article>
        <article className="a-propos_acte">
          <h3>Mes réalisations clés</h3>
          <p>Mon projet "Nina Carducci" démontre ma capacité à optimiser le SEO et l'accessibilité d'un site existant. "Mon Vieux Grimoire" prouve ma capacité à gérer une base de données et la sécurité en backend.</p>
        </article>
        <article className="a-propos_acte">
          <h3>Ma façon de travailler</h3>
          <p>J'ai une approche pragmatique : pas de fioritures inutiles, du code propre, sémantique et pensé pour l'utilisateur avant tout. Je crois qu'un bon site est un site simple et efficace.</p>
        </article>
        <article className="a-propos_acte">
          <h3>Mes ambitions</h3>
          <p>Je recherche un poste de développeur web junior au sein d'une équipe bienveillante, où je pourrai continuer à progresser sur des projets concrets et structurés.</p>
        </article>
      </div>
    </section>
  )
}

export default APropos