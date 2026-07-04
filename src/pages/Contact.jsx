import "../styles/Contact.scss"
import TextField from '@mui/material/TextField'//Composant MUI pour champs formulaire (accessibilité)
import Button from '@mui/material/Button'//Composant MUI pour boutons
import { useState } from 'react'//Import useState "mémoires" champs formulaire
import { Helmet } from 'react-helmet-async'//Import Helmet modifie titre et description onglet.

const Contact = () => {

  const [nom, setNom] = useState('')//Création variable d'état (state) pour nom. 'nom' => valeur, 'setNom' => la modifier. State vide par défaut.
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [feedback, setFeedback] = useState('')

  const handleSubmit = async (evenement) => {//Fonction au CLICK
    evenement.preventDefault()//Empêche rechargement page

    const donneesAEnvoyer = { nom, email, message }//Rassemble les 3 mémoires dans un objet JavaScript

    try {
      const reponse = await fetch('https://portfolio-laurent-ahlsweh.onrender.com/api/contact', {//Envoie au serveur Backend
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(donneesAEnvoyer)//Transforme objet en texte
      })

      const resultat = await reponse.json()//Récupère réponse serveur

      if (!reponse.ok) {//Si erreur
        setFeedback(resultat.erreur)
        return
      }

      setFeedback(resultat.succes)//Si OK
      
      setNom('')//Vide champs
      setEmail('')
      setMessage('')

    } catch (erreur) {
      setFeedback("Erreur de connexion au serveur.")//Si serveur éteint ou problème réseau
    }
  }
  
  return (

    <section className="contact">

      <Helmet>
        <title>Contact | Laurent Ahlsweh - Développeur Web Junior</title>
        <meta name="description" content="Contactez Laurent Ahlsweh, développeur web junior, pour discuter de vos projets web, d'opportunités de stage ou d'alternance." />
      </Helmet>

      <div className="contact_container">
        
        <h2>Me contacter</h2>

        <form className="contact_form" onSubmit={handleSubmit}>
          
          <div className="contact_field">{/*field : champ*/}
            {/*Groupe Nom - MUI gère label automatiquement*/}
            <TextField
              id="nom"
              name="nom"
              label="Votre nom"
              variant="standard"
              required
              fullWidth
              value={nom}//Lie champ à mémoire "nom"
              onChange={(e) => setNom(e.target.value)}//Chaque lettre tapée, met à jour mémoire.
            />
          </div>

          <div className="contact_field">
            <TextField
              id="email"
              name="email"
              label="Votre adresse e-mail"
              type="email"
              variant="standard"
              required
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="contact_field">
            <TextField
              id="message"
              name="message"
              label="Votre message"
              variant="standard"
              multiline
              rows={5}
              required
              fullWidth
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <Button type="submit" variant="contained" className="contact_bouton">
            Envoyer le message
          </Button>

          {/*Si feedback pas vide, affiche : */}
          {feedback && (
              // Je rajoute une classe dynamique : "success" si le mot "succès" est dans le texte, "error" sinon
              <p className={feedback.includes('succès') ? "contact_feedback success" : "contact_feedback error"}>
                {feedback}
              </p>
          )}

        </form>
        
      </div>
    </section>
  )
}

export default Contact