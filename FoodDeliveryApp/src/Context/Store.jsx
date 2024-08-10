import { useContext, createContext, useState, useEffect } from "react";
import { food_list } from "../assets/assets";



// Create a context with a default value of null
export const storeContext = createContext(null);

// ContextProvider component
export const ContextProvider = ({ children }) => {


    const [cartItems, setCartItems] = useState({})


    const addToCart = (cartItem) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev };
            if (updatedCart[cartItem]) {
                updatedCart[cartItem] += 1;
            } else {
                updatedCart[cartItem] = 1;
            }
            return updatedCart;
        });
    };

    const removeFromCart = (cartItem) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev };
            if (updatedCart[cartItem]) {
                if (updatedCart[cartItem] > 1) {
                    updatedCart[cartItem] -= 1;
                } else {
                    delete updatedCart[cartItem];
                }
            }
            return updatedCart;
        });
    };



    const totalValue=()=>{
        let total = 0
        for (const item in cartItems) {
            if (cartItems[item]>0) {
                let itemMatched = food_list.find((product)=> product._id === item)
                total += itemMatched.price * cartItems[item]
            }
            
        }
        return total;
    }



    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        totalValue
    };

    return (
        <storeContext.Provider value={contextValue}>
            {children}
        </storeContext.Provider>
    );
};


export default  function useFood() {
    return useContext(storeContext);
}







// export const storeContext = createContext({
//     contextValue: ()=>{
//         food_list
//     }

    
// })


// export const ContextProvider = storeContext.Provider

// export default function useFood(){
//     return useContext(storeContext)
// }
