import React , { useState} from "react";
import CartContext from "./cartcontext";

const CartProvider = (props) =>{  
    const addItemHandler = (item) =>{
        const existingitemindex = cartcontext.items.findIndex((obj) => {
            return obj.id === item.id;
          });
          if (existingitemindex !== -1) {
            let newitem = {
              ...cartcontext.items[existingitemindex],
              Amount: Number(cartcontext.items[existingitemindex].Amount) + Number(item.Amount) ,
            };
            cartcontext.items[existingitemindex] = newitem;
          } else {
            cartcontext.items.push(item);
          }
          
          cartcontext.totalPrice += Number(item.price)*Number(item.Amount);
          console.log(cartcontext);
          localStorage.setItem('cart',JSON.stringify(cartcontext))
          setCart({ ...cartcontext });          
    }
    const removeItemHandler = (id) =>{
        const existingitemindex = cartcontext.items.findIndex((obj) => {
            return obj.id === id;
        });
        cartcontext.totalPrice = +cartcontext.totalPrice - Number(cartcontext.items[existingitemindex].price)
        let updateditems;
        if(+cartcontext.items[existingitemindex].Amount === 1){
            updateditems = cartcontext.items.filter((item)=>{
                return item.id!==cartcontext.items[existingitemindex].id;
            })
            cartcontext.items = [...updateditems]
        }else{
            let afterremovingitem = {
                ...cartcontext.items[existingitemindex],
                Amount: Number(cartcontext.items[existingitemindex].Amount) - 1 ,
            };
            cartcontext.items[existingitemindex] = afterremovingitem;
        }
        localStorage.setItem('cart',JSON.stringify(cartcontext))
        setCart({ ...cartcontext})
    }
    const removeProductHandler = (id) =>{
        const existingitemindex = cartcontext.items.findIndex((obj) => {
            return obj.id === id;
        });
        cartcontext.totalPrice = cartcontext.totalPrice - Number(cartcontext.items[existingitemindex].price)*Number(cartcontext.items[existingitemindex].Amount)
        const updateditems = cartcontext.items.filter((item)=>{
            return item.id!==cartcontext.items[existingitemindex].id;
        })
        cartcontext.items = [...updateditems]
        localStorage.setItem('cart',JSON.stringify(cartcontext))
        setCart({...cartcontext})
    }
    const cartcontext = {
        totalPrice:0,
        items:[],
        addToCart:addItemHandler,
        removeFromCart:removeItemHandler,
        removeProduct:removeProductHandler
    }
    const [cart, setCart] = useState(cartcontext);
    return (
        <CartContext.Provider value={cart}>{props.children}</CartContext.Provider>
    )
}

export default CartProvider