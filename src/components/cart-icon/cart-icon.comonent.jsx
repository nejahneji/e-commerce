import React from 'react' ;
import { connect } from 'react-redux';
import { ReactComponent as ShoppinIcon} from '../../assets/shopping-bag.svg'
import { ToggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.selectore';


import './cart-icon.styles.scss' ;

const CartIcon =({ToggleCartHidden , itemCount}) => (
<div className='cart-icon' onClick={ToggleCartHidden}>
    <ShoppinIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
</div>
) 

const mapDispatchToProps = dispatch => ({
    ToggleCartHidden : () => dispatch(ToggleCartHidden())
})

const mapStateToPrps = (state) => ({
   itemCount : selectCartItemsCount(state)
})

export default connect(mapStateToPrps,mapDispatchToProps)(CartIcon)