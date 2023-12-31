import React, { useEffect, useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import ReactImageZoom from 'react-image-zoom';
import ReactStars from 'react-rating-stars-component';
import { Link, useParams } from 'react-router-dom';
import BreadCrumb from '../Components/BreadCrumb';
import Color from '../Components/Color';
import Container from '../Components/Container';
import Meta from '../Components/Meta';
import { getDocFromCollection } from './../actions/CommonAction';

const SingleProduct = (props) => {

    const { onAdd } = props;
    const { id } = useParams();

    const [product, setProduct] = useState({})
    const [selectedImage, setSelectedImage] = useState(product)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getDocFromCollection('product', id).then(async (data) => {
            let colors = []
            let tags = []
            let brand = (await getDocFromCollection('brand', data?.brand))['name']
            let category = (await getDocFromCollection('category', data?.category))['name']
            let stockAvailable = +data?.quantity > 0 ? true : false
            let price = +data?.price

            for (let color of data?.colors) {
                let doc = (await getDocFromCollection('color', color))['color']
                colors.push(doc)
            }

            for (let tag of data?.tags) {
                let doc = (await getDocFromCollection('tag', tag))['name']
                tags.push(doc)
            }
            setProduct({ ...data, category, brand, stockAvailable, price, colors, tags ,id })
            setSelectedImage(Array.isArray(data?.images) ? data?.images[0] : '')
        }).finally(() => {
            setIsLoading(false)
        })
    }, [])

    const images = {
        width: 400,
        height: 600,
        zoomWidth: 600,
        img: selectedImage ? selectedImage : 'img1'
        // image_hover: product?.image_hover
    };
    const [orderedProduct, setorderedProduct] = useState(true);

    const onClickImageHandler = (image) => {
        setSelectedImage(image)
    }

    return (
        <>
            <Meta title={'Product Name'} />
            <BreadCrumb title={product?.title} />
            {isLoading ? <div style={{ width: '100%' }}><div style={{ width: '100%', height: '14vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <div class="spinner-border text-primary" role="status">
                <span class="sr-only"></span>
            </div> </div> </div> :
                <>
                    <Container class1='main-product-wrapper home-wrapper-2 py-5'>

                        <div className='row'>
                            <div className='col-6'>
                                <div className='main-product-image'>
                                    <div>
                                        <ReactImageZoom {...images} />
                                    </div>
                                </div>
                                <div className='other-product-images d-flex  gap-15'>
                                    {
                                        product?.images?.map((image) => (
                                            <div onClick={() => { onClickImageHandler(image) }}>
                                                <img src={image}
                                                    className='img-fluid align-items-center' alt='product' />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='main-product-details'>
                                    <div className='border-bottom '>
                                        <h3>{product?.name}</h3>
                                    </div>
                                    <div className='border-bottom py-3'>
                                        <p className='price'>Rs {product?.price || ''}</p>
                                        <div className='d-flex align-items-center gap-10'>
                                            <ReactStars
                                                count={5}
                                                value={4}
                                                size={24}
                                                edit={true}
                                                activeColor="#ffd700"
                                            />
                                            <p className='mb-0 t-review'>{`[${4} reviews]`}</p>
                                        </div>
                                        <a className='review-btn' href='#review'>write a review</a>
                                    </div>
                                    <div className='border-bottom py-3'>
                                        <div className='d-flex gap-10 align-items-center my-2'>
                                            <h4 className='product-heading'>Brand :</h4>
                                            <p className='product-data'>{product?.brand || ''}</p>
                                        </div>
                                        <div className='d-flex gap-10 align-items-center my-2'>
                                            <h4 className='product-heading'>Category :</h4>
                                            <p className='product-data'>{product?.category || ''}</p>
                                        </div>
                                        <div className='d-flex gap-10 align-items-center my-2'>
                                            <h4 className='product-heading'>Tags :</h4>
                                            {
                                                product?.tags?.map((tag) => (
                                                    <p className='product-data'>{
                                                        tag},
                                                    </p>
                                                )
                                                )
                                            }
                                        </div>
                                        <div className='d-flex gap-10 align-items-center my-2'>
                                            <h4 className='product-heading'>Availability :</h4>
                                            <p className='product-data'>{product.stockAvailable ? 'In Stock' : 'Out of Stock'}</p>
                                        </div>
                                        <div className='d-flex gap-10 flex-row mt-2 mb-3'>
                                            <h4 className='product-heading'>Size :</h4>
                                            <div className='d-flex align-items-center gap-10'>
                                                <select name='' className='form-control form-select fs-16' id=''>
                                                    <option value='manual'>Normal</option>
                                                    <option value='manual'>Medium</option>
                                                    <option value='manual'>Large</option>
                                                    {
                                                        product?.size?.map((item) => (
                                                            <option value='4mm riflect(black)' selected='selected'>
                                                                {item}
                                                            </option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                        <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                            <h4 className='product-heading'>Color :</h4>
                                            <Color data={product?.colors} />
                                        </div>
                                        <div className='d-flex align-items-center gap-15 flex-row mt-2 mb-3'>
                                            <h4 className='product-heading'>Quantity :</h4>
                                            <div className=''>
                                                <input
                                                    type='number'
                                                    name=''
                                                    min={1}
                                                    max={product?.quantity}
                                                    className='form-control'
                                                    style={{ width: '70px' }}
                                                    id=''
                                                />
                                            </div>
                                            <div>
                                                <div className='d-flex gap-30 align-items-center ms-5'>
                                                    <Link onClick={() => onAdd(product)} className='button'>
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
                                                    <AiOutlineHeart className='fs-4 me-2' />Add to whishlist</a>
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
                                    <div dangerouslySetInnerHTML={{ __html: product?.description ? product?.description : '' }} />
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
                                                    placeholder='Comments' />
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
            }

        </>
    );
};

export default SingleProduct;