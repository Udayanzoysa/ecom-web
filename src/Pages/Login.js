import React, {useState} from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import {Link, useNavigate} from 'react-router-dom';
import Container from '../Components/Container';
import CustomInput from '../Components/CustomInput';
import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth";
import {toast} from "react-toastify";


const Login = () => {

    const [form, setForm] = useState({})
    const navigate = useNavigate()
    const valueChangeHandler = (event) => {
        let {name, value} = event.target
        setForm({...form, [name]: value})
    }

    const login = async () => {
        try {
            let res = await firebase.auth().signInWithEmailAndPassword(form?.email, form?.password)
            const auth = getAuth();
            navigate('/profile')
            return res
        } catch (e) {
            toast.error(JSON.parse(JSON.stringify(e.code)), {
                position: toast.POSITION.BOTTOM_CENTER
            });
            // toast({
            //     title: JSON.parse(JSON.stringify(e.code)),
            //     // description: "We've created your account for you.",
            //     status: 'error',
            //     duration: 2000,
            //     isClosable: true,
            // })
            return e
        }
    }


    return (
        <>
            <Meta title={'Login'}/>
            <BreadCrumb title='Login'/>
            <Container class1='login-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center mb-3'>Login</h3>
                            <CustomInput onChange={valueChangeHandler} type='email' name='email' placeholder='Email'/>
                            <CustomInput onChange={valueChangeHandler} type='password' name='password'
                                         placeholder='password'/>
                            <div className=''>
                                <Link to='/ForgotPassword'>Forgot Password?</Link>
                                <div className='mt-3 d-flex justify-content-center gap-15 align-item-center'>
                                    <button className='button border-0' onClick={login}>
                                        Login
                                    </button>
                                    <Link to='/Signup' className='button signup'>
                                        Signin
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Login;