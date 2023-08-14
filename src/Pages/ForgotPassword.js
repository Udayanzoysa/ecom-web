import React from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import Container from '../Components/Container';
import CustomInput from '../Components/CustomInput';

const ForgotPassword = () => {
  return (
    <>
    <Meta title={'Forgot Password'} />
    <BreadCrumb title='Forgot Password'/>
    <Container class1='login-wrapper py-5 home-wrapper-2'>
        <div className='row'>
            <div className='col-12'>
                <div className='auth-card'>
                <Link to='/Login' className='d-flex align-items-center gap-10'>
                    <HiOutlineArrowLeft className='fs-12' />
                </Link>
                   <h3 className='text-center mb-3'>Reset Your Password</h3>
                   <p className='text-center mt-2 mb-3'>
                    We will send you an email to reset your Password
                   </p>
                   <form action='' className='d-flex flex-column gap-30' >
                   <CustomInput type='email' name='email' placeholder='Email' />
                    <div className=''>
                        <div className='mt-3 d-flex justify-content-center gap-30 align-item-center'>
                            <button className='button border-0'>Submit</button>
                            <Link to='/Login'className='button text-white'>Cancel</Link>
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

export default ForgotPassword;