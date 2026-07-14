import '../styles/Cv.scss';
import { Helmet } from "react-helmet-async";
import donneesPersonnelles from "../data/cvDonneesPerso";


function Cv() {
    const exporterEnPdf = () => {
        window.print();
    };

    return (
    
    <>
        <button className="cv-export-btn" onClick={exporterEnPdf}>
            Télécharger PDF
        </button>

        <article className="cv" id="cv">

            <Helmet>{/*Helmet modifie les balises <head> HTML pour SEO*/}
                <title>CV — Laurent Ahlsweh | Développeur Web Junior</title>
                <meta name="description" content="CV de Laurent Ahlsweh, développeur web junior. Formation OpenClassrooms, compétences React, Node.js, MongoDB, et plus."/>
            </Helmet>

            <aside className="cv-sidebar">

                <img src="/images/maphoto.webp" alt="Photo de Laurent Ahlsweh" className="cv-photo"/>

                    <section>
                    <h2>Contact</h2>
                    <p>{donneesPersonnelles.localisation}</p>
                    <p>
                        <a href={`tel:${donneesPersonnelles.telephone}`} className="cv-lien">
                        {donneesPersonnelles.telephone}
                        </a>
                    </p>
                    <p>
                        <a href={`mailto:${donneesPersonnelles.email}`} className="cv-lien">
                        {donneesPersonnelles.email}
                        </a>
                    </p>
                    <p>
                        <a href={`https://${donneesPersonnelles.github}`} target="_blank" rel="noopener noreferrer" className="cv-lien">
                        {donneesPersonnelles.github}
                        </a>
                    </p>
                    <p>
                        <a href={`https://${donneesPersonnelles.portfolio}`} target="_blank" rel="noopener noreferrer" className="cv-lien">
                        {donneesPersonnelles.portfolio}
                        </a>
                    </p>
                    </section>

                <section>
                    <h2>Compétences</h2>
                    <p className="cv-tags-categorie">Front-End</p>
                    <div className="cv-tags">
                        <span className="cv-tag">HTML5</span>
                        <span className="cv-tag">CSS3</span>
                        <span className="cv-tag">JavaScript</span>
                        <span className="cv-tag">React</span>
                        <span className="cv-tag">Sass</span>
                        <span className="cv-tag">Material UI</span>
                    </div>

                    <p className="cv-tags-categorie">Back-End</p>
                    <div className="cv-tags">
                        <span className="cv-tag">Node.js</span>
                        <span className="cv-tag">Express</span>
                        <span className="cv-tag">MongoDB</span>
                        <span className="cv-tag">PostgreSQL</span>
                        <span className="cv-tag">API REST</span>
                    </div>

                    <p className="cv-tags-categorie">Outils</p>
                    <div className="cv-tags">
                        <span className="cv-tag">Git</span>
                        <span className="cv-tag">GitHub</span>
                        <span className="cv-tag">VS Code</span>
                        <span className="cv-tag">Postman</span>
                        <span className="cv-tag">Figma</span>
                    </div>

                    <p className="cv-tags-categorie">Qualité</p>
                    <div className="cv-tags">
                        <span className="cv-tag">Responsive</span>
                        <span className="cv-tag">SEO</span>
                        <span className="cv-tag">Accessibilité WCAG</span>
                    </div>
                </section>

                <section>
                    <h2>Langues</h2>
                    <p className="cv-langue-ligne">
                        <span>Anglais</span>
                        <span className="cv-langue-niveau">Intermédiaire</span>
                    </p>
                    <p className="cv-langue-ligne">
                        <span>Allemand</span>
                        <span className="cv-langue-niveau">Débutant</span>
                    </p>
                </section>

                <section>
                    <h2>Permis</h2>
                    <p className="cv-permis">
                        <span>Permis B</span>
                    </p>
                </section>

            </aside>

            <main className="cv-main">

                <header className="cv-entete">
                    <h1>{donneesPersonnelles.nomComplet}</h1>
                    <p>Développeur Web Junior</p>
                </header>

                <section className="cv-profil">
                    <h2>Profil</h2>
                    <p>Passionné par le développement web, j'ai achevé avec succès la formation Développeur Web d'OpenClassrooms. Fort de plus de 20 ans d'expérience professionnelle — ayant exercé des responsabilités de gestion, de conseil technique et de conception — j'apporte rigueur, sens du service et capacité d'adaptation à ma nouvelle carrière de développeur.</p>
                </section>

                <section>
                    <h2>Projets réalisés</h2>
                    <article className="cv-projet">
                        <div className="cv-projet-entete">
                        <h3 className="cv-projet-nom">Portfolio Full Stack</h3>
                        <div className="cv-tags cv-projet-tags">
                            <span className="cv-tag">React</span>
                            <span className="cv-tag">Node.js</span>
                            <span className="cv-tag">Express</span>
                        </div>
                        </div>
                        <p className="cv-projet-description">Application client/serveur complète avec API de contact, gestion de la sécuritéet déploiement sur Vercel (front) et Render (back).</p>
                    </article>

                    <article className="cv-projet">
                        <div className="cv-projet-entete">
                        <h3 className="cv-projet-nom">Mon Vieux Grimoire</h3>
                        <div className="cv-tags cv-projet-tags">
                            <span className="cv-tag">Express</span>
                            <span className="cv-tag">MongoDB</span>
                            <span className="cv-tag">API REST</span>
                            <span className="cv-tag">Authentification</span>
                        </div>
                        </div>
                        <p className="cv-projet-description">API REST sécurisée pour une application de gestion de livres: authentification, gestion des utilisateurs et protection des données.</p>
                    </article>

                    <article className="cv-projet">
                        <div className="cv-projet-entete">
                        <h3 className="cv-projet-nom">Booki</h3>
                        <div className="cv-tags cv-projet-tags">
                            <span className="cv-tag">HTML5</span>
                            <span className="cv-tag">CSS3</span>
                            <span className="cv-tag">Responsive</span>
                            <span className="cv-tag">Figma</span>
                        </div>
                        </div>
                        <p className="cv-projet-description">Intégration responsive d'un site de réservation de logements à partir d'une maquette Figma, validation W3C.</p>
                    </article>
                </section>

                <section>
                    <h2>Formation</h2>
                    <article className="cv-formation-principale">
                        <div className="cv-formation-entete">
                        <h3 className="cv-formation-titre">Développeur Web</h3>
                        <time className="cv-formation-date">2025 — 2026</time>
                        </div>
                        <p className="cv-formation-sousTitre">OpenClassrooms — Parcours complet (niveau Bac+2)</p>
                        <p className="cv-formation-detail">Tous les projets validés avec succès. Diplôme en attente de délivrance par le jury. Maîtrise du stack MERN, responsive design, accessibilité, SEO et bonnes pratiques de développement.</p>
                    </article>

                    <div className="cv-formations-anciennes">
                        <p className="cv-formation-ligne">
                        <span>Bac Pro Économie, organisation de chantier, gestion de travaux</span>
                        <span>1999</span>
                        </p>
                        <p className="cv-formation-ligne">
                        <span>BEP Construction</span>
                        <span>1997</span>
                        </p>
                    </div>
                </section>

                <section>
                    <h2>Expériences</h2>

                    <article className="cv-experience">
                        <time className="cv-experience-dates">2021 — 2024</time>
                        <div className="cv-experience-contenu">
                            <h3 className="cv-experience-titre">Conseiller de vente</h3>
                            <p className="cv-experience-entreprise">Materiaux VM puis Matériaux Nord Blayais</p>
                            <p className="cv-experience-description">Accueil client, conseil technique sur les matériaux de construction, suivi des commandes.</p>
                        </div>
                    </article>

                    <article className="cv-experience">
                        <time className="cv-experience-dates">2012 — 2021</time>
                        <div className="cv-experience-contenu">
                            <h3 className="cv-experience-titre">De conseiller à adjoint responsable d'agence</h3>
                            <p className="cv-experience-entreprise">Point P (Célia puis réseau direct)</p>
                            <p className="cv-experience-description">Vente et conseil, puis administration des ventes, approvisionnements et gestion d'une équipe de 5 personnes.</p>
                        </div>
                    </article>

                    <article className="cv-experience">
                        <time className="cv-experience-dates">2000 — 2012</time>
                        <div className="cv-experience-contenu">
                            <h3 className="cv-experience-titre">Dessinateur puis technicien études planchers</h3>
                            <p className="cv-experience-entreprise">KP1, Guy Comuzzi, Habitat Familial d'Alsace</p>
                            <p className="cv-experience-description">Conception de plans de permis de construire et d'exécution, puis études techniques de planchers industrialisés.
                            </p>
                        </div>
                    </article>
                </section>

            </main>

        </article>
    </>
    );
}

export default Cv;