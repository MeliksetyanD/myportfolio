import './styles/main.css'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Contacts from './pages/Contacts'
import Home from './pages/Home'
import Project from './pages/Project'
import Projects from './pages/Projects'
import ScrollToTop from './utils/scrtollToTop'

function App() {
	return (
		<div className='App'>
			<Router>
				<ScrollToTop />
				<Navbar />
				<Routes>
					<Route path='/myportfolio' element={<Home />} />
					<Route path='/myportfolio/projects' element={<Projects />} />
					<Route path='/project/:id' element={<Project />} />
					<Route path='/myportfolio/contacts' element={<Contacts />} />
				</Routes>

				<Footer />
			</Router>
		</div>
	)
}

export default App
