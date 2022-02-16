import React from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { ToggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import "./cart-dropdown.styles.scss"

 const CartDropdown = ({cartItems}) => {
  let history = useHistory()
  let dispatch =useDispatch()
   return (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
        </div>
       <CustomButton onClick={()=> {history.push('/checkout'); dispatch(ToggleCartHidden())}}>GO TO CHECK OUT </CustomButton> 
       
   </div>
 )
 };

const mapStateToProps = createStructuredSelector({
  cartItems : selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
