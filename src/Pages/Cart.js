import React from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import product8 from '../images/product 8.png';
import { AiFillDelete } from 'react-icons/ai';
import {Link, useParams} from 'react-router-dom';
import Container from '../Components/Container';
import data from "../data";
const Cart = (props) => {
    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return (
        <>

            <Meta title={'Add to cart'} />
            <BreadCrumb title='Add to cart' />
            <Container class1='cart-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='cart-header py-3 d-flex justify-content-between align-items-center'>
                            <h4 className='cart-col-1'>Product</h4>
                            <h4 className='cart-col-2'>Price</h4>
                            <h4 className='cart-col-3'>Quantity</h4>
                            <h4 className='cart-col-4'>Total</h4>
                        </div>
                        {cartItems.length === 0 && <div class="alert alert-warning" role="alert">Cart is empty</div>}
                        {cartItems.map((item) => (
                            <div className='cart-data py-3 mb-2 d-flex justify-content-between align-items-center' key={item.id}>
                                <div className='cart-col-1 gap-15 d-flex align-items-center'>
                                    <div className='w-25'>
                                        <img
                                            src={Array.isArray(item.images) ? item.images[0] : ''}
                                            className='img-fluid'
                                            alt='product8'
                                        />
                                    </div>
                                    <div className='w-75'>
                                        <p>{item.title}</p>
                                        <p>color: red</p>
                                        <p>size: 40mm thick</p>
                                    </div>
                                </div>
                                <div className='cart-col-2'>
                                    <h5 className='price'>LKR {item.price.toFixed(2)}</h5>
                                </div>
                                <div className='cart-col-3 d-flex align-items-center gap-15'>
                                    <div>
                                        <button onClick={() => onRemove(item)} className=" btn btn-sm btn-danger mx-2">-</button>
                                        <button onClick={() => onAdd(item)} className="btn btn-sm btn-primary">+</button>
                                        <input className='form-control'
                                            type='number'
                                            name=''
                                            min={1}
                                            max={10}
                                            value={item.qty}
                                            id='' />

                                    </div>
                                    <div><AiFillDelete className='text-danger' /></div>
                                </div>
                                <div className='cart-col-4'>
                                    <h5 className='price'>{item.qty} x LKR {item.price.toFixed(2)}</h5>
                                </div>
                            </div>
                        ))}

                    </div>
                    <div className='col-12 py-2 mt-4'>
                        <div className='d-flex justify-content-between align-items-baseline'>
                            <Link to='/OurStore' className='button'>
                                Continue to shopping
                            </Link>
                            <div className='d-flex flex-column align-items-end'>
                                <h4>SubTotal : LKR {totalPrice.toFixed(2)}</h4>
                                <p>Your total amount includes all taxes and shipping costs. We are pleased to offer free shipping for orders totaling LKR 2000 or more.</p>
                                <Link to='/Checkout' className='button'>
                                    Checkout
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>

    );
};

export default Cart;