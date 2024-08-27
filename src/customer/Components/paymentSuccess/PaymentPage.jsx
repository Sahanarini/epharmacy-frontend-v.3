// import React, { useState, useEffect } from "react";
// import { Button, TextField, FormControl, InputLabel, Select, MenuItem, Typography, Paper } from "@mui/material";
// import { useNavigate, useLocation } from "react-router-dom";
// import "./PaymentPage.css"; // Import the CSS file

// const PaymentPage = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const searchParams = new URLSearchParams(location.search);
//     const orderId = searchParams.get("order_id"); // Get order_id from query parameters

//     const [paymentMethod, setPaymentMethod] = useState("UPI");
//     const [upiId, setUpiId] = useState("");
//     const [cardNumber, setCardNumber] = useState("");
//     const [cardExpiry, setCardExpiry] = useState("");
//     const [cardCvv, setCardCvv] = useState("");
//     const [formErrors, setFormErrors] = useState({});

//     useEffect(() => {
//         if (!orderId) {
//             console.error("Order ID is missing in URL.");
//             navigate("/"); // Redirect to home or an error page if orderId is missing
//         }
//     }, [orderId, navigate]);

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

//         // Handle actual payment processing here
//         // Use the orderId to process the payment with backend
//         // For example, send the payment details to the backend and get a response
//         console.log("Processing payment for order ID:", orderId);

//         // After processing, redirect to the payment report or success page
//         navigate(`/payment-report?order_id=${orderId}`); // Redirect with the actual order ID
//     };

//     return (
//         <div className="payment-page">
//             <Paper elevation={6} className="payment-form-card">
//                 <Typography variant="h6" gutterBottom>
//                     Payment Details
//                 </Typography>
//                 <FormControl fullWidth margin="normal">
//                     <InputLabel id="payment-method-label">Payment Method</InputLabel>
//                     <Select
//                         labelId="payment-method-label"
//                         value={paymentMethod}
//                         onChange={handlePaymentMethodChange}
//                     >
//                         <MenuItem value="UPI">UPI</MenuItem>
//                         <MenuItem value="CARD">Credit/Debit Card</MenuItem>
//                     </Select>
//                 </FormControl>
//                 {paymentMethod === "UPI" && (
//                     <TextField
//                         label="UPI ID"
//                         fullWidth
//                         value={upiId}
//                         onChange={(e) => setUpiId(e.target.value)}
//                         error={!!formErrors.upiId}
//                         helperText={formErrors.upiId}
//                         margin="normal"
//                     />
//                 )}
//                 {paymentMethod === "CARD" && (
//                     <>
//                         <TextField
//                             label="Card Number"
//                             fullWidth
//                             value={cardNumber}
//                             onChange={(e) => setCardNumber(e.target.value)}
//                             error={!!formErrors.cardNumber}
//                             helperText={formErrors.cardNumber}
//                             margin="normal"
//                         />
//                         <TextField
//                             label="Expiry Date (MM/YY)"
//                             fullWidth
//                             value={cardExpiry}
//                             onChange={(e) => setCardExpiry(e.target.value)}
//                             error={!!formErrors.cardExpiry}
//                             helperText={formErrors.cardExpiry}
//                             margin="normal"
//                         />
//                         <TextField
//                             label="CVV"
//                             fullWidth
//                             type="password"
//                             value={cardCvv}
//                             onChange={(e) => setCardCvv(e.target.value)}
//                             error={!!formErrors.cardCvv}
//                             helperText={formErrors.cardCvv}
//                             margin="normal"
//                         />
//                     </>
//                 )}
//                 <Button
//                     onClick={handleCreatePayment}
//                     variant="contained"
//                     color="primary"
//                     fullWidth
//                     sx={{ marginTop: "1rem" }}
//                 >
//                     Pay Now
//                 </Button>
//             </Paper>
//         </div>
//     );
// };

// export default PaymentPage;


// import React, { useState, useEffect } from "react";
// import {
//     Button,
//     TextField,
//     FormControl,
//     InputLabel,
//     Select,
//     MenuItem,
//     Typography,
//     Paper,
//     Radio,
//     RadioGroup,
//     FormControlLabel,
//     FormHelperText
// } from "@mui/material";
// import { useNavigate, useLocation } from "react-router-dom";
// import "./PaymentPage.css"; // Import the CSS file

