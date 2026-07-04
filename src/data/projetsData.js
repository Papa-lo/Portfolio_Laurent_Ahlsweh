const projetsData = [
  {
    id: 1,
    slug: "nina-carducci",//Slug : texte qui sera utilisé dans l'URL
    titre: "Nina Carducci",
    description: "Optimisation complète du référencement naturel (SEO) et mise en conformité avec les normes d'accessibilité (WCAG) d'un site de photographe existant.",
    technologies: ["HTML", "CSS", "JavaScript", "SEO", "Accessibilité"],//Technologies utilisées
    github: "https://github.com/Papa-lo/Nina-Carducci",
    contexte: "Le site vitrine d'une photographe présentait de graves lacunes en matière d'accessibilité, de performances et de référencement naturel (SEO).",
    objectifs: "Optimiser l'ensemble du site : corriger des bugs de navigation, améliorer les performances en compressant les images, et restructurer le code pour le rendre conforme aux normes.",
    competences: "Maîtrise des balises méta-données, rigueur du code sémantique HTML pour l'accessibilité (WCAG), et utilisation avancée des outils d'audit comme Lighthouse.",
    resultats: "Obtention de scores Lighthouse supérieurs à 90 dans toutes les catégories (Performance, Accessibilité, Bonnes pratiques, SEO).",
    perspectives: "Développer un Back-End (Node.js) pour permettre aux visiteurs de laisser des commentaires sur les galeries de photos ou de donner leur avis suite à une prestation."
  },
  {
    id: 2,
    slug: "mon-vieux-grimoire",
    titre: "Mon Vieux Grimoire",
    description: "Développement d'une application de notation de livres avec gestion d'une base de données MongoDB et mise en place de mesures de sécurité en backend.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Sécurité"],
    github: "https://github.com/Papa-lo/VieuxGrimoire",
    contexte: "Application de gestion de bibliothèque nécessitant un système d'authentification complet et une base de données pour gérer les livres, les images et les évaluations des utilisateurs.",
    objectifs: "Développer une API REST sécurisée avec Node.js et Express, et structurer une base de données MongoDB pour gérer les relations entre les utilisateurs et les livres.",
    competences: "Sécurisation des mots de passe (hashage avec Bcrypt), gestion des sessions via JWT (JSON Web Tokens), validation stricte des données et configuration de droits d'accès (supprimer uniquement ses propres livres).",
    resultats: "Un système d'authentification et de notation fonctionnel, où les données sensibles sont protégées et stockées de manière sécurisée dans la base de données.",
    perspectives: "Permettre aux utilisateurs de rédiger des avis détaillés sur les livres (et non plus seulement des notes), avec la mise en place d'un filtre pour empêcher la publication de spoilers involontaires."
  }
]

export default projetsData