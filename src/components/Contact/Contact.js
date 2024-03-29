import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email || !contact.phone) return null

  return (
    <section className='section contact center' id='contact'>
      <div className='contact__desc'>
        <h2>In need of a Developer?</h2>
        <p>I'm currently available for work.</p>
        <a href={`mailto:${contact.email}`}>
          <span type='button' className='btn btn--outline'>
            Send a message
          </span>
        </a>
      </div>
      <div className='contact__info'>
        <a href={`tel:${contact.phone}`}>
          {contact.phone}
        </a>
        <a href={`mailto:${contact.email}`}>
          {contact.email}
        </a>
      </div>
    </section>
  )
}

export default Contact
