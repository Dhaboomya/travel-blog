import { NavLink, Router } from "react-router-dom";
import React from "react";
import "./Nav.css";

const Nav = () => {
    return (
        <nav >
            <div className="heading">
                <NavLink to="/home" >TRAVEL BLOG</NavLink></div>
            <div className="navbar">
                <NavLink to="/home">HOME</NavLink>
                <NavLink to="/trip">TRIP</NavLink>
                <NavLink to="/blog">BLOG</NavLink>
            </div>
        </nav>

    )
}

export default Nav;