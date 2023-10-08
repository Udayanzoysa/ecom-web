import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layouts from './Components/Layouts';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import OurStore from './Pages/OurStore';
import Wishlist from './Pages/Wishlist';
import Login from './Pages/Login';
import ForgotPassword from './Pages/ForgotPassword';
import Signup from './Pages/Signup';
import ResetPassword from './Pages/ResetPassword';
import SingleBlog from './Pages/SingleBlog';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import ShippingPolicy from './Pages/ShippingPolicy';
import RefundPolicy from './Pages/RefundPolicy';
import TermsAndConditions from './Pages/TermsAndConditions';
import SingleProduct from './Pages/SingleProduct';
import Cart from './Pages/Cart';
import CheckOut from './Pages/CheckOut';
import data from './data';
import Account from "./Pages/Account";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContextProvider from "./providers/ContextProvider";
import Payment from './Pages/Payment';

function App() {

    const { products } = data;
    const [cartItems, setCartItems] = useState([]);

    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    };
    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    };

    console.log(cartItems,'cartItems');

    return (
        <>
            <ContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Layouts countCartItems={cartItems.length}></Layouts>}>
                            <Route index element={<Home />} />
                            <Route path='contact' element={<Contact />} />
                            <Route path='blog' element={<Blog />} />
                            <Route path='blog/:id' element={<SingleBlog />} />
                            <Route path='OurStore' element={<OurStore products={products} onAdd={onAdd}></OurStore>} />
                            <Route path='OurStore/:id'
                                element={<SingleProduct products={products} onAdd={onAdd}></SingleProduct>} />
                            <Route path='wishlist' element={<Wishlist />} />
                            <Route path='login' element={<Login />} />
                            <Route path='forgotpassword' element={<ForgotPassword />} />
                            <Route path='signup' element={<Signup />} />
                            <Route path='profile' element={<Account />} />
                            <Route path='resetpassword' element={<ResetPassword />} />
                            <Route path='privacypolicy' element={<PrivacyPolicy />} />
                            <Route path='shippingpolicy' element={<ShippingPolicy />} />
                            <Route path='refundpolicy' element={<RefundPolicy />} />
                            <Route path='termandconditions' element={<TermsAndConditions />} />
                            <Route path='Cart'
                                element={<Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}></Cart>} />
                            <Route path='Checkout' element={<CheckOut cartItems={cartItems} onAdd={onAdd}
                                onRemove={onRemove}></CheckOut>} />
                            <Route path='Payment' element={<Payment cartItems={cartItems} onAdd={onAdd}
                                onRemove={onRemove}></Payment>} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ContextProvider>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
}

export default App;
