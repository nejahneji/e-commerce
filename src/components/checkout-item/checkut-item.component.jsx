import React from 'react' ;
import { useDispatch } from 'react-redux';
import { addItem, clearItemFromCart, removeItem } from '../../redux/cart/cart.action';

import './checkout-item.styles.scss'




const CheckoutItem = ({cartItem}) => { 
    const  {imageUrl ,name , quantity ,price} = cartItem
    const dispatch = useDispatch()
    return (
         <div className='checkout-item'>
             <div className="image-container">
                 <img src={imageUrl} alt="item" />
             </div>
             <span className='name'>{name}</span>
             <span className='quantity'>
                 <div className='arrow' onClick={()=> dispatch(removeItem(cartItem))}>&#10094;</div>
                 <span className='value'>{quantity}</span>
                 <div className='arrow' onClick={()=> dispatch(addItem(cartItem))}>&#10095;</div>
                 </span>
             <span className='price'>{price}</span>
             <span className='remove-button' onClick={()=> dispatch(clearItemFromCart(cartItem))}>&#10006;</span>
         </div>
    )
}




export default CheckoutItem