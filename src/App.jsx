import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './comp/Navbar'

import Footer from './comp/Footer'
import CursorAnimation from "./assets/CursorAnimation"
import Home from './comp/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
        <CursorAnimation />
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
