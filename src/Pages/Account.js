import Container from "../Components/Container";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import { useState } from "react";
import { useEffect } from "react";
import useUserLoginInfo from "../hooks/useLoginInfo";
import { filterDocsFromCollectionRT } from "../actions/CommonAction";

const Account = () => {

    const [data, setData] = useState([{id:'annd'}])

    const user = useUserLoginInfo()

    useEffect(() => {
        if (user?.id) filterDocsFromCollectionRT('orders', '', [["userID", "==", user?.id]], generate)
    }, [user])

    const generate = (dataa)=>{
        const x = dataa.map((item)=>{
            const text = item?.timestamp
            const seconds = text.seconds;
            const milliseconds = text.nanoseconds / 1000000; // Convert nanoseconds to milliseconds
            const timestampInMillis = seconds * 1000 + milliseconds;
            const date = new Date(timestampInMillis);
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            const hours = date.getHours();
            const minutes = String(date.getMinutes()).padStart(2, '0');

            const period = hours >= 12 ? 'PM' : 'AM';
            const formattedHours = String(hours % 12 || 12).padStart(2, '0');

            const formattedDate = `${day}/${month}/${year} ${formattedHours}:${minutes} ${period}`;


            return {
            id:item?.id,
            firstName:item?.firstName,
            lastName:item?.lastName,
            email:item?.email,
            timestamp:formattedDate|| '',
            payStatus:item?.payStatus,
            shipment:item?.shipment,
            price:item?.price,
        }})

        setData(x)
    }

    console.log(data, 'userrr');

    return (
        <>
            <Meta title={'Our Store'} />
            <BreadCrumb title='My Account' />
            <Container class1='checkout-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className="row">
                        <div className="col-12">
                            <table className="table">
                                <thead className="thead-light">
                                    <tr>
                                    <th scope="col">NO</th>
                                    <th scope="col">ID</th>
                                        <th scope="col">First Name</th>
                                        <th scope="col">Last Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Payment</th>
                                        <th scope="col">Shipment</th>
                                        <th scope="col">Total</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.map((item,index)=>(
                                    <tr>
                                         <th scope="row">{index+1}</th>
                                         <th scope="row">{item?.id}</th>
                                         <th scope="row">{item?.firstName}</th>
                                         <th scope="row">{item?.lastName}</th>
                                         <th scope="row">{item?.email}</th>
                                         <th scope="row">{item?.timestamp}</th>
                                         <th scope="row">{item?.payStatus}</th>
                                         <th scope="row">{item?.shipment || 'Pending'}</th>
                                         <th scope="row">{formatLKR(item?.price )|| ''} LKR</th>
                                         <th scope="row">
                                            <button type="button" className="btn btn-primary">View</button>                                            
                                         </th>
                                        
                                     </tr>      
                                    ))
                                        
                                    }                        
                                </tbody>
                            </table>
                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Purchase History</h5>
                                    <p className="card-text">Your Path to Seamless Shopping: Exploring Purchase Chronicles.</p>
                                    <a href="javascript:void(0)" className="btn btn-primary">More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">My Orders</h5>
                                    <p className="card-text">Empowering Your Shopping Legacy: My Orders, My Story.</p>
                                    <a href="javascript:void(0)" className="btn btn-primary">More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default Account


function formatLKR(value) {
    const formattedValue = parseFloat(value).toLocaleString('en-US', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  
    return formattedValue;
  }
  