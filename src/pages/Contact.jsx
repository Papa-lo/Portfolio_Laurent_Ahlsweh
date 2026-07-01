import './Contact.scss'

const Contact = () => {
  return (

    <section className="contact">
      <div className="contact_container">
        
        <h2>Me contacter</h2>

        <form className="contact_form" action="#" method="POST">
          
          <div className="contact_field">{/*field : champ*/}
            <label htmlFor="nom">Votre nom</label>
            <input type="text" id="nom" name="nom" required />
          </div>

          <div className="contact_field">
            <label htmlFor="email">Votre adresse e-mail</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="contact_field">
            <label htmlFor="message">Votre message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>

          <button type="submit" className="contact_bouton">
            Envoyer le message
          </button>

        </form>
      </div>
    </section>
  )
}

export default Contact