// // Section3.jsx
// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Hook for navigation

// const Section3 = () => {
//   const navigate = useNavigate();

//   const handleCardClick = (route) => {
//     navigate(route); // Navigate to the specified route
//   };

//   return (
//     <div className="flex justify-center space-x-4">
//       <div
//         className="flex-1 bg-gray-200 p-4 cursor-pointer"
//         onClick={() => handleCardClick('/order-medicine')}
//       >
//         <h2 className="text-xl font-bold">Card 1</h2>
//         {/* Content for Card 1 */}
//       </div>
//       <div
//         className="flex-1 bg-gray-200 p-4 cursor-pointer"
//         onClick={() => handleCardClick('/order-by-prescription')}
//       >
//         <h2 className="text-xl font-bold">Card 2</h2>
//         {/* Content for Card 2 */}
//       </div>
//     </div>

//     // <div className="container-fluid bg-white p-5">
        
//     //     <div className="p-5 row">
//     //       <div className="g-grid gap-5 d-flex align-items-center">
//     //         <div className="card" style={{ width: '18rem' }}>
//     //           <img src="hm4.jfif" className="card-img-top" alt="press1" />
//     //           <div className="card-body">
//     //             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     //           </div>
//     //         </div>
//     //         <div className="card" style={{ width: '18rem' }}>
//     //           <img src="hm2.jfif" className="card-img-top" alt="press2" />
//     //           <div className="card-body">
//     //             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//   );
// };

// export default Section3;
