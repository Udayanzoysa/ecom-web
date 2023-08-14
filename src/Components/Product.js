import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link, useLocation } from 'react-router-dom';
import wish from '../images/wish.svg';
import prodcompare from '../images/prodcompare.svg';
import view from '../images/view.svg';
import addcart from '../images/add-cart.svg';
import product1 from '../images/product 1.png';
import product3 from '../images/product 3.png';


export default function Product(props) {
    const { product, onAdd } = props;
    return (

        <div className="mr-75">
            <div>
                <Link to=':id' className='product-card position-relative'>
                    <div className='wishlist-icon position-absolute'>
                        <button className='border-0 bg-transparent'>
                            <img src={wish} alt='wishlist' />
                        </button>
                    </div>
                    <div className='product-image'>
                        <img
                            src={product.image}
                            className='img-fluid w-100'
                            alt='product-image'
                        />
                        <img
                            src={product3}
                            className='img-fluid w-100'
                            alt='product-image'
                        />
                    </div>
                    <div className='product-details'>
                        <h6 className='brand'>Door Locks</h6>
                        <h5 className='product-title'>
                            {product.name}
                        </h5>
                        <ReactStars
                            count={5}
                            value='3'
                            size={24}
                            edit={true}
                            activeColor="#ffd700"
                        />
                        <p className='price'>LKR {product.price}</p>
                    </div>
                    <div className=' mt-5 action-bar position-absolute'>
                        <div className='d-flex flex-column gap-15'>
                            <button className='border-0 bg-transparent'>
                                <img src={prodcompare} alt='compare' />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src={view} alt='view' />
                            </button>
                            <button className='border-0 bg-transparent' onClick={() => onAdd(product)}>
                                <img src={addcart} alt='addcart' />
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}
