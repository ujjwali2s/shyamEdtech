import React from 'react';
import Services from './main/Services';
import Cards from './main/Cards';
import Testimonial from './main/Testimonial';
import Award from './main/Award';
import Client from './main/Client';
import ProcessSection from './main/ProcessSection';

const Home = () => {
  return (
    <div className='bg-slate-300'>
      <Services />
      <Cards />
      <Award />
      <Client />
      <ProcessSection />
      <Testimonial />
    </div>
  );
};

export default Home;
