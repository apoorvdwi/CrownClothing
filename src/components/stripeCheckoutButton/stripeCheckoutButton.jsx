import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './stripeCheckoutButton.scss';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51IFFUnA3TZnASROvZuNOiH7c06Ih0rTa5jVLIb6BfZ7XwNTZpW9osfqsfwZm1msst37xN7H7kJwbn1PDbRlzZ7c5004ZPhRcQ4';

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="CROWN CLOTHING"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey = {publishableKey}
    />
  );
};

export default StripeCheckoutButton;