


// import React, { useState, useEffect } from "react";
// import { Button, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
// import { useLocation, useNavigate } from "react-router-dom";
// import CartItem from "../Cart/CartItem";
// import AddressCard from "../adreess/AdreessCard";
// import { useDispatch, useSelector } from "react-redux";
// import { getOrderById } from "../../../Redux/Customers/Order/Action";
// import { createPayment } from "../../../Redux/Customers/Payment/Action";

// const OrderSummary = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const searchParams = new URLSearchParams(location.search);
//     const orderId = searchParams.get("order_id");
//     const dispatch = useDispatch();
//     const jwt = localStorage.getItem("jwt");
//     const { order } = useSelector((state) => state);

//     const [paymentMethod, setPaymentMethod] = useState("UPI");
//     const [upiId, setUpiId] = useState("");
//     const [cardNumber, setCardNumber] = useState("");
//     const [cardExpiry, setCardExpiry] = useState("");
//     const [cardCvv, setCardCvv] = useState("");
//     const [formErrors, setFormErrors] = useState({});

//     useEffect(() => {
//         dispatch(getOrderById(orderId));
//     }, [orderId, dispatch]);

//     const handlePaymentMethodChange = (event) => {
//         setPaymentMethod(event.target.value);
//     };

//     const validateForm = () => {
//         let errors = {};
//         if (paymentMethod === "UPI" && !upiId) {
//             errors.upiId = "UPI ID is required";
//         }
//         if (paymentMethod === "CARD") {
//             if (!cardNumber) {
//                 errors.cardNumber = "Card number is required";
//             }
//             if (!cardExpiry) {
//                 errors.cardExpiry = "Card expiry date is required";
//             }
//             if (!cardCvv) {
//                 errors.cardCvv = "Card CVV is required";
//             }
//         }
//         setFormErrors(errors);
//         return Object.keys(errors).length === 0;
//     };

//     const handleCreatePayment = () => {
//         if (!validateForm()) return;

//         const paymentData = {
//             orderId: order.order?.id,
//             jwt,
//             paymentMethod,
//             ...(paymentMethod === "UPI" ? { upiId } : { cardNumber, cardExpiry, cardCvv }),
//         };

//         dispatch(createPayment(paymentData))
//             .then(() => navigate(`/payment?order_id=${order.order?.id}`))
//             .catch((error) => console.error("Payment failed", error));
//     };

