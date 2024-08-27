// import React from "react";
// import CartItem from "./CartItem";
// import { Badge, Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getCart } from "../../../Redux/Customers/Cart/Action";

// const Cart = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const jwt = localStorage.getItem("jwt");
//   const {cart}=useSelector(store=>store);
//   console.log("cart ",cart)

//   useEffect(() => {
//     dispatch(getCart(jwt));
//   }, [jwt]);
  
//   return (
//     <div className="">
//       {cart.cartItems.length>0 && <div className="lg:grid grid-cols-3 lg:px-16 relative">
//         <div className="lg:col-span-2 lg:px-5 bg-white">
//         <div className=" space-y-3">
//           {cart.cartItems.map((item) => (
//             <>
//               <CartItem item={item} showButton={true}/>
//             </>
//           ))}
//         </div>
//       </div>
//       <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
//         <div className="border p-5 bg-white shadow-lg rounded-md">
//           <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
//           <hr />

//           <div className="space-y-3 font-semibold">
//             <div className="flex justify-between pt-3 text-black ">
//               <span>Price ({cart.cart?.totalItem} item)</span>
//               <span>₹{cart.cart.totalPrice}</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Discount</span>
//               <span className="text-green-700">-₹{cart.cart?.discounte}</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Delivery Charges</span>
//               <span className="text-green-700">Free</span>
//             </div>
//             <hr />
//             <div className="flex justify-between font-bold text-lg">
//               <span>Total Amount</span>
//               <span className="text-green-700">₹{cart.cart?.totalDiscountedPrice}</span>
//             </div>
//           </div>

//           <Button
//             onClick={() => navigate("/checkout?step=2")}
//             variant="contained"
//             type="submit"
//             sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
//           >
//             Check Out
//           </Button>
//         </div>
//       </div>
//       </div>}
      
//     </div>
//   );
// };

// export default Cart;


// import React, { useState, useEffect } from "react";
// import CartItem from "./CartItem";
// import { Button, TextField, Card, CardContent, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getCart } from "../../../Redux/Customers/Cart/Action";

// const Cart = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const jwt = localStorage.getItem("jwt");
//   const { cart } = useSelector(store => store);
//   const [imageUrl, setImageUrl] = useState(""); // New state for image URL

//   useEffect(() => {
//     dispatch(getCart(jwt));
//   }, [jwt, dispatch]);

//   // Handle image URL input change
//   const handleImageUrlChange = (event) => {
//     setImageUrl(event.target.value);
//   };

//   // Determine if the checkout button should be enabled
//   const isCheckoutEnabled = imageUrl.trim() !== "";

//   return (
//     <div className="">
//       {/* New Card for Image URL Input */}
//       <div className="lg:px-16 mt-5">
//         <Card className="bg-white shadow-lg rounded-md p-5">
//           <CardContent>
//             <Typography variant="h6" gutterBottom>
//               Upload Prescription
//             </Typography>
//             <TextField
//               label="prescription"
//               fullWidth
//               value={imageUrl}
//               onChange={handleImageUrlChange}
//               placeholder="Enter image URL"
//             />
//           </CardContent>
//         </Card>
//       </div>

//       {cart.cartItems.length > 0 && (
//         <div className="lg:grid grid-cols-3 lg:px-16 relative mt-5">
//           <div className="lg:col-span-2 lg:px-5 bg-white">
//             <div className="space-y-3">
//               {cart.cartItems.map((item) => (
//                 <CartItem item={item} showButton={true} key={item.id} />
//               ))}
//             </div>
//           </div>
//           <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
//             <div className="border p-5 bg-white shadow-lg rounded-md">
//               <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
//               <hr />

//               <div className="space-y-3 font-semibold">
//                 <div className="flex justify-between pt-3 text-black">
//                   <span>Price ({cart.cart?.totalItem} item)</span>
//                   <span>₹{cart.cart.totalPrice}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Discount</span>
//                   <span className="text-green-700">-₹{cart.cart?.discounte}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Delivery Charges</span>
//                   <span className="text-green-700">Free</span>
//                 </div>
//                 <hr />
//                 <div className="flex justify-between font-bold text-lg">
//                   <span>Total Amount</span>
//                   <span className="text-green-700">₹{cart.cart?.totalDiscountedPrice}</span>
//                 </div>
//               </div>

