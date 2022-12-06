import './styles/main.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Project from './pages/Project'
import Contacts from './pages/Contacts'
import ScrollToTop from './utils/scrtollToTop'

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/myportfolio" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/myportfolio/projects" element={<Projects />} />
          <Route path="/myportfolio/project/:id" element={<Project />} />
          <Route path="/myportfolio/contacts" element={<Contacts />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  )
}

export default App
