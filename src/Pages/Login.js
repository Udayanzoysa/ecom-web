import React, { useState } from "react";
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import Container from '../Components/Container';
import CustomInput from '../Components/CustomInput';
import { Link, useNavigate } from "react-router-dom";

import firebase from "firebase/compat/app";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import {
    getAuth
} from "firebase/auth";

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
            navigate('/admin')


            return res
        } catch (e) {
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
            <Meta title={'Login'} />
            <BreadCrumb title='Login' />
            <Container class1='login-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center mb-3'>Login</h3>
                            <div className="className='d-flex flex-column gap-30'">
                                <CustomInput
                                    onChng={valueChangeHandler}
                                    type="text"
                                    placeholder="Email Address"
                                    id="email"
                                    name="email"
                                />
                                <CustomInput
                                    onchange={valueChangeHandler}
                                    type="password"
                                    placeholder="Password"
                                    id="pass"
                                    name="password"
                                />
                                <div className=''>
                                    <Link to='/ForgotPassword' >Forgot Password?</Link>
                                    <div className='mt-3 d-flex justify-content-center gap-15 align-item-center'>
                                        <button className='button border-0' onClick={login} type='submit'> 
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
                </div>
            </Container>
        </>
    );
};

export default Login;