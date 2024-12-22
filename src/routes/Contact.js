import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ContactForm from './contacts/contactData'
import FormateDesign from './Formatedesgin'

function Contacts() {
  return (
    <main>
      <Navbar />
      <FormateDesign
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Contacts US"
        text="Get in touch with us!"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </main>
  )
}
export default Contacts
