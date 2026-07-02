const express = require('express')//Import Express, framework pour créer le serveur
const cors = require('cors')//Import Cors pour autoriser Frontend (port 5173) à parler au Backend (port 4000)
const helmet = require('helmet')//Import Helmet (protection serveur qui cache infos)

const app = express()//Initialise Express
app.use(helmet())//Mets le casque de sécurité
app.use(cors())//Active videur (Cors) => autorise échanges
app.use(express.json())//Traducteur Express JSON

app.get('/api/test', (req, res) => {//Route TEST
  res.json({ message: "Le serveur Backend est bien allumé et sécurisé !" })//Renvoi réponse format JSON
})

const PORT = 4000//Choix port sur lequel serveur écoute (4000)

app.listen(PORT, () => {//Allume serveur
  console.log(`Le serveur est allumé sur http://localhost:${PORT}`)//Message terminal quand serveur prêt
})