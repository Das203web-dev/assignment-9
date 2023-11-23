import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
import About from "../Pages/About/About";
import Gallery from "../Pages/Gallery/Gallery";
import Blogs from "../Pages/Blogs/Blogs";
import ServiceDetails from "../components/Service/ServiceDetails/ServiceDetails";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Contact from "../Pages/Contact/Contact";
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/data.json')
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/gallery",
                element: <PrivateRoute><Gallery></Gallery></PrivateRoute>
            },
            {
                path: '/blog',
                element: <PrivateRoute><Blogs></Blogs></PrivateRoute>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: '/service/:category/:package',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }


        ]
    }
])


export default routes;