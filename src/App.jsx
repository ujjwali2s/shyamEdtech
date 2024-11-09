import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './comp/Navbar'

import Footer from './comp/Footer'
import CursorAnimation from "./assets/CursorAnimation"
import Home from './comp/Home'
import About from './comp/About.jsx'
import Contact from './comp/Contact.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
        <CursorAnimation />
      <Navbar/>
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
