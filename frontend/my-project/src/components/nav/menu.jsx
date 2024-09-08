


// import React, { useState } from 'react';
// import Dosa from '../nav/download.5.jpg';
// import Footer from '../footer';

// // Dummy image paths for demonstration
// const categories = {
//   desserts: Dosa,
//   iceCream: Dosa,
//   northIndian: Dosa,
//   chinese: Dosa,
//   korean: Dosa,
//   italian: Dosa,
//   mexican: Dosa,
//   japanese: Dosa,
//   mediterranean: Dosa,
// };

// const foodItems = {
//   desserts: [
//     { name: 'Chocolate Cake', image: Dosa, price: 5 },
//     { name: 'Cheesecake', image: Dosa, price: 6 },
//     { name: 'Brownies', image: Dosa, price: 4 },
//   ],
//   iceCream: [
//     { name: 'Vanilla Ice Cream', image: Dosa, price: 3 },
//     { name: 'Chocolate Ice Cream', image: Dosa, price: 3 },
//     { name: 'Strawberry Ice Cream', image: Dosa, price: 3 },
//   ],
//   northIndian: [
//     { name: 'Paneer Tikka', image: Dosa, price: 8 },
//     { name: 'Butter Chicken', image: Dosa, price: 10 },
//     { name: 'Naan', image: Dosa, price: 2 },
//   ],
//   chinese: [
//     { name: 'Spring Rolls', image: Dosa, price: 5 },
//     { name: 'Fried Rice', image: Dosa, price: 7 },
//     { name: 'Sweet and Sour Chicken', image: Dosa, price: 9 },
//   ],
//   korean: [
//     { name: 'Bibimbap', image: Dosa, price: 12 },
//     { name: 'Kimchi', image: Dosa, price: 4 },
//     { name: 'Korean BBQ', image: Dosa, price: 15 },
//   ],
//   italian: [
//     { name: 'Spaghetti Carbonara', image: Dosa, price: 14 },
//     { name: 'Lasagna', image: Dosa, price: 12 },
//     { name: 'Margherita Pizza', image: Dosa, price: 10 },
//   ],
//   mexican: [
//     { name: 'Tacos', image: Dosa, price: 6 },
//     { name: 'Burritos', image: Dosa, price: 8 },
//     { name: 'Guacamole', image: Dosa, price: 5 },
//   ],
//   japanese: [
//     { name: 'Sushi', image: Dosa, price: 15 },
//     { name: 'Ramen', image: Dosa, price: 12 },
//     { name: 'Tempura', image: Dosa, price: 14 },
//   ],
//   mediterranean: [
//     { name: 'Falafel', image: Dosa, price: 7 },
//     { name: 'Hummus', image: Dosa, price: 5 },
//     { name: 'Gyro', image: Dosa, price: 8 },
//   ],
// };

// const Categories = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//   };

//   const displayedItems = selectedCategory ? foodItems[selectedCategory] : Object.values(foodItems).flat();

//   return (
//     <div className='flex flex-col items-center'>
//       {/* Categories Section */}
//       <div className="flex flex-wrap justify-center gap-12 mt-40 mb-8 ml-44">
//         {Object.keys(categories).map((category) => (
//           <div 
//             key={category}
//             className="flex flex-col items-center cursor-pointer "
//             onClick={() => handleCategoryClick(category)}
//           >
//             <img
//               src={categories[category]}
//               alt={category}
//               className='h-20 w-20 rounded-full bg-orange-500 shadow-md '
//             />
//             <span className="mt-2 text-lg font-medium flex-col items-center ">{category}</span>
//           </div>
//         ))}
//       </div>

//       {/* Food Items Section */}
//       <div className=' gap-4 justify-center border rounded shadow-xl m-12 ml-44'>
//       <div className="  justify-center gap-8 p-4 mt-8 grid grid-cols-4 space-x-6  mb-7 m-5">
//         {displayedItems.map((item, index) => (
//           <div key={index} className="w-56 h-auto border rounded shadow-lg transition-transform transform hover:scale-105 flex flex-col items-center">
//             <img src={item.image} alt={item.name} className='w-48 h-48 object-cover border-b rounded-t mt-2' />
//             <div className="p-4 flex flex-col items-center w-full">
//               <div className="flex justify-between items-center w-full mb-2">
//                 <h2 className="text-xl text-gray-900">{item.name}</h2>
//                 <h1 className='text-orange-500 text-lg'>${item.price}</h1>
//               </div>
//             </div>
//           </div> 
//         ))}
//       </div>
//       </div>
//      <div className='w-full p-7  bottom-3'>  <Footer /></div>
//     </div>
//   );
// };

