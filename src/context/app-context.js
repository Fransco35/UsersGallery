import React, {useCallback, useState, useEffect, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from './auth-context';

   const AppContext = React.createContext({
    users: [],
    toggleFavorite: (id) => {},
    isLoading: true,
    isError: false,
    error: null
});

 export const ContextProvider = (props) => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setError] = useState(false)
    const [err, setErr] = useState(null)

    const history = useHistory()


    const LoggedIn = useContext(AuthContext).isLoggedIn

    const getUsers = useCallback( async () => {
        try {
           const response = await fetch("https://randomuser.me/api/?results=27");
           
           if(!response.ok) {
             throw new Error("Didn't work!")
           }
   
         const data = await response.json()
         
         const finalData = data.results

         finalData.map(obj => obj.isFavorite = false)

          setUsers(finalData) 
         setIsLoading(false)
   
        } catch(error) {
          setError(true)
          setErr(error.message)
        }
   
      }, [])
   
      useEffect(() => {
        getUsers()
      }, [getUsers])

      const toggleFavoriteHandler = (userId) => {
        if(LoggedIn) {
          setUsers((currentUserList) => {
            const userIndex = currentUserList.findIndex((u) => u.id === userId);
            const newFavStatus = !currentUserList[userIndex].isFavorite;
            const updatedList = [...currentUserList];
            updatedList[userIndex] = {
              ...currentUserList[userIndex],
              isFavorite: newFavStatus
            };
            return updatedList;
          })
        } else {
        alert('You need to login first')
         history.push("/login")
        }
        }
        
       
      return (
          <AppContext.Provider
          value = {{
            users: users,
            isLoading: isLoading,
            isError: isError,
            error: err,
            toggleFavorite: toggleFavoriteHandler

          }}
          >
            {props.children}
          </AppContext.Provider>
      )
}

export default AppContext