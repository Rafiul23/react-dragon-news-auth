import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from "../firebase.config";
import { useEffect } from "react";

export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const SignIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        })

        return () =>{
            unSubscribe();
        }
    },[])

    const logOut = () =>{
        return signOut(auth);
    }

    const authInfo = { 
        user, 
        createUser, 
        logOut,
        SignIn 
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;