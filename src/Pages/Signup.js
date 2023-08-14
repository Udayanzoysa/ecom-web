import React from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import Container from '../Components/Container';
import CustomInput from '../Components/CustomInput';

const Signup = () => {
  return (
    <>
    <Meta title={'Signup'} />
    <BreadCrumb title='Signup'/>
    <Container class1='login-wrapper py-5 home-wrapper-2'>
        <div className='row'>
            <div className='col-12'>
                <div className='auth-card'>
                <Link to='/Login' className='d-flex align-items-center gap-10'>
                    <HiOutlineArrowLeft className='fs-12' />
                </Link>
                   <h3 className='text-center mb-3'>Sign Up</h3>
                   <form action='' className='d-flex flex-column gap-30' >
                   <CustomInput type='text' name='name' placeholder='First Name' />
                   <CustomInput type='text' name='name' placeholder='Last Name' />
                   <CustomInput type='email' name='email' placeholder='Email' />
                   <CustomInput type='password' name='password' placeholder='password' />
                    <div className=''>
                        <div className='mt-3 d-flex justify-content-center gap-15 align-item-center'>
                        <Link to='/Login' className='button text-white'>
                             Sign Up
                        </Link>
                        </div>
                    </div>
                   </form>
                </div>
            </div>
        </div>
    </Container>
    </>
  )
}

export default Signup;