import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
import About from "../Pages/About/About";
import Gallery from "../Pages/Gallery/Gallery";
import Blogs from "../Pages/Blogs/Blogs";
import ServiceDetails from "../components/Service/ServiceDetails/ServiceDetails";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
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
                element: <Gallery></Gallery>
            },
            {
                path: '/blog',
                element: <Blogs></Blogs>
            },
            {
                path: '/service/:category/:package',
                element: <ServiceDetails></ServiceDetails>
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