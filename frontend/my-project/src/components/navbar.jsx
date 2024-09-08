import React from 'react';
import { Link } from 'react-router-dom';
import Login from './login.jsx';
import Signup from './Signup.jsx';
import Order from './order.jsx';
import Products from './cart.jsx'
function Navbar() {
  const openModal = () => {
    const modal = document.getElementById('my_modal_2');
    if (modal) {
      modal.showModal();
    }
  };
  return (
    <div className="fixed top-0  w-full bg-white bg-opacity-50 text-black p-1 ml-3 mr-3">
      <div className="flex justify-between items-center ">
       <h1 className="text-3xl text-orange-500 font-bold ml-20">Tomato </h1>
        <ul className="menu menu-horizontal  flex text-lg 
        hover:text-gray-400 font-bold">
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/about" >About</Link></li>
          <li> <Link to="/menu">Menu</Link></li>
          <li> <Link to="/cart"> Cart</Link></li>
          <li> <Link to="/login">
            <button className="bg-black text-white py-1 px-4 rounded hover:bg-gray-700"
             onClick={openModal}>
              Login  
            </button> </Link>
          </li>
        </ul>
         
 {/* search profile div */}
    <div className=' flex justify-center space-x-4'> <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div> </div>

    {/* orders */}
    <Order className='' />
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mr-20">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div> </div>
     </div>  </div>
    
  );
}

export default Navbar;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import Login from './login.jsx';
// import Signup from './Signup.jsx';

// function Navbar() {
//   const openModal = () => {
//     const modal = document.getElementById('my_modal_2');
//     if (modal) {
//       modal.showModal();
//     }
//   };

//   return (
//     <div className="fixed top-0 w-full bg-white bg-opacity-50 text-black p-1 ml-3 mr-3">
//       <div className="flex justify-between items-center">
//         <h1 className="text-3xl text-orange-500 font-bold ml-20">Tomato</h1>
//         <ul className="menu menu-horizontal flex text-lg hover:text-gray-400 font-bold">
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/menu">Menu</Link></li>
//           <li>
//             <Link to="/login">
//               <button
//                 className="bg-black text-white py-1 px-4 rounded hover:bg-gray-700"
//                 onClick={openModal}
//               >
//                 Login
//               </button>
//             </Link>
//           </li>
//         </ul>
//         {/* search profile div */}
//         <div className='flex justify-center items-center space-x-4'>
//           {/* Order button */}
//           <Link to="/order">
//             <button className="bg-orange-500 text-white py-1 px-4 rounded hover:bg-orange-600">
//               Order
//             </button>
//           </Link>
//           {/* Search input */}
//           <div className="flex-none gap-2">
//             <div className="form-control">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="input input-bordered w-24 md:w-auto"
//               />
//             </div>
//           </div>
//           {/* Orders dropdown */}
//           <div className="dropdown dropdown-end">
//             <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mr-20">
//               <div className="w-10 rounded-full">
//                 <img
//                   alt="Profile"
//                   src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
//                 />
//               </div>
//             </div>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//             >
//               <li>
//                 <a className="justify-between">
//                   Profile
//                   <span className="badge">New</span>
//                 </a>
//               </li>
//               <li><a>Settings</a></li>
//               <li><a>Logout</a></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
