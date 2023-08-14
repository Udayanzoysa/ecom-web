import React from 'react'
import BlogCard from '../Components/BlogCard';
import Marquee from "react-fast-marquee";
import slide1 from '../images/slide 1.jpg';
import slide2 from '../images/slide 2.jpg';
import slide5 from '../images/slide 5.jpg';
import slide4 from '../images/slide 4.jpg';
import product1 from '../images/product 1.png';
import product2 from '../images/Product 2.png';
import product3 from '../images/product 3.png';
import product4 from '../images/product 4.png';
import product5 from '../images/product 5.png';
import product6 from '../images/product 6.png';
import product7 from '../images/product 7.png';
import product8 from '../images/product 8.png';
import Container from '../Components/Container';
import { services } from '../utils/Data';
const Home = () => {
  return (
    <>
    <Container class1='marque-wrapper py-3'> 
      <div className='row'>
          <div className='col-12'>
            <div className='marque-inner-wrapper card-wrapper'>
            <Marquee d-flex>
               <div className='w-25'>
                <img src={slide1} alt='slide' />
               </div>
               <div className='w-25'>
                <img src={slide2}  alt='slide' />
               </div>
               <div className='w-25'>
                <img src={slide5}  alt='slide' />
               </div>
               <div className='w-25'>
                <img src={slide4}  alt='slide' />
               </div>
            </Marquee>
            </div>
          </div>
        </div>
    </Container>
    <Container class1='home-wrapper-2 py-5'>
    <div className='row'>
          <div className='col-12'>
          <h3 className='section-heading'>Our Services</h3>
            <div className='services d-flex align-items-center justify-content-between'>
              {services?.map((i, j) => {
                return (
                  <div className='d-flex align-items-center gap-15' key={j}>
                    <img src={i.image} alt='services' />
                    <div>
                      <h6>{i.title}</h6>
                      <p className='mb-0'>{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
    </Container>
    <Container class1='home-wrapper-2 py-5'>
   <div className='row'>
          <div className='col-12'>
          <h3 className='section-heading'>Our Products</h3>
            <div className='categories d-flex align-items-center justify-content-between flex-wrap'>
              <div className='d-flex align-items-center'>
                <div>
                  <h6> Door Locks </h6>
                  <p> 20 items</p>
                </div>
                <img src={product3} alt='item1' />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6> Colored Glass </h6>
                  <p> 10 items</p>
                </div>
                <img src={product1} alt='item1' />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6> Window Locks </h6>
                  <p> 10 items</p>
                </div>
                <img src={product2} alt='item1' />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6> Design Glass </h6>
                  <p> 10 items</p>
                </div>
                <img src={product4} alt='item1' />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6> Texture Glass </h6>
                  <p> 10 items</p>
                </div>
                <img src={product5} alt='item1' />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6> Hings </h6>
                  <p> 10 items</p>
                </div>
                <img src={product6} alt='item1' />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6> Mirrors </h6>
                  <p> 10 items</p>
                </div>
                <img src={product7} alt='item1' />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6> Uv glass </h6>
                  <p> 10 items</p>
                </div>
                <img src={product8} alt='item1' />
              </div>
            </div>
          </div>
        </div>
    </Container>
    <Container className='blog-wrapper py-3 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
             <h3 className='section-heading'>Our Latest Blogs</h3>
          </div>
        </div>  
        <div className='row'>
          <div className='col-3'>
            <BlogCard />
          </div>
          <div className='col-3'>
            <BlogCard />
          </div>
          <div className='col-3'>
            <BlogCard />
          </div>
          <div className='col-3'>
            <BlogCard />
          </div>
        </div>
    </Container>
  </>
  );
};

export default Home;