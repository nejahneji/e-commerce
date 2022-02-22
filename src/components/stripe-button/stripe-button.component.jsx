import React from 'react' ;
import StripeCheckout from 'react-stripe-checkout' ;


const StripeCheckoutButton = ({price}) => {
     const priceForStripe = price * 100 ;
     const publishableKey = 'pk_test_51KVkJMBuagX2CjxF77SDpexW4enFV3MTggCgVrXLGD6LkNEQOUmtw0sL76iIaTI3GXu24g0EaRfgPOxuibKlPW8I00TgLuVpYr'
     const onToken = token => {
         console.log(token) ;
         alert('Payment Successful')
     }

 return (
     <StripeCheckout 
        label='Pay Now'
        name='Clothing'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your Total is ${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
     /> 
 )
}
export default StripeCheckoutButton ;