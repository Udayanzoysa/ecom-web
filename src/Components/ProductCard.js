import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link, useLocation } from 'react-router-dom';
import wish from '../images/wish.svg';
import prodcompare from '../images/prodcompare.svg';
import view from '../images/view.svg';
import addcart from '../images/add-cart.svg';
import product1 from '../images/product 1.png';
import product3 from '../images/product 3.png';


const ProductCard = (props) => {

  const { product, onAdd } = props;

  const images = (
    <div className='product-image'>
    {
        product?.images?.map((imgSrc)=>(
          <img
          src={imgSrc}
          className='img-fluid w-280'
          alt='product-image'
        />
        ))  
      }
      </div>
  )

  return (
    <>
      <div className="mr-75">
        <div>
          <Link to={product.id}  className='product-card position-relative'>
            <div className='wishlist-icon position-absolute'>
              <button className='border-0 bg-transparent'>
                <img src={wish} alt='wishlist' />
              </button>
            </div>

            {images}
           
            {/* <img
                src={product?.images ? product?.images[0]:''}
                className='img-fluid w-280'
                alt='product-image'
              />
              <img
                src={"https://firebasestorage.googleapis.com/v0/b/e-commerce-v1-18dce.appspot.com/o/products%2F932Screenshot%20from%202023-08-18%2016-14-13.png?alt=media&token=e58a3d01-7e6e-4ba5-bd1f-541f82e71a80"}
                className='img-fluid w-280'
                alt='product-image'
              /> */}
           
              
       
            <div className='product-details'>
              <h6 className='brand'>{product?.brand}</h6>
              <h5 className='product-title'>
                {product?.title}
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
    </>
  );
};

export default ProductCard;