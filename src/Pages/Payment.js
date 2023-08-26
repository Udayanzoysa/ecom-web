import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import product8 from '../images/product 8.png';
import Container from '../Components/Container';
import PaymentModal from '../Components/PayhereModal';
import PaymentFormWrapper from '../Components/PaymentForm';




const Payment = (props) => {
    const { cartItems, onAdd, onRemove } = props;

    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return (
        <>
            <Container class1='checkout-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-7'>
                        <div className='checkout-left-data'>
                            <h3 className='website-name'>Dushan Glass Center</h3>
                            <nav style={{ "--bs-breadcrumb-divider": '>' }}
                                aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to='/Cart' className='text-dark total-price'>Cart</Link></li>
                                    &nbsp; /
                                    <li className="breadcrumb-item active total-price" aria-current="page">
                                        Information</li> &nbsp; /
                                    <li className="breadcrumb-item active total-price">Shipping</li>
                                    &nbsp; /
                                    <li className="breadcrumb-item active total-price" aria-current="page">
                                        Payment</li>
                                </ol>
                            </nav>                          
                            <PaymentFormWrapper></PaymentFormWrapper>
                        </div>
                    </div>
                    <div className='col-5'>
                        <div className='border-bottom py-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='total'>Sub Total</p>
                                <p className='total-price' >LKR {itemsPrice.toFixed(2)}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='total'>Tax</p>
                                <p className='total-price' >LKR {taxPrice.toFixed(2)}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='mb-0 total'>Shipping</p>
                                <p className='mb-0 total-price'>LKR {shippingPrice.toFixed(2)}</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                            <h4 className='total'>Total</h4>
                            <h5 className='total-price'>LKR {totalPrice.toFixed(2)}</h5>
                        </div>                     
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Payment;