import React from "react";

const CartContext = React.createContext({
    totalPrice:0,
    items:[],
    addToCart:(item)=>{},
    removeFromCart:(id)=>{},
    removeProduct:(id)=>{}
})

export default CartContext