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
          <p>Né "un peu" avant l’an 2000, les technologies informatiques et leurs évolutions ont toujours suscité un grand intérêt pour moi. Après plus de 20 ans de carrière dans le bâtiment, j'ai choisi de relever le défi de me reconvertir dans la programmation pour allier mes centres d’intérêt à un nouveau domaine d'expertise.</p>
        </article>
        <article className="a-propos_acte">
          <h3>Mon parcours</h3>
          <p>Ma curiosité pour le code remonte aux années 90, sur un Amstrad 6128, où j'ai passé des heures à apprendre le langage Basic. Cette passion enfantine, mise en veille pendant ma carrière professionnelle, s'est révélée être un véritable point d'ancrage lors de ma reconversion professionnelle.</p>
        </article>
        <article className="a-propos_acte">
          <h3>Mon expertise technique</h3>
          <p>Mon profil se caractérise par une double compétence : une solide maîtrise du Front-End avec React et Sass, couplée à une véritable obsession pour la qualité : l'UX (je refuse les interfaces confuses) et la Sécurité (comprendre comment les architectures se protègent de l'intérieur). J'ai aussi intégré des librairies comme MUI en gardant une architecture de code strictement propre.</p>
        </article>
        <article className="a-propos_acte">
          <h3>Mes réalisations clés</h3>
          <p>Le projet dont je suis le plus fier est « Nina Carducci ». L'enjeu n'était pas seulement de coder, mais de prendre un site existant et de le rendre parfaitement conforme aux normes SEO et d'Accessibilité (WCAG). Un autre défi technique majeur fut la planification complète d'un site complexe (Menu Maker), qui m'a appris à structurer ma pensée face à une multitude d'outils.</p>
        </article>
        <article className="a-propos_acte">
          <h3>Ma façon de travailler</h3>
          <p>Ce qui me passionne dans le développement, c'est l'honnêteté du code. Contrairement à d'autres domaines où le discours peut masquer un manque de fond, ici, si la logique n'est pas solide, un œil expert le remarquera immédiatement. Je privilegie donc un code propre, lisible, et pensé pour durer.</p>
        </article>
        <article className="a-propos_acte">
          <h3>Mes ambitions</h3>
          <p>Mon objectif est d'intégrer une équipe enthousiaste avec laquelle je pourrai mettre ma rigueur et ma créativité au service de projets concrets, et poursuivre cette seconde partie de ma vie professionnelle avec la même énergie que la première.</p>
        </article>
      </div>
    </section>
  )
}

export default APropos