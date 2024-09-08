
// import React, { useState } from 'react';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: ''
//   });

//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);  // Reset any previous errors
//     try {
//       const response = await axios.post('http://localhost:3000', formData);
//       if (response && response.data) {
//         console.log('Server response:', response.data);
//       } else {
//         console.log('No data received');
//       }
//     } catch (error) {
//       // Handle errors gracefully
//       if (error.response && error.response.data) {
//         console.error('Error response from server:', error.response.data);
//         setError(error.response.data);
//       } else {
//         console.error('Unexpected error:', error.message);
//         setError('An unexpected error occurred.');
//       }
//     }
//   };

//   return (
//     <dialog id="my_modal_3" className="modal ml-7 flex justify-center">
//       <div className="modal-box ml-7 flex">
//         <div className="signup-container">
//           <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_3').close()}>✕</button>
//           <h2 className='text-2xl'>Sign Up</h2> <br />
//           <form onSubmit={handleSubmit}>
//             <div className="form-group text-lg">
//               <label htmlFor="username" className='font-bold'>Username:</label> <br />
//               <input className='border rounded text-xl s'
//                 type="text"
//                 id="username"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 required
//               />
//             </div> <br />
//             <div className="form-group text-lg">
//               <label htmlFor="email">Email:</label> <br />
//               <input className='border rounded text-xl s'
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div> <br />
//             <div className="form-group text-lg ">
//               <label htmlFor="password">Password:</label> <br />
//               <input className='border rounded text-xl s'
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </div> <br />
//             <button type="submit" className='mr-24 text-bold bg-pink-500 rounded text-white py-1 px-2 text-lg'>Sign Up</button>
//           </form>
//           {error && <div className="text-red-500 mt-4">{error}</div>}
//         </div>
//       </div>
//     </dialog>
//   );
// };

// export default Signup;


// import React, { useState } from 'react';
// import api from '../services/api'; // Importing the axios instance

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: ''
//   });

//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);  // Reset any previous errors

//     try {
//       // Sending POST request to the backend
//       const response = await api.post('/auth/register', formData);

//       // Handle successful signup, e.g., showing a success message or redirecting
//       if (response && response.data) {
//         console.log('Signup successful:', response.data);
//         // You can add further actions, like closing the modal or redirecting the user
//       } else {
//         console.log('No data received');
//       }
//     } catch (error) {
//       // Handle errors gracefully
//       if (error.response && error.response.data) {
//         console.error('Error response from server:', error.response.data);
//         setError(error.response.data.message);
//       } else {
//         console.error('Unexpected error:', error.message);
//         setError('An unexpected error occurred.');
//       }
//     }
//   };

//   return (
//     <dialog id="my_modal_3" className="modal ml-7 flex justify-center">
//       <div className="modal-box ml-7 flex">
//         <div className="signup-container">
//           <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_3').close()}>✕</button>
//           <h2 className='text-2xl'>Sign Up</h2> <br />
//           <form onSubmit={handleSubmit}>
//             <div className="form-group text-lg">
//               <label htmlFor="username" className='font-bold'>Username:</label> <br />
//               <input className='border rounded text-xl s'
//                 type="text"
//                 id="username"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 required
//               />
//             </div> <br />
//             <div className="form-group text-lg">
//               <label htmlFor="email">Email:</label> <br />
//               <input className='border rounded text-xl s'
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div> <br />
//             <div className="form-group text-lg ">
//               <label htmlFor="password">Password:</label> <br />
//               <input className='border rounded text-xl s'
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </div> <br />
//             <button type="submit" className='mr-24 text-bold bg-pink-500 rounded text-white py-1 px-2 text-lg'>Sign Up</button>
//           </form>
//           {error && <div className="text-red-500 mt-4">{error}</div>}
//         </div>
//       </div>
//     </dialog>
//   );
// };

// export default Signup;


// import React from 'react'
// import { Link } from 'react-router-dom'

// function sign() {
//   return (
//  <>
//  <div className='flex h-screen items-center justify-center '>
//  <div id="my_modal_2" className="border shadow-md w-[450px]">
//   <div className="model-box">
 
