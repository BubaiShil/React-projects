import { useContext, createContext } from "react";


export const UserContext = createContext({
    user: null,
    setUser: ()=>{}
})

export const ContextProvider = UserContext.Provider

export default function useLogin(){
    return   useContext(UserContext)
}