//     return (
//         <div className="space-y-5">
//             <div className="p-5 shadow-lg rounded-md border">
//                 <AddressCard address={order.order?.shippingAddress} />
//             </div>
//             <div className="lg:grid grid-cols-3 relative justify-between">
//                 <div className="lg:col-span-2">
//                     <div className="space-y-3">
//                         {order.order?.orderItems.map((item) => (
//                             <CartItem key={item.id} item={item} showButton={false} />
//                         ))}
//                     </div>
//                 </div>
//                 <div className="sticky top-0 h-[100vh] mt-5 lg:mt-0 ml-5">
//                     <div className="border p-5 bg-white shadow-lg rounded-md">
//                         <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
//                         <hr />
//                         <div className="space-y-3 font-semibold">
//                             <div className="flex justify-between pt-3 text-black">
//                                 <span>Price ({order.order?.totalItem} item)</span>
//                                 <span>₹{order.order?.totalPrice}</span>
//                             </div>
//                             <div className="flex justify-between">
//                                 <span>Discount</span>
//                                 <span className="text-green-700">-₹{order.order?.discount}</span>
//                             </div>
//                             <div className="flex justify-between">
//                                 <span>Delivery Charges</span>
//                                 <span className="text-green-700">Free</span>
//                             </div>
//                             <hr />
//                             <div className="flex justify-between font-bold text-lg">
//                                 <span>Total Amount</span>
//                                 <span className="text-green-700">₹{order.order?.totalDiscountedPrice}</span>
//                             </div>
//                         </div>
//                         <div className="mt-5">
//                             <FormControl fullWidth>
//                                 <InputLabel id="payment-method-label">Payment Method</InputLabel>
//                                 <Select
//                                     labelId="payment-method-label"
//                                     value={paymentMethod}
//                                     onChange={handlePaymentMethodChange}
//                                 >
//                                     <MenuItem value="UPI">UPI</MenuItem>
//                                     <MenuItem value="CARD">Credit/Debit Card</MenuItem>
//                                 </Select>
//                             </FormControl>
//                             {paymentMethod === "UPI" && (
//                                 <TextField
//                                     label="UPI ID"
//                                     fullWidth
//                                     value={upiId}
//                                     onChange={(e) => setUpiId(e.target.value)}
//                                     error={!!formErrors.upiId}
//                                     helperText={formErrors.upiId}
//                                     className="mt-2"
//                                 />
//                             )}
//                             {paymentMethod === "CARD" && (
//                                 <>
//                                     <TextField
//                                         label="Card Number"
//                                         fullWidth
//                                         value={cardNumber}
//                                         onChange={(e) => setCardNumber(e.target.value)}
//                                         error={!!formErrors.cardNumber}
//                                         helperText={formErrors.cardNumber}
//                                         className="mt-2"
//                                     />
//                                     <TextField
//                                         label="Expiry Date (MM/YY)"
//                                         fullWidth
//                                         value={cardExpiry}
//                                         onChange={(e) => setCardExpiry(e.target.value)}
//                                         error={!!formErrors.cardExpiry}
//                                         helperText={formErrors.cardExpiry}
//                                         className="mt-2"
//                                     />
//                                     <TextField
//                                         label="CVV"
//                                         fullWidth
//                                         type="password"
//                                         value={cardCvv}
//                                         onChange={(e) => setCardCvv(e.target.value)}
//                                         error={!!formErrors.cardCvv}
//                                         helperText={formErrors.cardCvv}
//                                         className="mt-2"
//                                     />
//                                 </>
//                             )}
//                             <Button
//                                 onClick={handleCreatePayment}
//                                 variant="contained"
//                                 sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
//                             >
//                                 Pay Now
//                             </Button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../Redux/Customers/Order/Action";
import AddressCard from "../adreess/AdreessCard";
import CartItem from "../Cart/CartItem";

const OrderSummary = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const orderId = searchParams.get("order_id");
    const dispatch = useDispatch();
    const { order } = useSelector((state) => state);

    useEffect(() => {
        if (orderId) {
            dispatch(getOrderById(orderId));
            
        }
    }, [orderId, dispatch]);

    const handleProceedToPayment = () => {
        if (order.order?.id) {
            navigate(`/paymentpage?order_id=${order.order.id}`);
        } else {
            console.error("Order ID is missing.");
        }
    };
   

    return (
        <div className="space-y-5">
            <div className="p-5 shadow-lg rounded-md border">
                <AddressCard address={order.order?.shippingAddress} />
            </div>
            <div className="lg:grid grid-cols-3 relative justify-between">
                <div className="lg:col-span-2">
                    <div className="space-y-3">
                        {order.order?.orderItems.map((item) => (
                            <CartItem key={item.id} item={item} showButton={false} />
                        ))}
                    </div>
                </div>
                <div className="sticky top-0 h-[100vh] mt-5 lg:mt-0 ml-5">
                    <div className="border p-5 bg-white shadow-lg rounded-md">
                        <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
                        <hr />
                        <div className="space-y-3 font-semibold">
                            <div className="flex justify-between pt-3 text-black">
                                <span>Price ({order.order?.totalItem} item)</span>
                                <span>₹{order.order?.totalPrice}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Discount</span>
                                <span className="text-green-700">-₹{order.order?.discountPersent}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Delivery Charges</span>
                                <span className="text-green-700">Free</span>
                            </div>
                            <hr />
                            <div className="flex justify-between font-bold text-lg">
                                <span>Total Amount</span>
                                <span className="text-green-700">₹{order.order?.totalDiscountedPrice}</span>
                            </div>
                        </div>
                        <div className="mt-5">
                            <Button
                                onClick={handleProceedToPayment}
                                variant="contained"
                                sx={{ padding: ".8rem 2rem", width: "100%" }}
                            >
                                Proceed to Payment
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;