//               <Button
//                 onClick={() => navigate("/checkout?step=2")}
//                 variant="contained"
//                 type="submit"
//                 sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
//                 disabled={!isCheckoutEnabled} // Disable if imageUrl is empty
//               >
//                 Check Out
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;
// import React, { useState, useEffect } from "react";
// import CartItem from "./CartItem";
// import { Button, TextField, Card, CardContent, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getCart } from "../../../Redux/Customers/Cart/Action";

// const Cart = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const jwt = localStorage.getItem("jwt");
//   const { cart } = useSelector(store => store);
//   const [imageFile, setImageFile] = useState(null); // New state for uploaded image

//   useEffect(() => {
//     dispatch(getCart(jwt));
//   }, [jwt, dispatch]);

//   // Handle image file input change
//   // const handleFileChange = (event) => {
//   //   const file = event.target.files[0];
//   //   // Check if the file is a JPG image
//   //   if (file && file.type === "image/jpeg") {
//   //     setImageFile(file);
//   //   } else {
//   //     alert("Please upload a JPG image.");
//   //     setImageFile(null); // Reset the image file if the type is not JPG
//   //   }
//   // };

//   const handleFileChange = async () => {
//     if (!imageFile) return;
    
//     const formData = new FormData();
//     formData.append("prescriptionImage", imageFile);
  
//     try {
//       const response = await fetch("/api/prescription", {
//         method: "POST",
//         body: formData,
//       });
//       if (response.ok) {
//         alert("File uploaded successfully");
//       } else {
//         alert("Error uploading file");
//       }
//     } catch (error) {
//       alert("Error uploading file");
//     }
//   };
  

//   // Determine if the checkout button should be enabled
//   const isCheckoutEnabled = imageFile !== null;

//   return (
//     <div className="">
//       {/* New Card for Image Upload */}
//       <div className="lg:px-16 mt-5">
//         <Card className="bg-white shadow-lg rounded-md p-5">
//           <CardContent>
//             <Typography variant="h6" gutterBottom>
//               Upload JPG Image
//             </Typography>
//             <input
//               type="file"
//               accept=".jpg, .jpeg"
//               onChange={handleFileChange}
//               style={{ display: 'block', marginTop: '1rem' }}
//             />
//             <Button
//               onClick={handleFileChange}
//               variant="contained"
//               type="button"
//               sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
//               disabled={!isCheckoutEnabled} // Disable if no valid image is uploaded
//             >
//               Upload Prescription
//             </Button>
//           </CardContent>
//         </Card>
//       </div>
//       {cart.cartItems.length > 0 && (
//         <div className="lg:grid grid-cols-3 lg:px-16 relative mt-5">
//           <div className="lg:col-span-2 lg:px-5 bg-white">
//             <div className="space-y-3">
//               {cart.cartItems.map((item) => (
//                 <CartItem item={item} showButton={true} key={item.id} />
//               ))}
//             </div>
//           </div>
//           <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
//             <div className="border p-5 bg-white shadow-lg rounded-md">
//               <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
//               <hr />

//               <div className="space-y-3 font-semibold">
//                 <div className="flex justify-between pt-3 text-black">
//                   <span>Price ({cart.cart?.totalItem} item)</span>
//                   <span>₹{cart.cart.totalPrice}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Discount</span>
//                   <span className="text-green-700">-₹{cart.cart?.discounte}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Delivery Charges</span>
//                   <span className="text-green-700">Free</span>
//                 </div>
//                 <hr />
//                 <div className="flex justify-between font-bold text-lg">
//                   <span>Total Amount</span>
//                   <span className="text-green-700">₹{cart.cart?.totalDiscountedPrice}</span>
//                 </div>
//               </div>

//               <Button
//                 onClick={() => navigate("/checkout?step=2")}
//                 variant="contained"
//                 type="submit"
//                 sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
//                 disabled={!isCheckoutEnabled} // Disable if no valid image is uploaded
//               >
//                 Check Out
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;



