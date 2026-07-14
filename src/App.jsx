import Header from "./components/Header"//Import composant Header
import Footer from "./components/Footer"//Import composant Footer
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom"//Import outils React Router
import Accueil from "./pages/Accueil"//Import des 4 composants de pages
import APropos from "./pages/APropos"
import Projets from "./pages/Projets"
import Contact from "./pages/Contact"
import ProjetDetail from "./pages/ProjetDetail"
import Competences from "./pages/Competences"
import Cv from "./pages/Cv"//Import composant CV
import "./styles/App.scss"


const App = () => {//Création composant principal application

  const emplacementActuel = useLocation()//Récupère URL
  useEffect(() => {//A Chaque changement d'URL
    window.scrollTo({ top: 0 })//Affiche le haut de la page
  }, [emplacementActuel]) //Seulement si URL change

  return (
    <>
      <Header />{/*Affiche Header*/}
      
      <main>
        <Routes>{/* Routes analyser URL navigateur*/}
          <Route path="/" element={<Accueil />} />{/* Si URL est "/",affiche composant Accueil*/}
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/projets/:slug" element={<ProjetDetail />} />{/*Route dynamique : " :slug " = "n'importe quel texte ici, je le récupérerai dans le composant" */}
          <Route path="/projets" element={<Projets />} />
          <Route path="/Competences" element={<Competences/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cv" element={<Cv />} />
        </Routes>
      </main>

      <Footer/>
    </>
  )
}

export default App