// const PaymentPage = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const searchParams = new URLSearchParams(location.search);
//     const orderId = searchParams.get("order_id");

//     const [paymentMethod, setPaymentMethod] = useState("UPI");
//     const [upiId, setUpiId] = useState("");
//     const [cardNumber, setCardNumber] = useState("");
//     const [cardExpiry, setCardExpiry] = useState("");
//     const [cardCvv, setCardCvv] = useState("");
//     const [cardHolderName, setCardHolderName] = useState("");
//     const [formErrors, setFormErrors] = useState({});

//     useEffect(() => {
//         if (!orderId) {
//             console.error("Order ID is missing in URL.");
//             navigate("/"); // Redirect to home or an error page if orderId is missing
//         }
//     }, [orderId, navigate]);

//     const handlePaymentMethodChange = (event) => {
//         setPaymentMethod(event.target.value);
//     };

//     const validateForm = () => {
//         let errors = {};
//         if (paymentMethod === "UPI") {
//             if (!upiId) {
//                 errors.upiId = "UPI ID is required";
//             } else if (!/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{10,}$/.test(upiId)) {
//                 errors.upiId = "UPI ID must be at least 10 characters long and contain both letters and numbers";
//             }
//         } else if (paymentMethod === "CARD") {
//             if (!cardHolderName) {
//                 errors.cardHolderName = "Card holder name is required";
//             }
//             if (!cardNumber) {
//                 errors.cardNumber = "Card number is required";
//             } else if (!/^\d{4}-\d{4}-\d{4}-\d{4}$/.test(cardNumber)) {
//                 errors.cardNumber = "Card number must be 16 digits formatted as ####-####-####-####";
//             }
//             if (!cardExpiry) {
//                 errors.cardExpiry = "Card expiry date is required";
//             }
//             if (!cardCvv) {
//                 errors.cardCvv = "Card CVV is required";
//             } else if (!/^\d{3}$/.test(cardCvv)) {
//                 errors.cardCvv = "Card CVV must be 3 digits";
//             }
//         }
//         setFormErrors(errors);
//         return Object.keys(errors).length === 0;
//     };

//     const handleCreatePayment = () => {
//         if (!validateForm()) return;

//         console.log("Processing payment for order ID:", orderId);

//         navigate(`/payment-report?order_id=${orderId}`);
//     };

//     return (
//         <div className="payment-page">
//             <Paper elevation={6} className="payment-form-card">
//                 <Typography variant="h6" gutterBottom>
//                     Payment Details
//                 </Typography>
//                 <FormControl component="fieldset">
//                     <RadioGroup
//                         row
//                         value={paymentMethod}
//                         onChange={handlePaymentMethodChange}
//                     >
//                         <FormControlLabel value="UPI" control={<Radio />} label="UPI" />
//                         <FormControlLabel value="CARD" control={<Radio />} label="Credit/Debit Card" />
//                     </RadioGroup>
//                 </FormControl>

//                 {paymentMethod === "UPI" && (
//                     <TextField
//                         label="UPI ID"
//                         fullWidth
//                         value={upiId}
//                         onChange={(e) => setUpiId(e.target.value)}
//                         error={!!formErrors.upiId}
//                         helperText={formErrors.upiId}
//                         margin="normal"
//                     />
//                 )}