import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../Redux/Customers/Cart/Action";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const { cartItems = [], cart = {} } = useSelector((store) => store.cart || {});
  const [imageFile, setImageFile] = useState(null); // State for uploaded image

  useEffect(() => {
    dispatch(getCart(jwt));
  }, [jwt, dispatch]);

  // Handle file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "image/jpeg") {
      setImageFile(file);
    } else {
      alert("Please upload a JPG image.");
      setImageFile(null);
    }
  };

  // Handle file upload
  // const handleFileUpload = async () => {
  //   if (!imageFile) return;
  
  //   const formData = new FormData();
  //   formData.append("prescriptionImage", imageFile);
  
  //   try {
  //     const response = await fetch("http://localhost:5454/api/prescription", {
  //       method: "POST",
  //       body: formData,
  //       headers: {
  //         "Authorization": `Bearer ${jwt}` // Include JWT token in headers
  //       }
  //     });
  //     if (response.ok) {
  //       alert("File uploaded successfully");
  //     } else {
  //       alert("Error uploading file");
  //     }
  //   } catch (error) {
  //     alert("Error uploading file");
  //   }
  // };

  const handleFileUpload = async () => {
    if (!imageFile || !cart.id) return; // Ensure there's an id
  
    const formData = new FormData();
    formData.append("prescriptionImage", imageFile);
    formData.append("id", cart.id); // Use id as the parameter name
  
    try {
      const response = await fetch("http://localhost:5454/api/prescription", {
        method: "POST",
        body: formData,
        headers: {
          "Authorization": `Bearer ${jwt}` // Include JWT token in headers
        }
      });
      if (response.ok) {
        alert("File uploaded successfully");
      } else {
        alert("Error uploading file");
      }
    } catch (error) {
      alert("Error uploading file");
    }
  };
  
  
  // Determine if the checkout button should be enabled
  const isCheckoutEnabled = imageFile !== null;

  return (
    <div className="">
      {/* Card for Image Upload */}
      <div className="lg:px-16 mt-5">
        <Card className="bg-white shadow-lg rounded-md p-5">
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Upload Prescription
            </Typography>
            <input
              type="file"
              accept=".jpg, .jpeg"
              onChange={handleFileChange}
              style={{ display: 'block', marginTop: '1rem' }}
            />
            <Button
              onClick={handleFileUpload}
              variant="contained"
              type="button"
              sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
              disabled={!isCheckoutEnabled} // Disable if no valid image is uploaded
            >
              Upload Prescription
            </Button>
          </CardContent>
        </Card>
      </div>
      {Array.isArray(cartItems) && cartItems.length > 0 && (
        <div className="lg:grid grid-cols-3 lg:px-16 relative mt-5">
          <div className="lg:col-span-2 lg:px-5 bg-white">
            <div className="space-y-3">
              {cartItems.map((item, index) => (
                item && item.id ? <CartItem item={item} showButton={true} key={item.id} /> : <div key={index}>Invalid item data</div>
              ))}
            </div>
          </div>
          <div>
          <Button
                onClick={() => navigate("/checkout?step=2")}
                variant="contained"
                type="submit"
                sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
                disabled={!isCheckoutEnabled} // Disable if no valid image is uploaded
              >
                Check Out
              </Button>
          </div>
          {/* <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
            <div className="border p-5 bg-white shadow-lg rounded-md">
              <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
              <hr />
              <div className="space-y-3 font-semibold">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price ({cart.cart?.totalItem || 0} item)</span>
                  <span>₹{cart.cart?.totalPrice || 0}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span className="text-green-700">-₹{cart.cart?.discounte || 0}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span className="text-green-700">Free</span>
                </div>
                <hr />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total Amount</span>
                  <span className="text-green-700">₹{cart.cart?.totalDiscountedPrice || 0}</span>
                </div>
              </div>
              <Button
                onClick={() => navigate("/checkout?step=2")}
                variant="contained"
                type="submit"
                sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
                disabled={!isCheckoutEnabled} // Disable if no valid image is uploaded
              >
                Check Out
              </Button>
            </div>
          </div> */}
          
        </div>
      )}
    </div>
  );
};

export default Cart;




