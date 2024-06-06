import { useContext, createContext, useState, useEffect } from "react";
import { getCurrentUser, getDocs  } from "../appwrite";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({children}) => {
     const [isLoggedIn, setIsLoggedIn] = useState(false);
     const [user, setUser] = useState(null);
     const [isLoading, setIsLoading] = useState(true);
     const [document, setDocument] = useState(null);
     useEffect(() => {
          getCurrentUser()
          .then((res) => {
               if (res) {
                    setIsLoggedIn(true);
                    setUser(res);
               } else {
                    setIsLoggedIn(false);
                    setUser(null);
               }
          })
          .catch((error) => {
               console.log(error);
          })
          .finally(() => {
               setIsLoading(false);
          })
     }, []);
     useEffect(() => {
          getDocs()
          .then((res) => {
               if (res) {
                    setDocument(res);
               } else {
                    setDocument(null);
               }
          })
          .catch((error) => {
               console.log(error);
          })
          .finally(() => {
               setIsLoading(false);
          })
     }, []);
     return (
          <GlobalContext.Provider
               value={{
                    isLoggedIn,
                    setIsLoggedIn,
                    user,
                    setUser,
                    isLoading,
                    document,
               }}
          >
               {children}
          </GlobalContext.Provider>
     )
}

export default GlobalProvider;