//                 {paymentMethod === "CARD" && (
//                     <>
//                         <TextField
//                             label="Card Holder Name"
//                             fullWidth
//                             value={cardHolderName}
//                             onChange={(e) => setCardHolderName(e.target.value)}
//                             error={!!formErrors.cardHolderName}
//                             helperText={formErrors.cardHolderName}
//                             margin="normal"
//                         />
//                         <TextField
//                             label="Card Number"
//                             fullWidth
//                             value={cardNumber}
//                             onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, '').replace(/(.{4})/g, '$1-').slice(0, -1))}
//                             error={!!formErrors.cardNumber}
//                             helperText={formErrors.cardNumber}
//                             margin="normal"
//                         />
//                         <FormControl fullWidth margin="normal" error={!!formErrors.cardExpiry}>
//                             <InputLabel id="card-expiry-label">Expiry Date</InputLabel>
//                             <Select
//                                 labelId="card-expiry-label"
//                                 value={cardExpiry}
//                                 onChange={(e) => setCardExpiry(e.target.value)}
//                             >
//                                 {/* Example options; adjust as necessary */}
//                                 <MenuItem value="01/25">01/25</MenuItem>
//                                 <MenuItem value="02/25">02/25</MenuItem>
//                                 <MenuItem value="03/25">03/25</MenuItem>
//                                 <MenuItem value="04/25">04/25</MenuItem>
//                             </Select>
//                             <FormHelperText>{formErrors.cardExpiry}</FormHelperText>
//                         </FormControl>
//                         <TextField
//                             label="CVV"
//                             fullWidth
//                             type="password"
//                             value={cardCvv}
//                             onChange={(e) => setCardCvv(e.target.value)}
//                             error={!!formErrors.cardCvv}
//                             helperText={formErrors.cardCvv}
//                             margin="normal"
//                         />
//                     </>
//                 )}

//                 <Button
//                     onClick={handleCreatePayment}
//                     variant="contained"
//                     color="primary"
//                     fullWidth
//                     sx={{ marginTop: "1rem" }}
//                 >
//                     Pay Now
//                 </Button>
//             </Paper>
//         </div>
//     );
// };

// export default PaymentPage;

// import React, { useState, useEffect } from "react";
// import {
//     Button,
//     TextField,
//     FormControl,
//     Radio,
//     RadioGroup,
//     FormControlLabel,
//     Typography,
//     Paper
// } from "@mui/material";
// import { useNavigate, useLocation } from "react-router-dom";
// import "./PaymentPage.css"; // Import the CSS file

// const PaymentPage = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const searchParams = new URLSearchParams(location.search);
//     const orderId = searchParams.get("order_id");

//     const [paymentMethod, setPaymentMethod] = useState("UPI");
//     const [upiId, setUpiId] = useState("");
//     const [cardNumber, setCardNumber] = useState("");
//     const [cardExpiry, setCardExpiry] = useState("");
//     const [cardCvv, setCardCvv] = useState("");
//     const [cardHolderName, setCardHolderName] = useState("");
//     const [formErrors, setFormErrors] = useState({});

//     useEffect(() => {
//         if (!orderId) {
//             console.error("Order ID is missing in URL.");
//             navigate("/"); // Redirect to home or an error page if orderId is missing
//         }
//     }, [orderId, navigate]);

//     const handlePaymentMethodChange = (event) => {
//         setPaymentMethod(event.target.value);
//     };

//     const formatCardNumber = (value) => {
//         // Remove any non-digit characters
//         const cleaned = value.replace(/\D/g, '');
        
//         // Format the card number with hyphens every 4 digits
//         let formatted = cleaned.slice(0, 16); // Limit to 16 digits
//         formatted = formatted.replace(/(.{4})/g, '$1-');

//         // Remove trailing hyphen if present
//         return formatted.endsWith('-') ? formatted.slice(0, -1) : formatted;
//     };

//     const validateForm = () => {
//         let errors = {};
//         if (paymentMethod === "UPI") {
//             if (!upiId) {
//                 errors.upiId = "UPI ID is required";
//             } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/.test(upiId)) {
//                 errors.upiId = "Invalid UPI ID format";
//             }
//         } else if (paymentMethod === "CARD") {
//             if (!cardHolderName) {
//                 errors.cardHolderName = "Card holder name is required";
//             }
//             if (!cardNumber) {
//                 errors.cardNumber = "Card number is required";
//             } else if (!/^\d{16}$/.test(cardNumber)) {
//                 errors.cardNumber = "Card number must be 16 digits";
//             }
//             if (!cardExpiry) {
//                 errors.cardExpiry = "Card expiry date is required";
//             } else if (!/^\d{2}\/\d{2}$/.test(cardExpiry)) {
//                 errors.cardExpiry = "Expiry date must be in MM/YY format";
//             }
//             if (!cardCvv) {
//                 errors.cardCvv = "Card CVV is required";
//             } else if (!/^\d{3}$/.test(cardCvv)) {
//                 errors.cardCvv = "Card CVV must be 3 digits";
//             }
//         }
//         setFormErrors(errors);
//         return Object.keys(errors).length === 0;
//     };
    

