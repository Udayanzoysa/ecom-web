import React from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import { AiOutlineHome, AiOutlinePhone, AiOutlineMail, AiOutlineInfoCircle } from 'react-icons/ai';
import Container from '../Components/Container';
import logo from '../images/logo.png';

const Contact = () => {
  return (
    <>
    <Meta title={'Contact Us'} />
    <BreadCrumb title='Contact Us'/>
    <Container class1='content-wrapper py-4 home-wraper-2'>
        <div className='row'>
          <div className='col-12'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253892.23922156618!2d80.07354428571257!3d6.12178742427436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae181444ab86bf9%3A0x7e2da08372bb35b5!2sDushan%20Glass%20centre!5e0!3m2!1sen!2slk!4v1689501794215!5m2!1sen!2slk" 
          width="600" 
          height="450" 
          className='border-0 w-100'
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="location">
          </iframe>
          </div>
          <div className='col-12 mt-5'>
            <div className='contact-inner-wrapper d-flex justify-content-between'>
              <div>
                <h3 className='contact-title mb-4'>Contact Us</h3>
                <form action='' className='d-flex flex-column gap-15'>
                  <div>
                    <input type='text' 
                    className='form-control' 
                    placeholder='Name' />
                  </div>
                  <div>
                    <input type='email' 
                    className='form-control' 
                    placeholder='Email'/>
                  </div>
                  <div>
                    <input type='tel' 
                    className='form-control' 
                    placeholder='Mobile Number'/>
                  </div>
                  <div>
                    <textarea name='' 
                    id= '' 
                    className='w-100 form-control' 
                    cols='30' rows='4'
                    placeholder='Comments'/>
                  </div>
                  <div>
                    <button className='button border-0'>Submit</button>
                  </div>
                </form>
                </div>
              <div>
                <h3 className='contact-title mb-4'>Get in Touch with Us</h3>
                <div>
                  <ul className='ps-0'>
                    <li className='mb-4 d-flex gap-15 align-item-center'> 
                      <AiOutlineHome className='fs-5' /> 
                      <address className='mb-0'>Dushan Glass center, No. 51, Gurubabila, Karandeniya</address>
                    </li>
                    <li className='mb-4 d-flex gap-15 align-item-center'> 
                      <AiOutlinePhone className='fs-5' />
                      <a href='tel:+94 775014660' className=''>+94 775014660</a> 
                    </li>
                    <li className='mb-4 d-flex gap-15 align-item-center'> 
                      <AiOutlineInfoCircle className='fs-5' />
                      <a href='mailto:dushanglasscenter@gmail.com' className=''>dushanglasscenter@gmail.com</a> 
                    </li>
                    <li className='mb-4 d-flex gap-15 align-item-center'> 
                      <AiOutlineMail className='fs-5' /> 
                      <p className='mb-0'>Monday - Sunday 9 AM - 9 PM</p>
                    </li>
                    <li className='mb-4 d-flex gap-15 align-item-center'> 
                       <img src={logo} alt='logo' />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Container>
    </>
  )
}

export default Contact;