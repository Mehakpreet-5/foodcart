


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useForm } from "react-hook-form";
// import Signup from "../components/Signup.jsx";


// function Login() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => console.log(data);

//   return (
//     <>
//       <div>
//         <dialog id="my_modal_2" className="modal">
      
//             <div className="modal-box flex justify-center">
//               <form onSubmit={handleSubmit(onSubmit)} className='font-bold ml-14'>
//                 <h1 className='font-bold text-orange-500 text-3xl'>Login</h1> <br />
//                 <div>
//                   <label className="text-lg">Email:</label> <br />
//                   <input className='border rounded text-xl s'
//                     type="email"
//                     placeholder="Enter email"
//                     {...register("EmailRequired", { required: true })}
//                   /> <br />
//                   {errors.EmailRequired && (<span>This field is required</span>)}
//                 </div>
//                 <br />
//                 <div>
//                   <label className="text-lg">Password:</label>
//                   <br />
//                   <input className='text-xl border rounded'
//                     type="password"
//                     placeholder="Password"
//                     {...register("Password", { required: true })}
//                   /> <br />
//                   {errors.Password && (<span>This field is required</span>)}
//                 </div>
//                 <br />
//                 <div className='flex justify-around mt-4'>
//                   <button className='mr-24 text-bold bg-orange-400 rounded text-white py-2 px-2 text-lg'>Login</button>
//                   <h1 className="text-lg">
//                     Not registered? 
//                     <Link to="#" className='ml-2 underline text-blue-500' onClick={() => document.getElementById('my_modal_3').showModal()}>
//                       Signup
//                     </Link>
//                   </h1>
//                 </div>
//               </form>
//             </div>
       
//           <form method="dialog" className="modal-backdrop">
//             <button>Close</button>
//           </form>
//         </dialog>
//         <Signup />
//       </div>
//     </>
//   );
// }

// export default Login;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useForm } from "react-hook-form";
// import api from '../services/api'; // Importing axios instance
// import Signup from "../components/Signup.jsx";

// function Login() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   // Function to handle form submission
//   const onSubmit = async (data) => {
//     try {
//       // Sending POST request to the backend
//       const response = await api.post('/auth/login', {
//         email: data.EmailRequired,
//         password: data.Password,
//       });

//       // Handle successful login, e.g., saving the token
//       console.log('Login successful:', response.data);
//       // You might want to save the token and redirect the user here
//       localStorage.setItem('token', response.data.token);

//     } catch (error) {
//       // Handle errors, e.g., incorrect credentials
//       console.error('Login failed:', error.response.data.message);
//       alert('Login failed: ' + error.response.data.message);
//     }
//   };

//   return (
//     <>
//       <div>
//         <dialog id="my_modal_2" className="modal">
//           <div className="modal-box flex justify-center">
//             <form onSubmit={handleSubmit(onSubmit)} className='font-bold ml-14'>
//               <h1 className='font-bold text-orange-500 text-3xl'>Login</h1> <br />
//               <div>
//                 <label className="text-lg">Email:</label> <br />
//                 <input className='border rounded text-xl'
//                   type="email"
//                   placeholder="Enter email"
//                   {...register("EmailRequired", { required: true })}
//                 /> <br />
//                 {errors.EmailRequired && (<span>This field is required</span>)}
//               </div>
//               <br />
//               <div>
//                 <label className="text-lg">Password:</label>
//                 <br />
//                 <input className='text-xl border rounded'
//                   type="password"
//                   placeholder="Password"
//                   {...register("Password", { required: true })}
//                 /> <br />
//                 {errors.Password && (<span>This field is required</span>)}
//               </div>
//               <br />
//               <div className='flex justify-around mt-4'>
//                 <button className='mr-24 text-bold bg-orange-400 rounded text-white py-2 px-2 text-lg'>Login</button>
//                 <h1 className="text-lg">
//                   Not registered? 
//                   <Link to="#" className='ml-2 underline text-blue-500' onClick={() => document.getElementById('my_modal_3').showModal()}>
//                     Signup
//                   </Link>
//                 </h1>
//               </div>
//             </form>
//           </div>
//           <form method="dialog" className="modal-backdrop">
//             <button>Close</button>
//           </form>
//         </dialog>
//         <Signup />
//       </div>
//     </>
//   );
// }

// export default Login;


import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Signup from "../components/Signup.jsx";


function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div>
        <dialog id="my_modal_2" className="modal">
      
            <div className="modal-box flex justify-center">
              <form onSubmit={handleSubmit(onSubmit)} className='font-bold ml-14'>
                <h1 className='font-bold text-orange-500 text-3xl'>Login</h1> <br />
                <div>
                  <label className="text-lg">Email:</label> <br />
                  <input className='border rounded text-xl s'
                    type="email"
                    placeholder="Enter email"
                    {...register("EmailRequired", { required: true })}
                  /> <br />
                  {errors.EmailRequired && (<span>This field is required</span>)}
                </div>
                <br />
                <div>
                  <label className="text-lg">Password:</label>
                  <br />
                  <input className='text-xl border rounded'
                    type="password"
                    placeholder="Password"
                    {...register("Password", { required: true })}
                  /> <br />
                  {errors.Password && (<span>This field is required</span>)}
                </div>
                <br />
                <div className='flex justify-around mt-4'>
                  <button className='mr-24 text-bold bg-orange-400 rounded text-white py-2 px-2 text-lg'>Login</button>
                  <h1 className="text-lg">
                    Not registered? 
                    <Link to="#" className='ml-2 underline text-blue-500' onClick={() => document.getElementById('my_modal_3').showModal()}>
                      Signup
                    </Link>
                  </h1>
                </div>
              </form>
            </div>
       
          <form method="dialog" className="modal-backdrop">
            <button>Close</button>
          </form>
        </dialog>
        <Signup />
      </div>
    </>
  );
}

export default Login;