//     const handleCreatePayment = () => {
//         if (!validateForm()) return;

//         console.log("Processing payment for order ID:", orderId);

//         navigate(`/payment-report?order_id=${orderId}`);
//     };

//     return (
//         <div className="payment-page">
//             <Paper elevation={6} className="payment-form-card">
//                 <Typography variant="h6" gutterBottom>
//                     Payment Details
//                 </Typography>
//                 <FormControl component="fieldset">
//                     <RadioGroup
//                         row
//                         value={paymentMethod}
//                         onChange={handlePaymentMethodChange}
//                     >
//                         <FormControlLabel value="UPI" control={<Radio />} label="UPI" />
//                         <FormControlLabel value="CARD" control={<Radio />} label="Credit/Debit Card" />
//                     </RadioGroup>
//                 </FormControl>

//                 {paymentMethod === "UPI" && (
//                     <TextField
//                         label="UPI ID"
//                         fullWidth
//                         value={upiId}
                        
//                         role="upi"
//                         onChange={(e) => setUpiId(e.target.value)}
//                         error={!!formErrors.upiId}
//                         helperText={formErrors.upiId}
//                         margin="normal"
//                     />
//                 )}

//                 {paymentMethod === "CARD" && (
//                     <>
//                         <TextField
//                             label="Card Holder Name"
//                             fullWidth
//                             value={cardHolderName}
//                             onChange={(e) => setCardHolderName(e.target.value)}
//                             role="cardholdername"
//                             error={!!formErrors.cardHolderName}
//                             helperText={formErrors.cardHolderName}
//                             margin="normal"
//                         />
//                         <TextField
//                             label="Card Number"
//                             fullWidth
//                             value={formatCardNumber(cardNumber)}
//                             role="cardnumber"
//                             onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ''))}
//                             error={!!formErrors.cardNumber}
//                             helperText={formErrors.cardNumber}
//                             margin="normal"
//                         />
//                         <TextField
//                             label="Expiry Date (MM/YY)"
//                             fullWidth
//                             value={cardExpiry}
//                             onChange={(e) => setCardExpiry(e.target.value)}
//                             error={!!formErrors.cardExpiry}
//                             helperText={formErrors.cardExpiry}
//                             margin="normal"
//                         />
//                         <TextField
//                             label="CVV"
//                             fullWidth
//                             type="password"
//                             role="password"
//                             value={cardCvv}
//                             onChange={(e) => setCardCvv(e.target.value)}
//                             error={!!formErrors.cardCvv}
//                             helperText={formErrors.cardCvv}
//                             margin="normal"
//                         />
//                     </>
//                 )}

//                 <Button
//                     onClick={handleCreatePayment}
//                     variant="contained"
//                     color="primary"
//                     fullWidth
//                     sx={{ marginTop: "1rem" }}
//                 >
//                     Pay Now
//                 </Button>
//             </Paper>
//         </div>
//     );
// };

// export default PaymentPage;

