import React, {useContext, useEffect} from 'react';
import {Outlet} from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import useUserLoginInfo from "../hooks/useLoginInfo";
import {StoreContext} from "../providers/ContextProvider";

const Layouts = (props) => {

    let userDetails = useUserLoginInfo()
    const {setValue, getValue} = useContext(StoreContext)

    useEffect(() => {
        setValue({path: 'user', data: userDetails})
    }, [userDetails]);

    console.log(getValue('user'))

    return (
        <>
            <Header countCartItems={props.countCartItems}/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Layouts;