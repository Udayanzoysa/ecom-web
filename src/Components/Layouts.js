import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
const Layouts = (props) => {

  

  return (
   <>
   <Header countCartItems={props.countCartItems} />
   <Outlet />
   <Footer />
   </>
  );
};

export default Layouts;