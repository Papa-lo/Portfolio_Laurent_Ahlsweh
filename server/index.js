const express = require('express')//Import Express, framework pour créer le serveur
const cors = require('cors')//Import Cors pour autoriser Frontend (port 5173) à parler au Backend (port 4000)
const helmet = require('helmet')//Import Helmet (protection serveur qui cache infos)

const app = express()//Initialise Express
app.use(helmet())//Mets le casque de sécurité
app.use(cors({ origin: 'https://portfolio-laurent-ahlsweh.vercel.app' }))//Active videur (Cors) => autorise échanges
app.use(express.json())//Traducteur Express JSON

app.get('/api/test', (req, res) => {//Route TEST
  res.json({ message: "Le serveur Backend est bien allumé et sécurisé !" })//Renvoi réponse format JSON
})

app.post('/api/contact', (req, res) => {//Route données formulaire
  const { nom, email, message } = req.body

  if (!nom || !email || !message) {//Si champs vides
    return res.status(400).json({ erreur: "Tous les champs sont obligatoires." })//Renvoie erreur 400 (Bad Request)
  }

  if (!email.includes('@')) {//Si email contient @
    return res.status(400).json({ erreur: "Le format de l'email est invalide." })
  }

  console.log("Nouveau message reçu !")
  console.log("Nom :", nom)
  console.log("Email :", email)
  console.log("Message :", message)

  res.status(200).json({ succes: "Votre message a été envoyé avec succès !" })
})

const PORT = 4000//Choix port sur lequel serveur écoute (4000)

app.listen(PORT, () => {//Allume serveur
  console.log(`Le serveur est allumé sur http://localhost:${PORT}`)//Message terminal quand serveur prêt
})