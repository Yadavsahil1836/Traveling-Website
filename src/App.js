import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Home from './routes/Home'
import About from './routes/About'
import Tours from './routes/Tours'
import Contacts from './routes/Contact'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Tours />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
