import Container from "../Components/Container";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";

const Account = () => {
    return (
        <>
            <Meta title={'Our Store'} />
            <BreadCrumb title='My Account' />
            <Container class1='checkout-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className="row">
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