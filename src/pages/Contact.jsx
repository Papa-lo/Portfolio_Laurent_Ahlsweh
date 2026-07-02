import "../styles/Contact.scss"
import TextField from '@mui/material/TextField'//Composant MUI pour champs formulaire (accessibilité)
import Button from '@mui/material/Button'//Composant MUI pour boutons

const Contact = () => {
  return (

    <section className="contact">
      <div className="contact_container">
        
        <h2>Me contacter</h2>

        <form className="contact_form" action="#" method="POST">
          
          <div className="contact_field">{/*field : champ*/}
            {/*Groupe Nom - MUI gère label automatiquement*/}
            <TextField
              id="nom"
              name="nom"
              label="Votre nom"
              variant="standard"
              required
              fullWidth
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
            />
          </div>

          <Button type="submit" variant="contained" className="contact_bouton">
            Envoyer le message
          </Button>

        </form>
        
      </div>
    </section>
  )
}

export default Contact