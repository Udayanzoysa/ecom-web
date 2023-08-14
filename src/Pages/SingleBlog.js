import React from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import { Link } from 'react-router-dom';
import blog1 from '../images/blog 1.jpg';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import Container from '../Components/Container';

const SingleBlog = () => {
  return (
    <>
    <Meta title={'Dynamic Blog Name'} />
    <BreadCrumb title='Dynamic Blog Name'/>
    <Container class1='blog-wrapper home-wrapper-2 py-3'>
        <div className='row'>
          <div className='col-12'>
            <div className='sigle-blog-card'>
                <Link to='/Blog' className='d-flex align-items-center gap-10'>
                    <HiOutlineArrowLeft className='fs-4' /> Go back to Blogs
                </Link>
                <h3 className='title mt-4'>
                A Beautiful Glass That Shine
                </h3>
                <img src={blog1} className='img-fluid w-100 my-4' alt='blog 1' /> 
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </p>        
            </div>
          </div>
        </div>
    </Container>
    </>
  );    
};

export default SingleBlog;