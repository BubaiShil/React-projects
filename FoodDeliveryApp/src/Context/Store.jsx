import { useContext, createContext } from "react";
import { food_list } from "../assets/assets";



// Create a context with a default value of null
export const storeContext = createContext(null);

// ContextProvider component
export const ContextProvider = ({ children }) => {
    const contextValue = {
        food_list
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
