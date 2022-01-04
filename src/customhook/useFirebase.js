import axios from "axios";
import { getAuth, createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword,onAuthStateChanged,signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from "../firebase/firebase.initialize";


firebaseInitialize();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [admin, setAdmin] = useState({});    
    const [isLoading, setIsLoading] = useState(true);
    const [adminLoading, setAdminLoading] = useState(true);
      

    const auth = getAuth();

    const updateNavigate = (navigate,location) => {
        const replace = location?.state?.from || '/dashboard'
        navigate(replace, {
            replace: true,
        })
    }

    const register = (userName,email,mobileNumber,password,navigate,location) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email,password)
        .then((result) => {
            // const newUser = {email,name: userName,mobileNumber};
            setUser(result.user);
            updateProfile(auth.currentUser, {
                displayName: userName,
                phoneNumber: mobileNumber,
            })
            saveUserData(userName,email);
            setIsLoading(false);            
            updateNavigate(navigate,location);
        })
        .catch((error) => {
            console.log(error.message);
        })
        .finally(() => {
            setIsLoading(false); 
        })
    }

    const login = (userEmail, password,navigate,history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth,userEmail,password)
        .then((result) => {
            setUser(result.user);
            setIsLoading(false);
            updateNavigate(navigate,history);
        })
        .catch((error) => {
            console.log(error.message);
        })
        .finally(() => {
            setIsLoading(false);
        })
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then((result) => {
            setUser({})
            setIsLoading(false);
        })
        .catch((error) => {
            console.log(error.message);
        })
        .finally(() => {
            setIsLoading(false);
        })
    }

    const saveUserData = (name,email) => {
        const newUser = {
           name,
           email,
        }       
        axios.post('https://gentle-woodland-78175.herokuapp.com/create-new-user',newUser);        
    }

    useEffect(() => {
        setAdminLoading(true);
        axios.get(`https://gentle-woodland-78175.herokuapp.com/chack-isAdmin?email=${user.email}`)
        .then((response) => {            
            setAdmin(response.data);
            setAdminLoading(false);
        })
        .catch((error) => {
            console.log(error.message);
        })
        .finally(() => {
            setAdminLoading(false);
        })
    }, [user.email]);
    
    useEffect(() => {
        setIsLoading(true);
        const unsubscribe =onAuthStateChanged(auth,(user) => {
            if(user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        })

        return unsubscribe;
        
    },[])


    return {
        register,
        user,
        login,
        logOut,
        isLoading,
        admin,
        adminLoading,
    }

}

export default useFirebase;