import React, { useEffect, useContext, useRef } from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import Color from '../Components/Color';
import ProductCard from '../Components/ProductCard';
import { useState } from 'react';
import gr from '../images/gr.svg';
import gr2 from '../images/gr2.svg';
import gr3 from '../images/gr3.svg';
import gr4 from '../images/gr4.svg';
import Meta from '../Components/Meta';
import { StoreContext } from '../providers/ContextProvider';
import Container from '../Components/Container';
import { filterDocsFromCollection, getAllDocFromCollection, getDocFromCollection } from '../actions/CommonAction'


const OurStore = (props) => {
  const [grid, setGrid] = useState(4);
  const [products, setProducts] = useState([])
  const [inStock, setInStock] = useState(false)
  let productForFilter = useRef([])
  const [isLoading, setIsLoading] = useState(false)
  const { setValue, getValue } = useContext(StoreContext)
  const filter = getValue('filter')

  useEffect(() => {
    setIsLoading(true)
    getAllDocFromCollection('product').then(async (data) => {
      let array = []

      for (let doc of data) {
        if (doc.brand) {
          let brand = await getDocFromCollection('brand', doc.brand)
          array.push({ ...doc, "brand": brand.name })
          continue
        }
        array.push({ ...doc })
      }

      setProducts(array)
      productForFilter.current = array
    }).finally(() => {
      setIsLoading(false)
    })
  }, [])

  const { onAdd } = props;

  useEffect(() => {
    let filterResult = productForFilter.current.filter((item) => {
      if (inStock) {
        if (filter?.key) {
          if (item.title.toLowerCase().includes(filter?.key)) {
            if (parseInt(item.quantity) > 0) {
              return true
            }
          }
        }
        else {
          if (parseInt(item.quantity) > 0) {
            return true
          }
        }

      } else {
        if (filter?.key) {
          return item.title.toLowerCase().includes(filter?.key)
        } else {
          return true
        }

      }

    })

    setProducts(filterResult)

  }, [filter, inStock])

  const inStockHandler = (e) => {
    console.log(e.target.checked)
    setInStock(e.target.checked)

  }


  return (
    <>
      <Meta title={'Our Store'} />
      <BreadCrumb title='Our Store' />
      <Container class1='store-wrapper home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-3'>
            <div className='filter-card mb-3'>
              <h4 className='filter-title'>
                Shop by Categories</h4>
              <div>
                <ul className='ps-0'>
                  <li>Glasses</li>
                  <li>Brass</li>
                  <li>Locks</li>
                  <li>Others</li>
                </ul>
              </div>
            </div>
            <div className='filter-card mb-3'>
              <h4 className='filter-title'>Filter By</h4>
              <div>
                <h6 className='sub-title'>Availability</h6>
                <div>
                  <div className='form-check'>
                    <input className='form-check-input'
                      type="checkbox" id="" value="" onChange={inStockHandler} />
                    <label className='form-check-label' htmlFor="">
                      In Stock
                    </label>
                  </div>
                  <div className='form-check'>
                    {/* <input className='form-check-input'
                      type="checkbox" id="" value={inStock} /> */}
                    {/* <label className='form-check-label' htmlFor="">
                      Out of Stock
                    </label> */}
                  </div>
                </div>
                <h6 className='sub-title'>price</h6>
                <div className='d-flex align-items-center gap 10'>
                  <div className="form-floating">
                    <input type="email" className="form-control"
                      id="floatingInput"
                      placeholder="From" />
                    <label htmlFor="floatingInput">From</label>
                  </div>
                  <div className="form-floating">
                    <input type="email" className="form-control"
                      id="floatingInput1"
                      placeholder="To" />
                    <label htmlFor="floatingInput">To</label>
                  </div>
                </div>
                <h6 className='sub-title'>Colors</h6>
                <div>
                  <Color />
                </div>
                <h6 className='sub-title'>Size</h6>
                <p className='desc'>Glasses size available in feet,inches, and milimeters.Brass item size available in small,medium, large</p>
                <div className='d-flex align-items-center gap-10'>
                  <select name='' className='form-control form-select fs-16' id=''>
                    <option value='4mm riflect(black)' selected='selected'>4 mm riflect black</option>
                    <option value='4mm riflect(blue)'>4mm riflect blue</option>
                    <option value='4mm riflect(green)'>4mm riflect green</option>
                    <option value='4mm riflect(red)'>4mm riflect red</option>
                    <option value='4mm riflect(red)'> 1 FEET </option>
                    <option value='4mm riflect(red)'> 2 FEET</option>
                    <option value='4mm riflect(red)'> 4 FEET</option>
                    <option value='4mm riflect(red)'> S</option>
                    <option value='4mm riflect(red)'> M </option>
                    <option value='4mm riflect(red)'> L </option>
                  </select>
                </div>
              </div>
            </div>
            <div className='filter-card mb-3'>
              <h4 className='filter-title'>Product Tags</h4>
              <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                  Design Glasses
                </span>
                <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                  Texture Glasses
                </span>
                <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                  Door Lock
                </span>
                <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                  Window lock
                </span>
                <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                  Brass
                </span>
                <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                  Mirrors
                </span>
              </div>
            </div>
          </div>
          <div className='col-9'>
            <div className='filter-sort-grid mb-4'>
              <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center gap-10'>
                  <p className='mb-0 d-block' style={{ width: '100px' }}> Sort By: </p>
                  <select name='' className='form-control form-select' id=''>
                    <option value='manual'>Featured</option>
                    <option value='best-selling selected'>Best Selling</option>
                    <option value='created-ascending'>Date,Old to new</option>
                    <option value='created-descending'>Date,new to old</option>
                    <option value='title-ascending'>Alphabetically, A - Z</option>
                    <option value='title-descending'>Alphabetically, Z - A</option>
                  </select>
                </div>
                <div className='d-flex align-items-center gap-10'>
                  <p className='totalproducts mb-0'>21 Products</p>
                  <div className='d-flex gap-10 align-items-center grid'>
                    <img onClick={() => {
                      setGrid(3);
                    }}
                      src={gr4} className='d-block img-fluid' alt='Grid' />
                    <img onClick={() => {
                      setGrid(4);
                    }}
                      src={gr3} className='d-block img-fluid' alt='Grid' />
                    <img onClick={() => {
                      setGrid(6);
                    }}
                      src={gr2} className='d-block img-fluid' alt='Grid' />
                    <img onClick={() => {
                      setGrid(12);
                    }}
                      src={gr} className='d-block img-fluid' alt='Grid' />
                  </div>
                </div>
              </div>
            </div>
            <div className='product-list pb-5'>
              <div className='row' >
                {isLoading ? <div style={{ width: '100%' }}><div style={{ width: '100%', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <div class="spinner-border text-primary" role="status">
                  <span class="sr-only"></span>
                </div> </div> </div> :
                  products.map((product) => (
                    <div className='col-4'>
                      <ProductCard grid={grid} key={product.id} product={product} onAdd={onAdd} />
                    </div>

                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default OurStore;