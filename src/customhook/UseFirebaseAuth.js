import { useContext } from "react";
import {FirebaseContext} from '../context/FirebaseProvider';

const UseFirebaseAuth = () => {
    return useContext(FirebaseContext);
}

export default UseFirebaseAuth;