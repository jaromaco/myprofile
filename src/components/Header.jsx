import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Logo from "../Logo.png";

export default function Header () {
    return (
        <>
                
            <nav className="navbar navbar-expand navbar-light bg">
                <span>
                    <NavLink to="/"><img src={Logo} alt="logo"/></NavLink>
                </span>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/services">Services</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
    }