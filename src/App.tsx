import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBarComponent from './components/NavBar'
import Wizard from './pages/Wizard'
import Summary from './pages/Summary'
import './assets/styles.css'

function App() {

  return (
    <>
      <NavBarComponent />
      <Router>
        <Routes>
          <Route path='/' element={<Wizard />} />
          <Route path='/summary' element={<Summary />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
