import React from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import Container from '../Components/Container';
import CustomInput from '../Components/CustomInput';

const ResetPassword = () => {
  return (
    <>
    <Meta title={'Reset Password'} />
    <BreadCrumb title='Reset Password'/>
    <Container class1='login-wrapper py-5 home-wrapper-2'>
        <div className='row'>
            <div className='col-12'>
                <div className='auth-card'>
                <Link to='/Login' className='d-flex align-items-center gap-10'>
                    <HiOutlineArrowLeft className='fs-12' />
                </Link>
                   <h3 className='text-center mb-3'>Reset Password</h3>
                   <form action='' className='d-flex flex-column gap-30' >
                   <CustomInput type='password' name='password' placeholder='password' />
                   <CustomInput type='password' name='confpassword' placeholder='Confirm password' />
                    <div className=''>
                        <div className='mt-3 d-flex justify-content-center gap-15 align-item-center'>
                            <button className='button border-0' type='submit'>Reset</button>
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

export default ResetPassword;