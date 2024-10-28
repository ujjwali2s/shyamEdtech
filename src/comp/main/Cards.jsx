import React from 'react';
import { cardContent } from "../../assets/asset"; // Ensure this is correctly imported
import Button from '../../assets/Button'; // Ensure Button component is correctly imported

const Cards = () => {
  return (
    <div className='flex items-center justify-center flex-col w-full bg-black'>
      <h2 className='text-green-500 p-2 m-2 text-4xl max-sm:text-xl'>This is our Service Card</h2>
      
      <div className='justify-center items-center grid grid-cols-2 gap-4 max-sm:grid-cols-1'>
        {cardContent().map((card) => (
          <div key={card.id} className={`${card.classN}  m-2 p-2 w-[300px] rounded-[50px]   border-4 h-auto max-sm:w-[260px]   `}>
            <div className='flex'>
              <img src={card.url} alt={card.title} className='w-14 h-14 ml-1' />
              <h1 className='m-3 uppercase'>{card.title}</h1>
            </div>
            
            <div className='m-4 relative h-[200px] overflow-hidden'>
              <div className="slide-card">
                <div className="slide-card-inner">
                  <div className="slide-card-front font-code ">
                    <p>{card.first}</p>
                  </div>
                  <div className="slide-card-back bg-transparent font-mono">
                    <p>{card.second}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

     
     
    </div>
  );
};

export default Cards;
