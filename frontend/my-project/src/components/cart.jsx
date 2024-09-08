// import React from 'react'

// function cart() {
//   return (
// <>
// <div>
    
// </div>
// </>
//   )
// }

// export default cart


// 'use client'

// import { useState } from 'react'
// import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
// import { XMarkIcon } from '@heroicons/react/24/outline'

// const products = [
//   {
//     id: 1,
//     name: 'Throwback Hip Bag',
//     href: '#',
//     color: 'Salmon',
//     price: '$90.00',
//     quantity: 1,
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
//     imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
//   },
//   {
//     id: 2,
//     name: 'Medium Stuff Satchel',
//     href: '#',
//     color: 'Blue',
//     price: '$32.00',
//     quantity: 1,
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
//     imageAlt:
//       'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
//   },
//   // More products...
// ]

// export default function Example() {
//   const [open, setOpen] = useState(true)

//   return (
//     <Dialog open={open} onClose={setOpen} className="relative z-10">
//       <DialogBackdrop
//         transition
//         className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
//       />

//       <div className="fixed inset-0 overflow-hidden">
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
//             <DialogPanel
//               transition
//               className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
//             >
//               <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
//                 <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
//                   <div className="flex items-start justify-between">
//                     <DialogTitle className="text-lg font-medium text-gray-900">Shopping cart</DialogTitle>
//                     <div className="ml-3 flex h-7 items-center">
//                       <button
//                         type="button"
//                         onClick={() => setOpen(false)}
//                         className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
//                       >
//                         <span className="absolute -inset-0.5" />
//                         <span className="sr-only">Close panel</span>
//                         <XMarkIcon aria-hidden="true" className="h-6 w-6" />
//                       </button>
//                     </div>
//                   </div>

//                   <div className="mt-8">
//                     <div className="flow-root">
//                       <ul role="list" className="-my-6 divide-y divide-gray-200">
//                         {products.map((product) => (
//                           <li key={product.id} className="flex py-6">
//                             <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
//                               <img
//                                 alt={product.imageAlt}
//                                 src={product.imageSrc}
//                                 className="h-full w-full object-cover object-center"
//                               />
//                             </div>

//                             <div className="ml-4 flex flex-1 flex-col">
//                               <div>
//                                 <div className="flex justify-between text-base font-medium text-gray-900">
//                                   <h3>
//                                     <a href={product.href}>{product.name}</a>
//                                   </h3>
//                                   <p className="ml-4">{product.price}</p>
//                                 </div>
//                                 <p className="mt-1 text-sm text-gray-500">{product.color}</p>
//                               </div>
//                               <div className="flex flex-1 items-end justify-between text-sm">
//                                 <p className="text-gray-500">Qty {product.quantity}</p>

//                                 <div className="flex">
//                                   <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
//                                     Remove
//                                   </button>
//                                 </div>
//                               </div>
//                             </div>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
//                   <div className="flex justify-between text-base font-medium text-gray-900">
//                     <p>Subtotal</p>
//                     <p>$262.00</p>
//                   </div>
//                   <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
//                   <div className="mt-6">
//                     <a
//                       href="#"
//                       className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
//                     >
//                       Checkout
//                     </a>
//                   </div>
//                   <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
//                     <p>
//                       or{' '}
//                       <button
//                         type="button"
//                         onClick={() => setOpen(false)}
//                         className="font-medium text-indigo-600 hover:text-indigo-500"
//                       >
//                         Continue Shopping
//                         <span aria-hidden="true"> &rarr;</span>
//                       </button>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </DialogPanel>
//           </div>
//         </div>
//       </div>
//     </Dialog>
//   )
// }


import React from 'react';

const CartItem = ({ image, name, size, price, quantity }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md mb-4">
      <div className="flex items-center">
        <img src={image} alt={name} className="w-20 h-20 rounded-lg" />
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-gray-500">{size}</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center border rounded-lg">
          <button className="px-2 py-1">-</button>
          <span className="px-4 py-2">{quantity}</span>
          <button className="px-2 py-1">+</button>
        </div>
        <p className="ml-4 text-lg font-semibold">{price}</p>
        <button className="ml-4 text-red-500">✕</button>
      </div>
    </div>
  );
};

const Cart = () => {
  return (
    <div className="flex justify-center items-start p-8 bg-gray-100">
      <div className="w-2/3">
        <h2 className="text-2xl font-bold mb-6">Cart Items</h2>
        <CartItem
          image="https://via.placeholder.com/80x80.png?text=Shoe1"
          name="Nike Air Max 2019"
          size="36EU - 4US"
          price="259.000 ₭"
          quantity={2}
        />
        <CartItem
          image="https://via.placeholder.com/80x80.png?text=Shoe2"
          name="Nike Air Max 2019"
          size="36EU - 4US"
          price="259.000 ₭"
          quantity={2}
        />
      </div>
      <div className="w-1/3 ml-8 bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <p className="text-gray-500">Subtotal</p>
          <p className="text-lg font-semibold">$129.99</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-500">Shipping</p>
          <p className="text-lg font-semibold">$4.99</p>
        </div>
        <div className="mb-6">
          <p className="text-gray-500">Total</p>
          <p className="text-2xl font-bold">$134.98 USD</p>
          <p className="text-sm text-gray-500">including VAT</p>
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg">Check out</button>
      </div>
    </div>
  );
};

export default Cart;
