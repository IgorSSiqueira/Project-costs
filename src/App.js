import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import NewProject from './components/pages/NewProject'

import Container from './components/layout/Conainer'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import Projects from './components/pages/Projects'


function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path='/'           element={<Home />}/>
          <Route exact path='/projects'   element={<Projects />}/>
          <Route exact path='/company'    element={<Company />}/>
          <Route exact path='/contact'    element={<Contact />}/>
          <Route exact path='/newproject' element={<NewProject />}/>
        </Routes>
      </Container>
      <Footer />
    </Router>
  )
}

export default App