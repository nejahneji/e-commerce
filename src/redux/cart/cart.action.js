import CardTypes from "./cart.types"



export const ToggleCartHidden = () => ({
    type : CardTypes.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
    type : CardTypes.ADD_ITEM ,
    payload : item
})