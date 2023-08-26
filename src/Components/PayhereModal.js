import React from 'react';

const PaymentModal = ({ orderId, name, amount }) => {

    // Put the payment variables here
    var payment = {
        "sandbox": true,
        "preapprove": true,
        "merchant_id": "1222985",    // Replace your Merchant ID
        "return_url": 'return url after payment',     // Important
        "cancel_url": 'cancel url when payment cancelled',     // Important
        "notify_url": "url to notify payment status and information",
        "order_id": orderId,
        "items": "Door bell wireles",
        "amount": amount,
        "currency": "LKR",
        "first_name": name,
        "last_name": "Perera",
        "email": "samanp@gmail.com",
        "phone": "0771234567",
        "address": "No.1, Galle Road",
        "city": "Colombo",
        "country": "Sri Lanka",
        "delivery_address": "No. 46, Galle road, Kalutara South",
        "delivery_city": "Kalutara",
        "delivery_country": "Sri Lanka",
        "custom_1": "",
        "custom_2": ""
    };

    // Called when user completed the payment. It can be a successful payment or failure
    window.payhere.onCompleted = function onCompleted(orderId) {
        console.log("Payment completed. OrderID:" + orderId);
        //Note: validate the payment and show success or failure page to the customer
    };

    // Called when user closes the payment without completing
    window.payhere.onDismissed = function onDismissed() {
        //Note: Prompt user to pay again or show an error page
        console.log("Payment dismissed");
    };

    // Called when error happens when initializing payment such as invalid parameters
    window.payhere.onError = function onError(error) {
        // Note: show an error page
        console.log("Error:" + error);
    };

    function pay() {
        window.payhere.startPayment(payment);
    }

    return <button className='button' onClick={pay}>Pay with Payhere</button>;
};

export default PaymentModal;