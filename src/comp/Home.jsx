import React from 'react'
import Services from './main/Services'
import Cards from './main/Cards'
import Testimonial from './main/Testimonial.jsx'
import Award from './main/Award.jsx'

const Home = () => {
  return (
    <div className='bg-slate-300'>
      <Services/>
      <Cards/>
      <Testimonial/>
      <Award/>
    </div>
  )
}

export default Home
