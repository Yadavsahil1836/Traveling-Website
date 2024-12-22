import React, { useState } from 'react'
import './ContactFormStyles.css'

function ContactForm() {
  const [messageSent, setMessageSent] = useState(false)

  const handleFormSubmit = e => {
    e.preventDefault()
    setMessageSent(true)
    e.target.reset() // Reset the form after submission
  }

  return (
    <div className="contact-form-container">
      <h1>Send a message to us!</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea
          name="message"
          placeholder="Message"
          rows="4"
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
      {messageSent && <p>Your message has been received. Thank you!</p>}
    </div>
  )
}

export default ContactForm
