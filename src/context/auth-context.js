import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogin: (email, password) => {},
    onLogOut: () => {}
})

export const AuthContextProvider = props => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const history = useHistory();

    useEffect(() => {
        const storedItem = localStorage.getItem("loggedIn");
    
        if (storedItem === "1") {
          setIsLoggedIn(true);
        }
      }, []);
    
      const loginHandler = (email, password) => {
        localStorage.setItem("loggedIn", "1");
        setIsLoggedIn(true);
        history.push("/");
      };

    const logoutHandler = () => {
        localStorage.removeItem("loggedIn");
        setIsLoggedIn(false);
    }


    return <AuthContext.Provider
    value={{ isLoggedIn: isLoggedIn, onLogin:loginHandler, onLogOut: logoutHandler }}
    >
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;