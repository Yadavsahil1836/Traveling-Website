import Hero from '../components/Hero'
import Services from '../components/Services'
import Recommend from '../components/Recommend'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Services />
        <Recommend />
        <Testimonials />
        <Footer />
      </main>
    </>
  )
}

export default Home