//   <div className="login-model flex model-box">
//     <form method='dialog'>
//       <Link to="/"
//       className='btn btn-sm btn-circle btn-ghost font-bold '>
//       X
//       </Link>
//     </form>
//           <form  className='font-bold ml-14  '>
//             <h1 className='font-bold text-xl mt-2'> Sing up</h1> <br />
//             <span>Name</span> <br />
//             <input className='border rounded text-xl s' type="email"  placeholder="Enter email" />
//             <br /> <br />
//             <label>Email:</label> <br />
//             <input className='border rounded text-xl s' type="email"  placeholder="Enter email" />
//             <br /> <br />
//             <label>Password:</label>
//             <br />
//             <input className=' text-xl border rounded' type="password"  placeholder="Password" />
//             <br />
//           <div className='flex justify-around mt-4'>
//           <button className='  mr-24 text-bold  bg-pink-500 px-3 py-1 rounded'>  Sign up</button>
//            <p> Have account? <Link to="/" className='ml-2 underline text-blue-500 mr-2'> Login </Link></p>
//            </div>
//           </form>
          
//         </div>
//   </div>
//   <form method="dialog" className="modal-backdrop">
//     <button>close</button>
//   </form>
// </div>
//    </div></>
//   )
// }

// export default sign





// import React, { useState } from 'react';
// import axios from 'axios';
// // import './Signup.css';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: ''
//   });

//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);  // Reset any previous errors
//     try {
//       const response = await axios.post('http://localhost:3000', formData);
//       if (response && response.data) {
//         console.log('Server response:', response.data);
//       } else {
//         console.log('No data received');
//       }
//     } catch (error) {
//       // Handle errors gracefully
//       if (error.response && error.response.data) {
//         console.error('Error response from server:', error.response.data);
//         setError(error.response.data);
//       } else {
//         console.error('Unexpected error:', error.message);
//         setError('An unexpected error occurred.');
//       }
//     }
//   };

//   return (
//     <dialog id="my_modal_3" className="modal ml-7 flex justify-center">
//       <div className="modal-box ml-7 flex">
//         <div className="signup-container">
//           <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_3').close()}>✕</button>
//           <h2 className='text-2xl'>Sign Up</h2> <br />
//           <form onSubmit={handleSubmit}>
//             <div className="form-group text-lg">
//               <label htmlFor="username" className='font-bold'>Username:</label> <br />
//               <input className='border rounded text-xl s'
//                 type="text"
//                 id="username"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 required
//               />
//             </div> <br />
//             <div className="form-group text-lg">
//               <label htmlFor="email">Email:</label> <br />
//               <input className='border rounded text-xl s'
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div> <br />
//             <div className="form-group text-lg ">
//               <label htmlFor="password">Password:</label> <br />
//               <input className='border rounded text-xl s'
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </div> <br />
//             <button type="submit" className='mr-24 text-bold bg-pink-500 rounded text-white py-1 px-2 text-lg'>Sign Up</button>
//           </form>
//           {error && <div className="text-red-500 mt-4">{error}</div>}
//         </div>
//       </div>
//     </dialog>
//   );
// };

// export default Signup;


import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);  // Reset any previous errors
    try {
      // const response = await axios.post('http://localhost:3000', formData);
      // if (response && response.data) {
      //   console.log('Server response:', response.data);
      // } else {
      //   console.log('No data received');
      // }
    } catch (error) {
      // Handle errors gracefully
      if (error.response && error.response.data) {
        console.error('Error response from server:', error.response.data);
        setError(error.response.data);
      } else {
        console.error('Unexpected error:', error.message);
        setError('An unexpected error occurred.');
      }
    }
  };

  return (
    <dialog id="my_modal_3" className="modal ml-7 flex justify-center">
      <div className="modal-box ml-7 flex">
        <div className="signup-container">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_3').close()}>✕</button>
          <h2 className='text-2xl'>Sign Up</h2> <br />
          <form onSubmit={handleSubmit}>
            <div className="form-group text-lg">
              <label htmlFor="username" className='font-bold'>Username:</label> <br />
              <input className='border rounded text-xl s'
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div> <br />
            <div className="form-group text-lg">
              <label htmlFor="email">Email:</label> <br />
              <input className='border rounded text-xl s'
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div> <br />
            <div className="form-group text-lg ">
              <label htmlFor="password">Password:</label> <br />
              <input className='border rounded text-xl s'
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div> <br />
            <button type="submit" className='mr-24 text-bold bg-pink-500 rounded text-white py-1 px-2 text-lg'>Sign Up</button>
          </form>
          {error && <div className="text-red-500 mt-4">{error}</div>}
        </div>
      </div>
    </dialog>
  );
};

export default Signup;