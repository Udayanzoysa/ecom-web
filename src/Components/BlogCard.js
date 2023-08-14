import React from 'react';
import { Link } from 'react-router-dom';
import blog1 from '../images/blog 1.jpg';

const BlogCard = () => {
  return (
        <div className='blog-card'>
            <div className='card-images'>
                <img src={blog1} className='img-fluid W-100' alt='blog' />
            </div>
            <div className='blog-content'>
                <p className='date'>14 Jul, 2023</p>
                <h5 className='title'>A Beautiful Glass That Shine</h5>
                <p className='desc'>
                Build your Dream house, we are online now. 
                Sell on multiple channels, accept secure online payments, 
                start shipping and increase your revenue.
                </p>
                <Link to='/blog/:id' className='button'>
                   READ MORE
                </Link>
            </div>
        </div>
  )
}

export default BlogCard;