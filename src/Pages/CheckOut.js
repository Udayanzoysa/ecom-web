import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import product8 from '../images/product 8.png';
import Container from '../Components/Container';
import PaymentModal from '../Components/PayhereModal';

const CheckOut = (props) => {

    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;


    return (
        <>
            <Container class1='checkout-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-7'>
                        <div className='checkout-left-data'>
                            <h3 className='website-name'>Dushan Glass Center</h3>
                            <nav style={{ "--bs-breadcrumb-divider": '>' }}
                                aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to='/Cart' className='text-dark total-price'>Cart</Link></li>
                                    &nbsp; /
                                    <li className="breadcrumb-item active total-price" aria-current="page">
                                        Information</li> &nbsp; /
                                    <li className="breadcrumb-item active total-price">Shipping</li>
                                    &nbsp; /
                                    <li className="breadcrumb-item active total-price" aria-current="page">
                                        Payment</li>
                                </ol>
                            </nav>
                            <form action=''
                                className='d-flex gap-15 flex-wrap justify-content-between'>
                                <div className='w-100'>
                                    <select name='' className='form-control form-select' id=''>
                                        <option value='Select Provice' selected='selected'>Select Province</option>
                                        <option value='Southern'>Southern</option>
                                        <option value='Western'>Western</option>
                                        <option value='Uva'>Uva</option>
                                        <option value='Central'>Central</option>
                                        <option value='Sabaragamuwa'>Sabaragamuwa</option>
                                        <option value='Eastern'>Eastern</option>
                                        <option value='North Western'>North Western</option>
                                        <option value='North Central'>North Central</option>
                                        <option value='Northern'>Northern</option>
                                    </select>
                                </div>
                                <div className='flex-grow-1'>
                                    <input type='text'
                                        placeholder='First Name'
                                        className='form-control' />
                                </div>
                                <div className='flex-grow-1'>
                                    <input type='text'
                                        placeholder='Last Name'
                                        className='form-control' />
                                </div>
                                <div className='w-100'>
                                    <input type='text'
                                        placeholder='Address'
                                        className='form-control' />
                                </div>
                                <div className='flex-grow-1'>
                                    <input type='text'
                                        placeholder='City'
                                        className='form-control' />
                                </div>
                                <div className='flex-grow-1'>
                                    <select name='' className='form-control form-select' id=''>
                                        <option value='District' selected='selected'>District</option>
                                        <option value='Galle'>Galle</option>
                                        <option value='Colombo'>Colombo</option>
                                        <option value='Matara'>Matara</option>
                                        <option value='Hambantota'>Hambantota</option>
                                        <option value='Rathnapura'>Rathnapura</option>
                                        <option value='Kegalla'>Kegalla</option>
                                        <option value='Kaluthara'>Kaluthara</option>
                                        <option value='Badulla'>Badulla</option>
                                        <option value='Monaragala'>Monaragala</option>
                                        <option value='Matale'>Matale</option>
                                    </select>
                                </div>
                                <div className='flex-grow-1'>
                                    <input type='text'
                                        placeholder='ZipCode'
                                        className='form-control' />
                                </div>
                                <div className='w-100'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <Link to='/Cart' className='text-dark'>
                                            <MdOutlineArrowBackIosNew className='me-2' />
                                            Return to Cart
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='col-5'>                    
                        <div className='border-bottom py-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='total'>SubTotal</p>
                                <p className='total-price' >LKR 1100</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='mb-0 total'>Shipping</p>
                                <p className='mb-0 total-price'>LKR {cartItems.shippingPrice}</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                            <h4 className='total'>Total</h4>
                            <h5 className='total-price'>LKR 1500</h5>
                        </div>
                        <div className='mt-5 '>
                            <Link to='/Cart' className='button mx-5' >
                                Continue to Shipping
                            </Link>
                            <PaymentModal orderId={45896588} name="Just For You Mom Ribbon Cake" amount="4500"></PaymentModal>
                            
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default CheckOut;