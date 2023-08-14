import React, {useState} from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import ReactStars from 'react-rating-stars-component';
import ReactImageZoom from 'react-image-zoom';
import Color from '../Components/Color';
import product8 from '../images/product 8.png';
import product7 from '../images/product 7.png';
import product6 from '../images/product 6.png';
import product4 from '../images/product 4.png';
import {AiOutlineHeart} from 'react-icons/ai';
import Container from '../Components/Container';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import data from "../data";

const SingleProduct = (props) => {

    const {products, onAdd} = props;
    const {id} = useParams();
    const product = products.find((item) => (item.id == id))
    console.log(product,'product')

    const images = {
        width: 400,
        height: 600,
        zoomWidth: 600,
        img: product?.image,
        // image_hover: product?.image_hover
    };
    const [orderedProduct, setorderedProduct] = useState(true);
    return (
        <>
            <Meta title={'Product Name'}/>
            <BreadCrumb title='Product Name'/>
            <Container class1='main-product-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='main-product-image'>
                            <div>
                                <ReactImageZoom {...images} />
                            </div>
                        </div>
                        <div className='other-product-images d-flex  gap-15'>
                            <div>
                                <img src={product7}
                                     className='img-fluid align-items-center' alt='product'/>
                            </div>
                            <div>
                                <img src={product8}
                                     className='img-fluid' alt='product'/>
                            </div>
                            <div>
                                <img src={product6}
                                     className='img-fluid' alt='product'/>
                            </div>
                            <div>
                                <img src={product4}
                                     className='img-fluid' alt='product'/>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='main-product-details'>
                            <div className='border-bottom '>
                                <h3>{product?.name}</h3>
                            </div>
                            <div className='border-bottom py-3'>
                                <p className='price'>LKR 2000</p>
                                <div className='d-flex align-items-center gap-10'>
                                    <ReactStars
                                        count={5}
                                        value='3'
                                        size={24}
                                        edit={true}
                                        activeColor="#ffd700"
                                    />
                                    <p className='mb-0 t-review'>[02 reviews]</p>
                                </div>
                                <a className='review-btn' href='#review'>write a review</a>
                            </div>
                            <div className='border-bottom py-3'>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h4 className='product-heading'>Type :</h4>
                                    <p className='product-data'>{product?.type || ''}</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h4 className='product-heading'>Category :</h4>
                                    <p className='product-data'>{product?.category || ''}</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h4 className='product-heading'>Tags :</h4>
                                    <p className='product-data'>Glass, Ready made, Colored</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h4 className='product-heading'>Availability :</h4>
                                    <p className='product-data'>In stock</p>
                                </div>
                                <div className='d-flex gap-10 flex-row mt-2 mb-3'>
                                    <h4 className='product-heading'>Size :</h4>
                                    <div className='d-flex align-items-center gap-10'>
                                        <select name='' className='form-control form-select fs-16' id=''>
                                            <option value='manual'>Normal</option>
                                            <option value='4mm riflect(black)' selected='selected'>4 mm riflect black
                                            </option>
                                            <option value='4mm riflect(blue)'>4mm riflect blue</option>
                                            <option value='4mm riflect(green)'>4mm riflect green</option>
                                            <option value='4mm riflect(red)'>4mm riflect red</option>
                                            <option value='4mm riflect(red)'> 1 FEET</option>
                                            <option value='4mm riflect(red)'> 2 FEET</option>
                                            <option value='4mm riflect(red)'> 4 FEET</option>
                                            <option value='4mm riflect(red)'> S</option>
                                            <option value='4mm riflect(red)'> M</option>
                                            <option value='4mm riflect(red)'> L</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                    <h4 className='product-heading'>Color :</h4>
                                    <Color/>
                                </div>
                                <div className='d-flex align-items-center gap-15 flex-row mt-2 mb-3'>
                                    <h4 className='product-heading'>Quantity :</h4>
                                    <div className=''>
                                        <input
                                            type='number'
                                            name=''
                                            min={1}
                                            max={10}
                                            className='form-control'
                                            style={{width: '70px'}}
                                            id=''
                                        />
                                    </div>
                                    <div>
                                        <div className='d-flex gap-30 align-items-center ms-5'>
                                            <Link to='/cart' className='button'>
                                                Add to cart
                                            </Link>
                                            <Link to='/checkout' className='button'>
                                                Buy it now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h4 className='product-heading'>Shipping and Return :</h4>
                                    <p className='product-data'>Within <b>03 -07 business days</b> deliver the product
                                        after payment.
                                        More than $50 orders have free Shipping. </p>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <div>
                                        <a href='/wishlist'>
                                            <AiOutlineHeart className='fs-4 me-2'/>Add to whishlist</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1='description-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h4>Description</h4>
                        <div className='bg-white p-3'>
                            <p>
                                Please note that the fk annotation on the connecting lines indicates foreign keys,
                                linking the entities to their corresponding primary keys in other entities.
                                The relationship between Customer and User, as well as between Employee and User,
                                indicates a one-to-one relationship, denoted by "1" on both sides of the relationship
                                line.
                                The relationship between Order, Customer, Employee, and GlassItem indicates a
                                one-to-many relationship, denoted by "1" on the side of the "Order" entity and "*" on
                                the other side.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1='reviews-wrapper pb-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h4 id='review'>Reviews</h4>
                        <div className='review-inner-wrapper'>
                            <div className='review-head d-flex justify-content-between align-items-end'>
                                <div>
                                    <h4 className='mb-2'>Customer Reviews</h4>
                                    <div className='d-flex align-items-center gap-10'>
                                        <ReactStars
                                            count={5}
                                            value='3'
                                            size={24}
                                            edit={true}
                                            activeColor="#ffd700"
                                        />
                                        <p className='mb-0'>Based on 02 Reviews</p>
                                    </div>
                                </div>
                                {orderedProduct && (
                                    <div>
                                        <a className='text-dark text-decoration-underline'
                                           href=''>Write a Review</a>
                                    </div>
                                )
                                }
                            </div>
                            <div className='review-form py-4'>
                                <div>
                                    <h4 className='mb-2'>Write a Review</h4>
                                </div>
                                <form action='' className='d-flex flex-column gap-15'>
                                    <div>
                                        <ReactStars
                                            count={5}
                                            value='3'
                                            size={24}
                                            edit={true}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <div>
                         <textarea name=''
                                   id=''
                                   className='w-100 form-control'
                                   cols='30' rows='4'
                                   placeholder='Comments'/>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <button className='button border-0'>Submit Review</button>
                                    </div>
                                </form>
                            </div>
                            <div className='reviews mt-4'>
                                <div className='review'>
                                    <div className='d-flex gap-10 align-items-center'>
                                        <h6 className='mb-0'>Dhanushka</h6>
                                        < ReactStars
                                            count={5}
                                            value='3'
                                            size={24}
                                            edit={true}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <p className='mt-3'> Please note that the fk annotation on the connecting lines
                                        indicates foreign keys,
                                        linking the entities to their corresponding primary keys in other entities.
                                        The relationship between Customer and User, as well as between Employee and
                                        User,
                                        indicates a one-to-one
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default SingleProduct;