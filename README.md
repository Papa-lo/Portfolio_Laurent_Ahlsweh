Portfolio Laurent Ahlsweh
Projet final de ma formation "développeur web" avec OpenClassrooms : mon portfolio.
ReactNode.jsSassVercel

📋 Contexte du projet
J'ai décidé il y a un peu plus d'un an de changer de métier après avoir passé plus de 20 ans dans le bâtiment. Mon premier métier était le dessin technique, A LA MAIN ! Je faisais des plans de maison et ce qui me plaisait, c'était de dessiner les plans de façades, que je pouvais décorer à ma façon, ce qui comblait ma créativité. Mais très vite, le métier a basculé sur la DAO (Dessin assisté par ordinateur), donc coté créativité ... pourtant j'ai toujours adoré me servir d'ordinateur. J'ai gardé dans un coin cet intérêt, et j'ai compris que la programmation peut aussi faire appel à la créativité !

🛠️ Stack technique
Front-End :
React (Vite) : Création d'une Single Page Application (SPA) avec un routage dynamique.
Sass (SCSS) : Utilisation du préprocesseur avec la méthode "Nesting" pour une architecture CSS propre et maintenable.
Material UI (MUI) : Intégration de composants avancés (TextField, Button) tout en gardant une séparation stricte du style (ciblage des classes .Mui... dans le SCSS, zéro style inline).
React Router : Gestion de routes statiques et dynamiques (useParams) pour les fiches projets.
React Helmet : Gestion dynamique du SEO (balises meta et titles) sur une SPA.
Back-End :
Node.js / Express : Création d'une API REST sécurisée pour la réception des données du formulaire de contact.
Sécurité : Mise en place de Helmet (masquage des informations serveur), CORS (restriction stricte au domaine Vercel), validation des données (champs obligatoires, format email) et gestion d'erreurs appropriées.

Outils & Méthodes :
Git & GitHub : Gestion de version avec des commits atomiques et explicites.
Déploiement (DevOps) : Frontend sur Vercel (score Lighthouse 100/100), Backend sur Render (configuration du port dynamique process.env.PORT).
Méthode Agile : Gestion de projet via un tableau Kanban (Trello) avec des tickets priorisés et estimés.
Qualité : Audits poussés avec Lighthouse, WAVE et une attention particulière portée aux contrastes (WCAG) et à l'UX (zéro menu caché, navigation fluide).

🏗️ Architecture du projet
Le projet suit une architecture strictement séparée :
src/ : Contient toute la logique Front-End React.
src/pages/ : Les composants de pages (Accueil, Projets, Compétences...).
src/components/ : Les composants réutilisables (Header, Footer).
src/styles/ : L'ensemble des fichiers SCSS (séparation logique/style).
src/data/ : Les données statiques (fiches projets).
server/ : Contient l'API Backend Node.js/Express, totalement indépendante du Frontend.

🚀 Installation et lancement en local
Prérequis : Node.js installé sur votre machine.
Cloner le dépôt :
git clone https://github.com/Papa-lo/Portfolio_Laurent_Ahlsweh.gitcd Portfolio_Laurent_Ahlsweh

Installer et lancer le Front-End :
npm install
npm run dev
Le site est accessible sur http://localhost:5173/

Installer et lancer le Back-End (dans un nouveau terminal) :
cd server
npm install
npm start
Le serveur est allumé sur http://localhost:4000/

🔒 Sécurité & Performance
CORS Strict : Le Backend n'accepte les requêtes que depuis l'URL officielle du portfolio (https://portfolio-laurent-ahlsweh.vercel.app).
Validation Backend : Vérification de la présence des champs et du format de l'email avant traitement.
Optimisation Frontend : Toutes les images (logo, captures d'écran) ont été compressées via Squoosh (format WebP/PNG optimisé) pour garantir des temps de chargement minimaux.
Accessibilité : Hiérarchie de titres stricte (H1, H2, H3), balises sémantiques (<nav>, <main>, <article>), liens avec rel="noopener noreferrer", et gestion du focus clavier.

🌐 Déploiement en production
Front-End : Hébergé sur Vercel. Déploiement continu automatique via les pushes sur la branche main.
Back-End : Hébergé sur Render. Utilisation du port dynamique (process.env.PORT) pour s'adapter à l'environnement Cloud.

👤 Auteur
Laurent Ahlsweh - Développeur Web Junior
[Lien vers ton profil LinkedIn]