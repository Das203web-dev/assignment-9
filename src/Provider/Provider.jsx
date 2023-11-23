import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { ToastContainer, } from "react-toastify";
import PropTypes from 'prop-types';

export const Context = createContext(null);
const googleProvider = new GoogleAuthProvider()

const Provider = ({ children }) => {

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const [blogs, setBlogs] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('/blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data.blogs))
    }, []);

    const handleRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const handleSignOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false)
        })
    }, []);
    const toastAlert = () => {
        const toast = toast('wow so easy');
        return (
            <div className="mt-20">
                <ToastContainer value={toast}></ToastContainer>
            </div>
        )
    }
    const authPro = { blogs, handleRegister, handleLogin, handleSignOut, currentUser, toastAlert, loading, googleLogin };
    // console.log(blogs)
    return (
        <Context.Provider value={authPro}>
            {children}
        </Context.Provider>
    );
};

Provider.propTypes = {
    children: PropTypes.node
}

export default Provider;
