import { createContext, useEffect, useState } from "react";

export const Context = createContext(null);

const Provider = ({ children }) => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('/blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data.blogs))
    }, [])

    const authPro = { blogs };
    console.log(blogs)
    return (
        <Context.Provider value={authPro}>
            {children}
        </Context.Provider>
    );
};

export default Provider;
