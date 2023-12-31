import { useContext } from "react";
import { GiLoveHowl } from "react-icons/gi";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Context } from "../../Provider/Provider";
import Profile from "../Profile/Profile";
import { MdOutlinePeople } from "react-icons/md";

const Header = () => {
    const { currentUser, handleSignOut } = useContext(Context);
    const navigate = useNavigate()

    const signOutHandler = () => {
        handleSignOut()
            .then(() => {
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
    }

    const links = <>
        <NavLink style={({ isActive }) => {
            return {
                // fontWeight: isActive ? "bold" : "",
                backgroundColor: isActive ? "#F2AA4CFF" : "",
                color: isActive ? "white" : "#F2AA4CFF",
                padding: "8px 12px",
                borderRadius: "4px",
                fontSize: "1rem"
            }
        }} to={"/"}>Home</NavLink>
        <NavLink style={({ isActive }) => {
            return {
                // fontWeight: isActive ? "bold" : "",
                backgroundColor: isActive ? "#F2AA4CFF" : "",
                color: isActive ? "white" : "#F2AA4CFF",
                padding: "8px 12px",
                borderRadius: "4px",
                fontSize: "1rem"
            }
        }} to={"/about"}>About</NavLink>
        <NavLink style={({ isActive }) => {
            return {
                // fontWeight: isActive ? "bold" : "",
                backgroundColor: isActive ? "#F2AA4CFF" : "",
                color: isActive ? "white" : "#F2AA4CFF",
                padding: "8px 12px",
                borderRadius: "4px",
                fontSize: "1rem"
            }
        }} to={"/gallery"}>Gallery</NavLink>
        <NavLink style={({ isActive }) => {
            return {
                // fontWeight: isActive ? "bold" : "",
                backgroundColor: isActive ? "#F2AA4CFF" : "",
                color: isActive ? "white" : "#F2AA4CFF",
                padding: "8px 12px",
                borderRadius: "4px",
                fontSize: "1rem"
            }
        }} to={"/blog"}>Our Blog</NavLink>
        <NavLink style={({ isActive }) => {
            return {
                // fontWeight: isActive ? "bold" : "",
                backgroundColor: isActive ? "#F2AA4CFF" : "",
                color: isActive ? "white" : "#F2AA4CFF",
                padding: "8px 12px",
                borderRadius: "4px",
                fontSize: "1rem"
            }
        }} to={"/contact"}>Contact</NavLink>
    </>

    return (
        <div className="navbar bg-[#101820FF] shadow-xl  shadow-slate-600 z-50">
            <div className="navbar-start gap-1 items-center">
                <div className="dropdown">
                    <label tabIndex={0} className=" lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F2AA4CFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu gap-5 menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-[#101820FF]  rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <span className="flex flex-col justify-center text-center items-center">
                    <a className=" text-[#F2AA4CFF] text-xl flex flex-row gap-1 items-center">Social <span className="text-2xl text-[#FFD700]"><GiLoveHowl></GiLoveHowl></span> Events </a>

                </span>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5">
                    {links}
                </ul>
            </div>

            <div className="navbar-end flex gap-2">
                {
                    currentUser ? <Profile></Profile> : <MdOutlinePeople className="w-10 h-10 rounded-full"></MdOutlinePeople>
                }
                {
                    currentUser ? <Link onClick={signOutHandler} className="px-3 py-2 rounded text-white bg-[#F2AA4CFF]">Logout</Link> :
                        <Link to={'/login'} className="px-3 py-2 rounded text-white bg-[#F2AA4CFF]">Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;