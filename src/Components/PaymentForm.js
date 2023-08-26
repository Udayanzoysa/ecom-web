import React, { useState, useContext, useRef } from 'react';
import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js';
import { CardCvcElement, CardExpiryElement, CardNumberElement } from '@stripe/react-stripe-js';
import stripePromise from '../stripeConfig';
import firebase from "firebase/compat/app";
import { StoreContext } from '../providers/ContextProvider';
import emailjs from '@emailjs/browser';



function PaymentForm() {
    const stripe = useStripe();
    const elements = useElements();

    const { getValue } = useContext(StoreContext);

    const orderData = getValue('customer.shipping');

    const form = useRef();

    const addOrderToFirestore = async () => {
        try {
            const db = firebase.firestore();

            // Add the shippingData to the "orders" collection
            await db.collection('orders').add({
                ...orderData,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(), // Add a timestamp
            });

            console.log('Order added to Firestore successfully.');
        } catch (error) {
            console.error('Error adding order to Firestore:', error);
        }
    };

    const sendEmail = (e) => {
        emailjs.sendForm('service_kdpnpkl', 'template_nnfawre', form.current, 'q3tbZM9y__h9pZvN1')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });

        if (error) {
            console.error(error);
            alert(error);
        } else {
            console.log('PaymentMethod:', paymentMethod);
            addOrderToFirestore();
            alert("pay Success");
            // Here, you can make an API call to complete the payment on your server
        }
        sendEmail();
    };

    return (
        <form ref={form} onSubmit={handleSubmit}>
            <label>
                Name:
            </label>
            <input className='form-control' type="text" name="name" />
            <label>
                Email:
            </label>
            <input className='form-control' type="email" name="email" />
            {/* Other billing details fields */}

            <input type="hidden" name='billing_address' value="test address" />

            <CardElement />

            <button className='button' type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
}

function PaymentFormWrapper() {
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm />
        </Elements>
    );
}

export default PaymentFormWrapper;
