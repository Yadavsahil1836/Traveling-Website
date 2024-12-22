import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import FormateDesign from './Formatedesgin'
import Destination from './Tourinfo/Destination'

function Tours() {
  return (
    <>
      <main>
        <Navbar />
        <FormateDesign
          cName="hero-mid"
          heroImg="https://www.careforthefamily.org.uk/wp-content/uploads/2022/04/journey-changer-1.jpg"
          title="Tours With Travelo"
          text="Discover the beauty of new destinations and create unforgettable memories with our expert travel guidance."
          btnClass="hide"
        />
        <Destination />
        <Footer />
      </main>
    </>
  )
}
export default Tours
