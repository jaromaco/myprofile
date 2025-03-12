import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../Logo.png";

export default function Header () {
    return (
        <header>
            <span>
                <Link to="/"><img src={Logo} alt="logo"/></Link>
            </span>
        <nav>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
        </header>
    );
    }