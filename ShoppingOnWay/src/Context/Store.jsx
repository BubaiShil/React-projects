import { createContext, useContext, useState } from 'react'
import {items,bestSeller} from '../assets/data/items'

export const StoreContext = createContext(null)

export const ContextProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState({})


    const addToCart = (cartId,newQty) => {
        setCartItems((prev)=>{
            const updatedCart = {...prev}
            if (newQty>0) {
                updatedCart[cartId] = newQty;
            }else{
                delete updatedCart[cartId]
            }
            console.log("Updated Cart: ", updatedCart);
            
            return updatedCart;
        })
    }

    const removeFromCart=(cartId)=>{
        setCartItems((prev)=>{
            const updatedCart = { ...prev };
            if(updatedCart[cartId]>0){
                updatedCart[cartId]-= 1
            }else{
                delete updatedCart[cartId]
            }
            return updatedCart;
        })
        
    }


    const ContextValue = {
        items,bestSeller,
        addToCart,
        cartItems,setCartItems,
        removeFromCart
    }

    return (
        <StoreContext.Provider value={ContextValue}>
            {children}
        </StoreContext.Provider>
    )
}

export default function useShop() {
    return useContext(StoreContext)
}