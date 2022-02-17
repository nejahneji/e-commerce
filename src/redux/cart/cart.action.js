import CardTypes from "./cart.types"



export const ToggleCartHidden = () => ({
    type : CardTypes.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
    type : CardTypes.ADD_ITEM ,
    payload : item
})

export const removeItem = item => ({
    type :CardTypes.REMOVE_ITEM ,
    payload : item
})

export const clearItemFromCart = item => ({
    type : CardTypes.CLEAR_ITEM_FROM_CART ,
    payload : item
}) 