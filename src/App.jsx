import Header from './components/Header'//Import composant Header
import Footer from './components/Footer'//Import composant Footer
import { Routes, Route } from 'react-router-dom'//Import outils React Router pour associer une URL à une page
import Accueil from './pages/Accueil'//Import des 4 composants de pages
import APropos from './pages/APropos'
import Projets from './pages/Projets'
import Contact from './pages/Contact'


const App = () => {//Création composant principal application
  return (
    <>
      <Header />{/*Affiche Header*/}
      
      <main>
        <Routes>{/* Routes analyser URL navigateur*/}
          <Route path="/" element={<Accueil />} />{/* Si URL est "/",affiche composant Accueil*/}
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer/>
    </>
  )
}

export default App