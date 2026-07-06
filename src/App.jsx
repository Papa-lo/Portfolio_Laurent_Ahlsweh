import Header from "./components/Header"//Import composant Header
import Footer from "./components/Footer"//Import composant Footer
import { Routes, Route, useLocation, useEffect } from "react-router-dom"//Import outils React Router pour associer une URL à une page
import Accueil from "./pages/Accueil"//Import des 4 composants de pages
import APropos from "./pages/APropos"
import Projets from "./pages/Projets"
import Contact from "./pages/Contact"
import ProjetDetail from "./pages/ProjetDetail"
import Competences from "./pages/Competences"
import "./styles/App.scss"//Importe style mise en page globale App


const App = () => {//Création composant principal application

  const emplacementActuel = useLocation()//Récupère URL barre adresse
  useEffect(() => {//Chaque changement URL, remonte
    window.scrollTo({ top: 0, behavior: 'smooth' })//Défilement fluide
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
        </Routes>
      </main>

      <Footer/>
    </>
  )
}

export default App