// export default Categories;


import React, { useState } from 'react';
import Dosa from '../nav/download.5.jpg';
import Footer from '../footer';

// Dummy image paths for demonstration
const categories = {
  desserts: Dosa,
  iceCream: Dosa,
  northIndian: Dosa,
  chinese: Dosa,
  korean: Dosa,
  italian: Dosa,
  mexican: Dosa,
  japanese: Dosa,
  mediterranean: Dosa,
};

const foodItems = {
  desserts: [
    { name: 'Chocolate Cake', image: Dosa, price: 5 },
    { name: 'Cheesecake', image: Dosa, price: 6 },
    { name: 'Brownies', image: Dosa, price: 4 },
    { name: 'Brownies', image: Dosa, price: 4 },
  ],
  iceCream: [
    { name: 'Vanilla Ice Cream', image: Dosa, price: 3 },
    { name: 'Chocolate Ice Cream', image: Dosa, price: 3 },
    { name: 'Strawberry Ice Cream', image: Dosa, price: 3 },
  ],
  northIndian: [
    { name: 'Paneer Tikka', image: Dosa, price: 8 },
    { name: 'Butter Chicken', image: Dosa, price: 10 },
    { name: 'Naan', image: Dosa, price: 2 },
  ],
  chinese: [
    { name: 'Spring Rolls', image: Dosa, price: 5 },
    { name: 'Fried Rice', image: Dosa, price: 7 },
    { name: 'Sweet and Sour Chicken', image: Dosa, price: 9 },
  ],
  korean: [
    { name: 'Bibimbap', image: Dosa, price: 12 },
    { name: 'Kimchi', image: Dosa, price: 4 },
    { name: 'Korean BBQ', image: Dosa, price: 15 },
  ],
  italian: [
    { name: 'Spaghetti Carbonara', image: Dosa, price: 14 },
    { name: 'Lasagna', image: Dosa, price: 12 },
    { name: 'Margherita Pizza', image: Dosa, price: 10 },
  ],
  mexican: [
    { name: 'Tacos', image: Dosa, price: 6 },
    { name: 'Burritos', image: Dosa, price: 8 },
    { name: 'Guacamole', image: Dosa, price: 5 },
  ],
  japanese: [
    { name: 'Sushi', image: Dosa, price: 15 },
    { name: 'Ramen', image: Dosa, price: 12 },
    { name: 'Tempura', image: Dosa, price: 14 },
  ],
  mediterranean: [
    { name: 'Falafel', image: Dosa, price: 7 },
    { name: 'Hummus', image: Dosa, price: 5 },
    { name: 'Gyro', image: Dosa, price: 8 },
  ],
};

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const displayedItems = selectedCategory ? foodItems[selectedCategory] : Object.values(foodItems).flat();

  return (
    <div className='flex flex-col items-center ml-36'>
      {/* Categories Section */}
      <div className="flex flex-wrap justify-center gap-12 mt-40 mb-8">
        {Object.keys(categories).map((category) => (
          <div 
            key={category}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => handleCategoryClick(category)}
          >
         <img
  src={categories[category]}
  alt={category}
  className='h-20 w-20 rounded-full bg-orange-500 transition-transform hover:scale-95'
  style={{ boxShadow: '0 0 15px rgba(255, 165, 0, 0.8)' }}
/>

            <span className="mt-2 text-lg font-medium">{category}</span>
          </div>
        ))}
      </div>

      {/* Food Items Section */}
      <div className='flex flex-col items-center w-full p-4'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-7">
          {displayedItems.map((item, index) => (
            <div key={index} className="w-56 border rounded shadow-lg transition-transform transform hover:scale-105 flex flex-col items-center">
              <img src={item.image} alt={item.name} className='w-48 h-48 object-cover border-b rounded-t mt-2' />
              <div className="p-4 flex flex-col items-center w-full">
                <div className="flex justify-between items-center w-full mb-2">
                  <h2 className="text-xl text-gray-900">{item.name}</h2>
                  <h1 className='text-orange-500 text-lg'>${item.price}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full p-7'>
        <Footer />
      </div>
    </div>
  );
};

export default Categories;
