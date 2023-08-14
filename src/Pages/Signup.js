import React, {useState} from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import {Link, useNavigate} from 'react-router-dom';
import {HiOutlineArrowLeft} from 'react-icons/hi';
import Container from '../Components/Container';
import CustomInput from '../Components/CustomInput';
import firebase from "firebase/compat/app";
import {getAuth, signOut, updateProfile} from "firebase/auth";
import {doc, setDoc} from "firebase/firestore";
import {getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage";

const Signup = () => {

    const [form, setForm] = useState({})
    const navigate = useNavigate()
    const valueChangeHandler = (event) => {
        let {name, value} = event.target
        setForm({...form, [name]: value})
    }

    console.log(form, 'formrmr')

    const signHandler = async () => {
        try {
            let result = await firebase.auth().createUserWithEmailAndPassword(form?.email, form.password)
            if (result?.user?.uid) {
                const db = firebase.firestore();
                const docRef = await setDoc(doc(db, 'userProfile', result?.user?.uid), {...form,type:'user'});
                navigate('/profile')
            }
            // return result?.user?.uid
        } catch (e) {
            console.log(e,'eeeee')
        }
    }

    return (
        <>
            <Meta title={'Signup'}/>
            <BreadCrumb title='Signup'/>
            <Container class1='login-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <Link to='/Login' className='d-flex align-items-center gap-10'>
                                <HiOutlineArrowLeft className='fs-12'/>
                            </Link>
                            <h3 className='text-center mb-3'>Sign Up</h3>
                                <CustomInput onChange={valueChangeHandler} type='text' name='firstName'
                                             placeholder='First Name'/>
                                <CustomInput onChange={valueChangeHandler} type='text' name='lastName'
                                             placeholder='Last Name'/>
                                <CustomInput onChange={valueChangeHandler} type='email' name='email'
                                             placeholder='Email'/>
                                <CustomInput onChange={valueChangeHandler} type='password' name='password'
                                             placeholder='password'/>
                                <div className=''>
                                    <button className='button border-0' onClick={signHandler}>
                                        Sign Up
                                    </button>
                                    {/*<div className='mt-3 d-flex justify-content-center gap-15 align-item-center'>*/}
                                    {/*    <Link to='/Login' className='button text-white'>*/}
                                    {/*        Sign Up*/}
                                    {/*    </Link>*/}
                                    {/*</div>*/}
                                </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Signup;