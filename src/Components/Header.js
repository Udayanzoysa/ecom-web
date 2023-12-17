import React, { useState, useContext, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import user from '../images/user.svg';
import wishlist from '../images/wishlist.svg';
import cart from '../images/cart.svg';
import Logout from './Logout';
import useUserLoginInfo from '../hooks/useLoginInfo';
import { getAuth, signOut } from 'firebase/auth';
import { StoreContext } from '../providers/ContextProvider';
import _ from 'lodash'


import { BsSearch } from 'react-icons/bs';
const Header = (props) => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    Logout();
    setValue('user', null)
  };

  let userDetails = useUserLoginInfo()
  const { setValue, getValue } = useContext(StoreContext)

  useEffect(() => {
    setValue({ path: 'user', data: userDetails })
  }, [userDetails]);

  const userValue = getValue('user');

  const searchHandler = (e) => {
    let debounce_fun = _.debounce(function () {
      setValue({ path: 'filter', data: {key:e?.target?.value} })
    }, 1000);

    debounce_fun()
  }

  return <>
    <header className='header-top-strip p-0'>
      <div className='container mt-0'>
        <div className='row align-item-center'></div>
        <div className='col-12 fs-20'>
          <p className="text-center text-white nb-2">
            Hotline : <a className="text-white" href="tel:+94 775014066">+94 775014066</a>
          </p>
        </div>
      </div>
    </header>

    <header className='header-upper'>
      <div className='container-xxl py-2'>
        <div className='row'>
          <div className='col-2'>
            <h3 className='text-center mt-2'>
              <Link className='text-white'>
                DGC
              </Link>
            </h3>
          </div>
          <div className='col-5'>
            <div className="input-group mt-2">
              <input id='search' type="text" className="form-control py-1 fs-20"
                placeholder="Search Product Here..." aria-label="Search Product Here..."
                described="basic-addon2" onChange={searchHandler} />
              <span className="input-group-text p-2" id="basic-addon2">
                <BsSearch />
              </span>
            </div>
          </div>
          <div className='col-4'>
            <div className='header-upper-links d-flex align-items-center justify-content-between fs-20'>
              {/* <div>
                <Link to='/Login' className='d-flex align-item-center justify-content-center gap-10 text-white'>
                  <img src={user} alt='user' />
                  <p className='mb-0'>
                    Login <br /> My Account
                  </p>
                </Link>
              </div> */}
              <div>
                {
                  userValue?.isLogged ? (
                    // If user value is set, show the dropdown
                    <div className="dropdown">
                      <button
                        className="btn btn-header dropdown-toggle d-flex align-item-center justify-content-center gap-10 text-white"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        onClick={handleDropdownToggle}
                      >
                        <img src={user} alt="user" />
                        <p className="mb-0">
                          Login <br /> My Account
                        </p>
                      </button>
                      <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
                        {/* Add your dropdown items here */}
                        <Link to="/profile" className="dropdown-item">
                          Profile
                        </Link>
                        <Link to="/settings" className="dropdown-item">
                          Settings
                        </Link>
                        <div className="dropdown-divider"></div>
                        <button className="dropdown-item" onClick={handleLogout}>
                          Logout
                        </button>
                      </div>
                    </div>

                  ) : (
                    // If user value is not set, show the login link
                    <div>
                      <Link to='/Login' className='d-flex align-item-center justify-content-center gap-10 text-white'>
                        <img src={user} alt='user' />
                        <p className='mb-0'>
                          Login <br /> My Account
                        </p>
                      </Link>
                    </div>

                  )}
              </div>
              <div>
                <Link to='/Wishlist' className='d-flex align-item-center gap-10 text-white'>
                  <img src={wishlist} alt='wishlist' />
                  <p className='mb-0'>
                    Favorite <br /> Whishlist
                  </p>
                </Link>
              </div>
              <div>
                <Link to='/Cart' className='d-flex align-item-center gap-10 text-white'>
                  <img src={cart} alt='cart' />
                  <div className='d-flex flex-column gap-10'>
                    <span className='badge bg-white text-dark'>{props.countCartItems}</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <header className='header-bottom py-1'>
      <div className='container mt-1'>
        <div className='row'>
          <div className='col-sm-4'>
            <div className='menu-bottom align-item-center gap-30'>
              <div className="dropdown" >
                <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                  type="button" id="dropdownMenuButton1"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  <img src='/images/menu.svg' alt='menu' />
                  <span className='me-5 d-inline-block'>Item Categories</span>
                </button>
                <ul className="dropdown-menu" labelled="dropdownMenuButton1">
                  <li>
                    <Link to='/OurStore' className="dropdown-item text-white">Glass</Link>
                  </li>
                  <li>
                    <Link to='/OurStore' className="dropdown-item text-white">Brass Items</Link>
                  </li>
                  <li>
                    <Link to='/OurStore' className="dropdown-item text-white">Lock Items</Link>
                  </li>
                  <li>
                    <Link to='/OurStore' className="dropdown-item text-white">Others</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='menu-links mt-2'>
              <div className='d-flex align-item-center gap-60'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/OurStore'>Our Store</NavLink>
                <NavLink to='/blog'>Blogs</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </>
};

export default Header;
