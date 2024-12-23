import React, { useState } from 'react'
import './ContactFormStyles.css'

function ContactForm() {
  const [messageSent, setMessageSent] = useState(false)
  const [error, setError] = useState(false)

  const handleFormSubmit = async e => {
    e.preventDefault()
    setMessageSent(false)
    setError(false)

    const formData = new FormData(e.target)
    formData.append('access_key', 'b2513cb7-18b2-43c9-95de-e2352a32c194')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        setMessageSent(true)
        e.target.reset() // Reset the form after submission
      } else {
        setError(true)
      }
    } catch (error) {
      setError(true)
    }
  }

  return (
    <div className="contact-form-container">
      <h1>Send a message to us!</h1>
      <form onSubmit={handleFormSubmit}>
        {/* Hidden input for Web3Forms Access Key */}

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
      {error && <p>Something went wrong. Please try again later.</p>}
    </div>
  )
}

export default ContactForm
