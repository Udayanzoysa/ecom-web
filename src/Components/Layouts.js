import React, {useEffect} from 'react';
import {Outlet} from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import useUserLoginInfo from "../hooks/useLoginInfo";
import {useDispatch} from "react-redux";
import {setUserDetails} from "../store/reducers/userDetails-slice";

const Layouts = (props) => {

    let userDetails = useUserLoginInfo()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setUserDetails(userDetails))
    }, [userDetails]);

    return (
        <>
            <Header countCartItems={props.countCartItems}/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Layouts;