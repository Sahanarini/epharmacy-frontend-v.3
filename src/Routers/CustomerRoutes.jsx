import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ProductDetails from "../customer/Components/Product/ProductDetails/ProductDetails";
import Product from "../customer/Components/Product/Product/Product";
import Contact from "../Pages/Contact";
import TearmsCondition from "../Pages/TearmsCondition";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import About from "../Pages/About";
import Homepage from "../Pages/Homepage";
import Navigation from "../customer/Components/Navbar/Navigation";
import Cart from "../customer/Components/Cart/Cart";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Button} from "@mui/material";
import { customTheme, customerTheme } from "../Admin/them/customeThem";
import Order from "../customer/Components/orders/Order";
import OrderDetails from "../customer/Components/orders/OrderDetails";
import Checkout from "../customer/Components/Checkout/Checkout";
import Footer from "../customer/Components/footer/Footer";
import PaymentSuccess from "../customer/Components/paymentSuccess/PaymentSuccess";
import RateProduct from "../customer/Components/ReviewProduct/RateProduct";
import SearchProduct from "../customer/Components/Product/Product/SearchProduct";
import PaymentPage from "../customer/Components/paymentSuccess/PaymentPage";
import PaymentReport from "../customer/Components/paymentSuccess/PaymentReport";
import ProductPage from "../customer/Components/Product/ProductPage/ProductPage";
import UpdateProductForm from "../Admin/componets/updateProduct/UpdateProduct";


const CustomerRoutes = () => {
    const location = useLocation();
    
    // Only show Navigation component when not on the NotFound page
    const showNavigation = location.pathname !== "*";

    return (
        <div>
            <ThemeProvider theme={customerTheme}>
                {showNavigation && <Navigation />}
                <Routes>
                    <Route path="/login" element={<Homepage />} />
                    <Route path="/register" element={<Homepage />} />
                    <Route path="/logout" element={<Homepage />} />
                    <Route path="/" element={<Homepage />} />
                    <Route path="/products/search" element={<SearchProduct />} />
                    <Route path="/home" gelement={<Homepage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/ProductPage" element={<ProductPage />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-condition" element={<TearmsCondition />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product />} />
                    <Route path="/product/:productId" element={<ProductDetails />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/account/order" element={<Order />} />
                    <Route path="/account/order/:orderId" element={<OrderDetails />} />
                    <Route path="/account/rate/:productId" element={<RateProduct />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/paymentpage" element={<PaymentPage />} />
                    <Route path="/payment-report" element={<PaymentReport />} />
                    <Route path="/update-product/:productId" element={<UpdateProductForm />} />
                </Routes>
                <Footer />
            </ThemeProvider>
        </div>
    );
};

export default CustomerRoutes;