// import React, { useState, useEffect } from "react";
// import CartItem from "./CartItem";
// import { Button, Card, CardContent, Typography } from "@mui/material";
// import { useSelector, useDispatch } from "react-redux";
// // import { removeItemFromCart, uploadPrescription } from '../../Redux/Customers/Cart/Actions';
// // import { removeCartItem ,uploadPrescription} from "../../../Redux/Customers/Cart/Action";
// // import { removeItemFromCart, uploadPrescription } from "../../Redux/Customers/Cart/Action";
// import { useNavigate } from "react-router-dom";

// export default function Cart() {
//   const [prescription, setPrescription] = useState(null);
//   const [uploadStatus, setUploadStatus] = useState('');
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { cartItems } = useSelector((store) => store.cart);
//   const jwt = localStorage.getItem("jwt");

//   useEffect(() => {
//     // Fetch cart items or any necessary data
//   }, []);

//   const handlePrescriptionUpload = () => {
//     if (prescription) {
//       dispatch(uploadPrescription({ prescription, jwt }))
//         .then(() => setUploadStatus('Prescription uploaded successfully.'))
//         .catch(() => setUploadStatus('Failed to upload prescription.'));
//     } else {
//       setUploadStatus('No prescription selected.');
//     }
//   };

//   const handleRemoveItem = (productId) => {
//     dispatch(removeItemFromCart(productId));
//   };

//   return (
//     <div>
//       <Typography variant="h4" gutterBottom>
//         Cart
//       </Typography>
//       {cartItems.length === 0 ? (
//         <Typography variant="h6">Your cart is empty.</Typography>
//       ) : (
//         cartItems.map((item) => (
//           <CartItem
//             key={item.id}
//             item={item}
//             onRemove={() => handleRemoveItem(item.id)}
//           />
//         ))
//       )}
//       <Card>
//         <CardContent>
//           <Typography variant="h6" gutterBottom>
//             Upload Prescription
//           </Typography>
//           <input
//             type="file"
//             onChange={(e) => setPrescription(e.target.files[0])}
//           />
//           <Button onClick={handlePrescriptionUpload} variant="contained">
//             Upload
//           </Button>
//           <Typography color="textSecondary">{uploadStatus}</Typography>
//         </CardContent>
//       </Card>
//       <Button
//         variant="contained"
//         onClick={() => navigate('/checkout')}
//         disabled={cartItems.length === 0}
//       >
//         Proceed to Checkout
//       </Button>
//     </div>
//   );
// }



// import React from "react";
// import CartItem from "./CartItem";
// import { Badge, Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getCart } from "../../../Redux/Customers/Cart/Action";

// const Cart = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const jwt = localStorage.getItem("jwt");
//   const {cart}=useSelector(store=>store);
//   console.log("cart ",cart)

//   useEffect(() => {
//     dispatch(getCart(jwt));
//   }, [jwt]);
  
//   return (
//     <div className="">
//       {cart.cartItems.length>0 && <div className="lg:grid grid-cols-3 lg:px-16 relative">
//         <div className="lg:col-span-2 lg:px-5 bg-white">
//         <div className=" space-y-3">
//           {cart.cartItems.map((item) => (
//             <>
//               <CartItem item={item} showButton={true}/>
//             </>
//           ))}
//         </div>
//       </div>
//       <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
//         <div className="border p-5 bg-white shadow-lg rounded-md">
//           <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
//           <hr />

//           <div className="space-y-3 font-semibold">
//             <div className="flex justify-between pt-3 text-black ">
//               <span>Price ({cart.cart?.totalItem} item)</span>
//               <span>₹{cart.cart.totalPrice}</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Discount</span>
//               <span className="text-green-700">-₹{cart.cart?.discounte}</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Delivery Charges</span>
//               <span className="text-green-700">Free</span>
//             </div>
//             <hr />
//             <div className="flex justify-between font-bold text-lg">
//               <span>Total Amount</span>
//               <span className="text-green-700">₹{cart.cart?.totalDiscountedPrice}</span>
//             </div>
//           </div>

//           <Button
//             onClick={() => navigate("/checkout?step=2")}
//             variant="contained"
//             type="submit"
//             sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
//           >
//             Check Out
//           </Button>
//         </div>
//       </div>
//       </div>}
      
//     </div>
//   );
// };

// export default Cart;
