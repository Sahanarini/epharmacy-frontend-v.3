// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getOrderById } from "../../../Redux/Customers/Order/Action";
// import AddressCard from "../adreess/AdreessCard";
// import CartItem from "../Cart/CartItem";
// import { CircularProgress, Typography, Paper } from "@mui/material";
// // import "./PaymentReport.css"; // Import CSS for styling

// const PaymentReport = () => {
//     const { search } = useLocation();
//     const query = new URLSearchParams(search);
//     const orderId = query.get("order_id");
//     const dispatch = useDispatch();
//     const { order, loading, error } = useSelector((state) => ({
//         order: state.order,
//         loading: state.loading, // Ensure you have loading in your state
//         error: state.error // Ensure you have error in your state
//     }));

//     useEffect(() => {
//         if (orderId) {
//             dispatch(getOrderById(orderId));
//         }
//     }, [orderId, dispatch]);

//     if (loading) {
//         return (
//             <div className="loading-container">
//                 <CircularProgress />
//                 <Typography variant="h6">Loading...</Typography>
//             </div>
//         );
//     }

//     if (error) {
//         return (
//             <div className="error-container">
//                 <Typography variant="h6" color="error">
//                     Error fetching order details. Please try again later.
//                 </Typography>
//             </div>
//         );
//     }

//     return (
//         <div className="payment-report-container">
//             <div className="header">
//                 <Typography variant="h4" component="h2" gutterBottom>
//                     Payment Success
//                 </Typography>
//                 <Typography variant="body1">
//                     Your payment was successful!
//                 </Typography>
//             </div>
//             <Paper className="order-summary-card">
//                 <AddressCard address={order.order?.shippingAddress} />
//                 <div className="order-items">
//                     {order.order?.orderItems.length ? (
//                         order.order.orderItems.map((item) => (
//                             <CartItem key={item.id} item={item} showButton={false} />
//                         ))
//                     ) : (
//                         <Typography variant="body1">No items found.</Typography>
//                     )}
//                 </div>
//             </Paper>
//         </div>
//     );
// };

// export default PaymentReport;


import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../Redux/Customers/Order/Action";
import AddressCard from "../adreess/AdreessCard";
import CartItem from "../Cart/CartItem";
import { CircularProgress, Typography, Paper } from "@mui/material";
import "./PaymentReport.css"; // Import CSS for styling

const PaymentReport = () => {
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const orderId = query.get("order_id");
    const dispatch = useDispatch();
    const { order, loading, error } = useSelector((state) => ({
        order: state.order,
        loading: state.loading, // Ensure you have loading in your state
        error: state.error // Ensure you have error in your state
    }));

    useEffect(() => {
        if (orderId) {
            dispatch(getOrderById(orderId));
        }
    }, [orderId, dispatch]);

    if (loading) {
        return (
            <div className="loading-container">
                <CircularProgress />
                <Typography variant="h6">Loading...</Typography>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-container">
                <Typography variant="h6" color="error">
                    Error fetching order details. Please try again later.
                </Typography>
            </div>
        );
    }

    return (
        <div className="payment-report-container">
            <div className="success-banner">
                <Typography variant="h4">Payment Success</Typography>
                <Typography variant="body1">
                    Your payment was successful!
                </Typography>
            </div>
            <Paper className="order-summary-card">
                <AddressCard address={order.order?.shippingAddress} />
                <div className="order-items">
                    {order.order?.orderItems.length ? (
                        order.order.orderItems.map((item) => (
                            <CartItem key={item.id} item={item} showButton={false} />
                        ))
                    ) : (
                        <Typography variant="body1">No items found.</Typography>
                    )}
                </div>
            </Paper>
        </div>
    );
};

export default PaymentReport;