import React, { useState, useEffect } from "react";
import {
    Button,
    TextField,
    FormControl,
    Radio,
    RadioGroup,
    FormControlLabel,
    Typography,
    Paper,
    Snackbar,
    Alert
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import "./PaymentPage.css"; // Import the CSS file

const PaymentPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const orderId = searchParams.get("order_id");

    const [paymentMethod, setPaymentMethod] = useState("UPI");
    const [upiId, setUpiId] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cardExpiry, setCardExpiry] = useState("");
    const [cardCvv, setCardCvv] = useState("");
    const [cardHolderName, setCardHolderName] = useState("");
    const [formErrors, setFormErrors] = useState({});
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    useEffect(() => {
        if (!orderId) {
            console.error("Order ID is missing in URL.");
            navigate("/"); // Redirect to home or an error page if orderId is missing
        }
    }, [orderId, navigate]);

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const formatCardNumber = (value) => {
        const cleaned = value.replace(/\D/g, '');
        let formatted = cleaned.slice(0, 16);
        formatted = formatted.replace(/(.{4})/g, '$1-');
        return formatted.endsWith('-') ? formatted.slice(0, -1) : formatted;
    };

    const validateForm = () => {
        let errors = {};
        if (paymentMethod === "UPI") {
            if (!upiId) {
                errors.upiId = "UPI ID is required";
            } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/.test(upiId)) {
                errors.upiId = "Invalid UPI ID format";
            }
        } else if (paymentMethod === "CARD") {
            if (!cardHolderName) {
                errors.cardHolderName = "Card holder name is required";
            }
            if (!cardNumber) {
                errors.cardNumber = "Card number is required";
            } else if (!/^\d{16}$/.test(cardNumber)) {
                errors.cardNumber = "Card number must be 16 digits";
            }
            if (!cardExpiry) {
                errors.cardExpiry = "Card expiry date is required";
            } else if (!/^\d{2}\/\d{2}$/.test(cardExpiry)) {
                errors.cardExpiry = "Expiry date must be in MM/YY format";
            }
            if (!cardCvv) {
                errors.cardCvv = "Card CVV is required";
            } else if (!/^\d{3}$/.test(cardCvv)) {
                errors.cardCvv = "Card CVV must be 3 digits";
            }
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleCreatePayment = () => {
        if (!validateForm()) return;

        // Show Snackbar alert
        setSnackbarOpen(true);

        // Navigate to the payment report page after a short delay
        setTimeout(() => {
            navigate(`/payment-report?order_id=${orderId}`);
        }, 2000); // Adjust delay as needed
    };

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };

    return (
        <div className="payment-page">
            <Paper elevation={6} className="payment-form-card">
                <Typography variant="h6" gutterBottom>
                    Payment Details
                </Typography>
                <FormControl component="fieldset">
                    <RadioGroup
                        row
                        value={paymentMethod}
                        onChange={handlePaymentMethodChange}
                    >
                        <FormControlLabel value="UPI" control={<Radio />} label="UPI" />
                        <FormControlLabel value="CARD" control={<Radio />} label="Credit/Debit Card" />
                    </RadioGroup>
                </FormControl>

                {paymentMethod === "UPI" && (
                    <TextField
                        label="UPI ID"
                        fullWidth
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        error={!!formErrors.upiId}
                        helperText={formErrors.upiId}
                        margin="normal"
                    />
                )}

                {paymentMethod === "CARD" && (
                    <>
                        <TextField
                            label="Card Holder Name"
                            fullWidth
                            value={cardHolderName}
                            onChange={(e) => setCardHolderName(e.target.value)}
                            error={!!formErrors.cardHolderName}
                            helperText={formErrors.cardHolderName}
                            margin="normal"
                        />
                        <TextField
                            label="Card Number"
                            fullWidth
                            value={formatCardNumber(cardNumber)}
                            onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ''))}
                            error={!!formErrors.cardNumber}
                            helperText={formErrors.cardNumber}
                            margin="normal"
                        />
                        <TextField
                            label="Expiry Date (MM/YY)"
                            fullWidth
                            value={cardExpiry}
                            onChange={(e) => setCardExpiry(e.target.value)}
                            error={!!formErrors.cardExpiry}
                            helperText={formErrors.cardExpiry}
                            margin="normal"
                        />
                        <TextField
                            label="CVV"
                            fullWidth
                            type="password"
                            value={cardCvv}
                            onChange={(e) => setCardCvv(e.target.value)}
                            error={!!formErrors.cardCvv}
                            helperText={formErrors.cardCvv}
                            margin="normal"
                        />
                    </>
                )}

                <Button
                    onClick={handleCreatePayment}
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ marginTop: "1rem" }}
                >
                    Pay Now
                </Button>
            </Paper>

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                message="Payment successful"
            >
                <Alert onClose={handleCloseSnackbar} severity="success">
                    Payment successful
                </Alert>
            </Snackbar>
        </div>
    );
};

export default PaymentPage;
