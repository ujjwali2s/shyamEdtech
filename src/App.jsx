import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './comp/Navbar'
import Hero from './comp/Hero'
import Footer from './comp/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
