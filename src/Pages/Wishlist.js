import React from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import cross from '../images/cross.svg';
import product1 from '../images/product 1.png';
import product6 from '../images/product 6.png';
import product7 from '../images/product 7.png';
import product8 from '../images/product 8.png';
import Container from '../Components/Container';

const Wishlist = () => {
  return (
    <>
    <Meta title={'Wishlist'} />
    <BreadCrumb title='Wishlist'/>
    <Container class1='wishlist-wrapper home-wrapper-2 py-2'>
        <div className='row'>
          <div className='col-3'>
            <div className='wishlist-card position-relative'>
                <img src={cross}
                alt='product'
                className='position-absolute cross img-fluid' />
              <div className='wishlist-card-image'>
                <img src={product1}
                className='img-fluid w-100' alt='product1' />
              </div>
              <div className='py-3 px-3'>
              <h5 className='title'>Pantry hinges, Furniture hinges, Cabinet door hinges</h5>
              <h6 className='price'>LKR 1000</h6>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='wishlist-card position-relative'>
                <img src={cross}
                alt='product'
                className='position-absolute cross img-fluid' />
              <div className='wishlist-card-image'>
                <img src={product8}
                className='img-fluid w-100' alt='product1' />
              </div>
              <div className='py-3 px-3'>
              <h5 className='title'>Pantry hinges, Furniture hinges, Cabinet door hinges</h5>
              <h6 className='price'>LKR 1800</h6>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='wishlist-card position-relative'>
                <img src={cross}
                alt='product'
                className='position-absolute cross img-fluid' />
              <div className='wishlist-card-image'>
                <img src={product6}
                className='img-fluid w-100' alt='product1' />
              </div>
              <div className='py-3 px-3'>
              <h5 className='title'>Pantry hinges, Furniture hinges, Cabinet door hinges</h5>
              <h6 className='price'>LKR 2000</h6>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='wishlist-card position-relative'>
                <img src={cross}
                alt='product'
                className='position-absolute cross img-fluid' />
              <div className='wishlist-card-image'>
                <img src={product7}
                className='img-fluid w-100' alt='product1' />
              </div>
              <div className='py-3 px-3'>
              <h5 className='title'>Pantry hinges, Furniture hinges, Cabinet door hinges</h5>
              <h6 className='price'>LKR 1500</h6>
              </div>
            </div>
          </div>
        </div>
    </Container>
    </>
  );
};

export default Wishlist;