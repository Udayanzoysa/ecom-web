import React from 'react';
import { Link } from 'react-router-dom';
import newsletter from '../images/newsletter.png';
import { BsFacebook,BsWhatsapp,BsLinkedin,BsYoutube,BsInstagram } from 'react-icons/bs';
const Footer = () => {
  return (
  <>
  <footer className='py-4'>
    <div className='container-xxl'>
      <div className='row align-item-center'>
        <div className='col-5 py-4'>
          <div className='footer-top-data d-flex gap-30 align-item-center'>
            <img src={newsletter} alt='comment' />
             <h5 className='mb-0 text-white '>Add your comment here</h5>
          </div>
        </div>
        <div className='col-7'>
          <div className="input-group mt-3">
              <input 
                     type="text" className="form-control fs-20" 
                     placeholder="Type here..." aria-label="Type here..." 
                     described="basic-addon2"
              />
                  <span className="input-group-text" type ='submit' id="basic-addon2">
                     Send
                  </span>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <footer className='py-3'>
    <div className='container mt-1'>
      <div className='row'>
        <div className='col-4'>
          <h4 className='text-white mb-4'>Contact Us</h4>
          <div>
            <address className='text-white fs-16'>
              Dushan Glass center, <br /> No. 51 <br /> Gurubabila, Karandeniya
            </address>
            <a href='tel:+94 775014660' className='mt-3 d-block mb-0 text-white'>
              +94 775014660
            </a>
            <a href='mailto:dushanglasscenter@gmail.com' className='mt-3 d-block text-white'>
              dushanglasscenter@gmail.com
            </a>
            <div className='social_icons d-flex align-items-center mt-3 gap-30'>
              <a className='text-white' href='#'>
                <BsFacebook className='fs-4'/>
              </a>
              <a className='text-white' href='#'>
              <BsInstagram className='fs-4'/>
              </a>
              <a className='text-white' href='#'>
              <BsLinkedin className='fs-4'/>
              </a>
              <a className='text-white' href='#'>
              <BsWhatsapp className='fs-4'/>
              </a>
              <a className='text-white' href='#'>
              <BsYoutube className='fs-4'/>
              </a>
            </div>
          </div>
        </div>
        <div className='col-3'>
          <h4 className='text-white mb-4'>Information</h4>
          <div className='footer-links d-flex flex-column'>
            <Link to='/privacypolicy' className='text-white py-2 mb-1'>Privacy Policy</Link>
            <Link to='/refundpolicy' className='text-white py-2 mb-1'>Refunding Policy</Link>
            <Link to='/shippingpolicy' className='text-white py-2 mb-1'>Shipping Policy</Link>
            <Link to='/termandconditions' className='text-white py-2 mb-1'>Terms & Conditions</Link>
            <Link className='text-white py-2 mb-1'>FAQ</Link>
          </div>
        </div>
        <div className='col-3'>
          <h4 className='text-white mb-4'>Account</h4>
          <div className='footer-links d-flex flex-column'>
            <Link to='/Contact' className='text-white py-2 mb-1'>About Us</Link>
            <Link to='#search' className='text-white py-2 mb-1'>Search</Link>
            <Link to='/Contact' className='text-white py-2 mb-1'>Contact Us</Link>
            <Link to='/Login' className='text-white py-2 mb-1'>My Account</Link>
            <Link to='/Contact' className='text-white py-2 mb-1'>Add to cart</Link>
          </div>
        </div>
        <div className='col-2'>
          <h4 className='text-white mb-4'>Quick Access</h4>
          <div className='footer-links d-flex flex-column'>
            <Link to='/OurStore' className='text-white py-2 mb-1'>Glass Items</Link>
            <Link to='/OurStore' className='text-white py-2 mb-1'>Brass Items</Link>
            <Link to='/OurStore' className='text-white py-2 mb-1'>Lock & Hardware Items</Link>
            <Link to='/Blog' className='text-white py-2 mb-1'>Blog</Link>
            <Link to='/OurStore' className='text-white py-2 mb-1'>Others</Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
  
  <footer className='py-2'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <p className='text-center mb-0 text-white'>
            @copy:2023 Powered by DVK Developpers
          </p>
        </div>
      </div>
    </div>
  </footer>
   </>
  )
};

export default Footer;
