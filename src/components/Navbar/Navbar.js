import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate, NavLink } from "react-router-dom"

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const navigate = useNavigate();
    return (
        <nav className="navbar">
            <img
                src={require(`../../assets/t-logo.png`)}
                alt="Mandy logo"
                className="t-logo"
                onClick={() => {
                    navigate("/");
                }}
            />
            <img
                // src={require(`../../assets/2023-MT-Logo.png`)}
                src={require(`../../assets/mt.png`)}
                alt="Mandy logo"
                className="mandy"
                onClick={() => {
                    navigate("/");
                }}
            />
            <img
                src={require(`../../assets/${navbar ? "x" : "menu"}.png`)}
                alt="menu icon"
                className="menu-icon"
                onClick={() => {
                    setNavbar(!navbar);
                }}
            />
            <ul className="directories">
                <li><NavLink to="/" activeclassname="active"> Home </NavLink></li>
                <li><NavLink to="/portfolio" activeclassname="active"> Work </NavLink></li>
                <li><NavLink to="/about" activeclassname="active"> About </NavLink></li>
                <li><NavLink to="/contact" activeclassname="active"> Contact </NavLink></li>
            </ul>
            <div className="mobile-navbar" style={{ left: navbar ? "0%" : "-70% " }}>
                <p style={{ padding: "0vh 3vh"}}>Menu</p>
                <ul className="mobile-directories">
                    <li><Link to="/"> Home </Link></li>
                    <li><Link to="/portfolio"> Work </Link></li>
                    <li><Link to="/about"> About </Link></li>
                    <li><Link to="/contact"> Contact </Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;

