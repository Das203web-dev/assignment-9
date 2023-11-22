import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { ToastContainer, } from "react-toastify";
import PropTypes from 'prop-types';

export const Context = createContext(null);

const Provider = ({ children }) => {

    const [blogs, setBlogs] = useState([]);
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        fetch('/blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data.blogs))
    }, []);

    const handleRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const handleSignOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
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
    const authPro = { blogs, handleRegister, handleLogin, handleSignOut, currentUser, toastAlert };
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
