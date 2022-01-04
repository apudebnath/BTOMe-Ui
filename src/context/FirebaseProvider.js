import React,{createContext} from 'react';
import useFirebase from '../customhook/useFirebase';

export const FirebaseContext = createContext()

const FirebaseProvider = ({children}) => {   
    const firebase = useFirebase();  
    return (
       <FirebaseContext.Provider value={firebase}>
           {children}
       </FirebaseContext.Provider>
    );
};

export default FirebaseProvider;