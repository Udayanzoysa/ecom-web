import product1 from '../src/images/product 1.png';
import product2 from '../src/images/Product 2.png';
import product3 from '../src/images/product 3.png';
import product4 from '../src/images/product 4.png';
import product5 from '../src/images/product 5.png';
import product6 from '../src/images/product 6.png';
import product7 from '../src/images/product 7.png';

const data = {
    products: [
      {
        id: '1',
        name: 'TitanLock Elite',
        type:"Metal",
        price: 1400,
        rate:'2.6',
        image: product1,
        Category:"Home and Application",
        image_hover: product3,
        color: ['red','green'],
        size: ['40mm thick'],
      },
      {
        id: '2',
        name: 'SentinelKey MaxSecure',
        price: 2400,
        type:"Metal",
        rate:'1',
        Category:"Home and Application",
        image: product2,
        image_hover: product3,
        color: ['red'],
        size: ['40mm thick'],
      },
      {
        id: '3',
        name: 'FortiGate LockMaster',
        price: 1000,
        rate:'2',
        type:"Metal",
        Category:"Home and Application",
        image: product3,
        image_hover: product3,
        color: ['red','green'],
        size: ['40mm thick'],
      },
      {
        id: '4',
        name: 'QuantumGuard UltiLock',
        price: 1200,
        type:"Metal",
        image: product4,
        Category:"Home and Application",
        image_hover: product3,
        rate:'4',
        color: ['red'],
        size: ['40mm thick'],
      },  
    ],
  };
  export default data;
  