import React, { useState } from 'react';

const Counter = () => {
  const [bgColor1, setBgColor1] = useState('rgb(255, 255, 255)'); // Initializing background color to white
  const [bgColor2, setBgColor2] = useState('rgb(255, 255, 255)'); // Initializing background color to white
  const [bgColor3, setBgColor3] = useState('rgb(255, 255, 255)'); // Initializing background color to white
  const [bgColor4, setBgColor4] = useState('rgb(255, 255, 255)'); // Initializing background color to white
  const [bgColor5, setBgColor5] = useState('rgb(255, 255, 255)'); // Initializing background color to white
  
  // Function to generate a random color
  const getRandomColor = () => {
    const x = Math.floor(Math.random() * 256); // Random value for red (0-255)
    const y = Math.floor(Math.random() * 256); // Random value for green (0-255)
    const z = Math.floor(Math.random() * 256); // Random value for blue (0-255)
    const v = Math.floor(Math.random() * (101 - 41)) + 40; // Random value for alpha (0-1)

    // Generate an RGBA color string
    return `rgba(${x}, ${y}, ${z}, ${v}%)`;
  }


  




  // Function to change background color when the button is clicked
  const changeColor = () => {
    setBgColor1(getRandomColor()); // Set a new random background color
    setBgColor2(getRandomColor()); // Set a new random background color
    setBgColor3(getRandomColor()); // Set a new random background color
    setBgColor4(getRandomColor()); // Set a new random background color
    setBgColor5(getRandomColor()); // Set a new random background color
  };

  // Console log each color to see the current state
  console.log(bgColor1, bgColor2, bgColor3, bgColor4, bgColor5);

  return (
    <div style={{ padding: '20px', transition: 'background-color 0.3s ease' }} className='flex items-center flex-col'>
      <div className='h-full w-full'>
      <button onClick={changeColor} className={"bg-black text-white rounded-sm m-5 p-5 h-full w-[200px]"}>
        Generate Color
      </button>
     
        <div style={{ backgroundColor: bgColor1, height: '100px', width: 'calc(100vw - 10px)', margin: '10px' }}>
          {bgColor1}
        </div>
        <div style={{ backgroundColor: bgColor2, height: '100px', width: '100vw', margin: '10px' }}>
          {bgColor2}
        </div>
        <div style={{ backgroundColor: bgColor3, height: '100px', width: '100vw', margin: '10px' }}>
          {bgColor3}
        </div>
        <div style={{ backgroundColor: bgColor4, height: '100px', width: '100vw', margin: '10px' }}>
          {bgColor4}
        </div>
        <div style={{ backgroundColor: bgColor5, height: '100px', width: '100vw', margin: '10px' }}>
          {bgColor5}
        </div>
      </div>
    </div>
  );
};

export default Counter;
