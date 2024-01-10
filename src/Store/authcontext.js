import React, {useState} from "react";

export const AuthContext = React.createContext({
    token:'',
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{}
})

const AuthProvider = (props)=>{
    const initialtoken = localStorage.getItem('token')
    const [token,settoken] = useState(initialtoken)
    const userisloggedin = !!token
    const loginHandler = (token,email) =>{
        settoken(token)
        localStorage.setItem('token',token)
        localStorage.setItem('email',email)
    }
    const logoutHandler = ()=>{
        settoken(null)
        localStorage.removeItem('token')
        localStorage.removeItem('email')
    }
    const contextvalue = {
        token:token,
        isLoggedIn:userisloggedin,
        login:loginHandler,
        logout:logoutHandler
    }
    return <AuthContext.Provider value={contextvalue}>{props.children}</AuthContext.Provider>
}

export default AuthProvider