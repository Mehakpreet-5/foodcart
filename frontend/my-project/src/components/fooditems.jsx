

import React from 'react';
import Dosa from '../assets/download..5.jpg';

// Sample food data
const foodItems = [
  { name: 'Dosa', image: Dosa },
  { name: 'Pizza', image: Dosa },
  { name: 'Burger', image: Dosa },
  { name: 'Chole Bhature', image: Dosa },
  { name: 'Rolls', image: Dosa },
  { name: 'Indian', image: Dosa },
  { name: 'Chinese', image: Dosa },
  { name: 'Paratha', image: Dosa },
];

const FoodItems = () => {
  const handleAddToOrder = (item) => {
    // Handle adding the item to the order
    console.log(`${item.name} added to order`);
  };

  const renderFoodItem = (item, index) => (
    <div key={index} className="w-24">
      <img 
        src={item.image} 
        alt={item.name} 
        className='btn btn-ghost btn-circle avatar h-20 w-20 
       bg-orange-500 shadow-[0_0_15px_1px_rgba(247,161,91,0.973)]' 
      />
      <h2 className="card-title">{item.name}</h2>
    </div>
  );

  const renderMenuItem = (item, index) => (
    <div key={index} className="m-10 ml-20 border rounded shadow-2xl cursor-pointer
     transition transform duration-300 hover:scale-105 active:scale-110">
      <figure className="relative">
        <img src={item.image} alt={item.name} className='h-48 w-44 border rounded 
        shadow-2xl justify-center flex m-2 ml-6' />
        {/* Add to order button */}
        <button 
  onClick={() => handleAddToOrder(item)}
  className="absolute bottom-3 right-3 w-8 h-7 bg-white
   text-orange-500 text-2xl rounded-full flex items-center 
   justify-center hover:bg-orange-500 hover:text-white transition-colors 
   duration-300 mr-5"
>
  +
</button>

      </figure>
      <div className="ml-5 mr-4 m-2">
        <div className='flex space-x-14'>
          <h2 className="text-2xl">{item.name}</h2>
          {/* Rating */}
          <div className="rating rating-xs mt-3">
            <input type="radio" name={`rating-${index}`} className="mask mask-star-2 bg-orange-400" />
            <input name={`rating-${index}`} type="radio" className="mask mask-star-2 bg-orange-400" defaultChecked />
            <input type="radio" name={`rating-${index}`} className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name={`rating-${index}`} className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name={`rating-${index}`} className="mask mask-star-2 bg-orange-400" />
          </div>
        </div>
        <p className='text-xs mt-2'>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <h1 className='text-orange-500'>$10</h1>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className='flex justify-center space-x-12 '>
        {foodItems.map(renderFoodItem)}
      </div>

      <br /> <br /> 

      {/* Menu items section */}
      <div className=''> 
        <h1 className='font-bold text-2xl m-8'>Types of these categories</h1> 
        <br /> 
        <div className='grid grid-cols-4 gap-4 justify-center border rounded shadow-xl'>
          {foodItems.map(renderMenuItem)}
        </div>
      </div>
    </>
  );
}

export default FoodItems;
