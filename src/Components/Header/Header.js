import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
    const [clicked, setClicked] = useState(false);
    return (
        <nav className="navbar navbar-expand-lg navbar-light my-nav">
            <div className="container">
                <button
                    className={`navbar-toggler ${clicked ? "collapsed" : ""}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded={clicked}
                    aria-label="Toggle navigation"
                >
                    <i className="fa-solid fa-bars"></i>
                </button>
                <div
                    className={`collapse navbar-collapse ${clicked && ""}`}
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                onClick={() => setClicked(!clicked)}
                                to="/"
                                className="nav-link "
                                aria-current="page"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                onClick={() => setClicked(!clicked)}
                                to="about"
                                className="nav-link "
                                aria-current="page"
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                onClick={() => setClicked(!clicked)}
                                to="resume"
                                className="nav-link "
                                aria-current="page"
                            >
                                Resume
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                onClick={() => setClicked(!clicked)}
                                to="contact"
                                className="nav-link "
                                aria-current="page"
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
