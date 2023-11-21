import { GiLoveHowl } from "react-icons/gi";
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
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
        }} to={"/blogs"}>Our Blog</NavLink>
        <NavLink style={({ isActive }) => {
            return {
                // fontWeight: isActive ? "bold" : "",
                backgroundColor: isActive ? "#F2AA4CFF" : "",
                color: isActive ? "white" : "#F2AA4CFF",
                padding: "8px 12px",
                borderRadius: "4px",
                fontSize: "1rem"
            }
        }} to={"/blogs"}>Contact</NavLink>
    </>

    return (
        <div className="navbar bg-[#101820FF] shadow-xl shadow-slate-600">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F2AA4CFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu gap-5 menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-[#101820FF]  rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <span className="flex flex-col justify-center text-center items-center">
                    <a className="btn btn-ghost text-[#F2AA4CFF] text-xl flex flex-col">Social <span className="text-2xl text-[#FFD700]"><GiLoveHowl></GiLoveHowl></span> Events </a>

                </span>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="px-3 py-2 rounded text-white bg-[#F2AA4CFF]">Login</Link>
            </div>
        </div>
    );
};

export default Header;