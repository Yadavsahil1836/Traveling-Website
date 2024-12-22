import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutImage from './images/About.jpg'
import FormateDesign from './Formatedesgin'
import About_details from './AboutData'
// eslint-disable-next-line
function About() {
  return (
    <>
      <main>
        <Navbar />
        <FormateDesign
          cName="formatedde-hero-Mid"
          heroImg={AboutImage}
          title="About"
          text="Learn more about us!"
          url="#"
          btnClass="hide"
          buttonText="Explore"
        />

        <About_details />
        <Footer />
      </main>
    </>
  )
}

export default About
