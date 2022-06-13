import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./About.css";

const About = () => {
    return (
        <div className="py-5">
            <div className="container">
                <h2 className="text-uppercase fw-bold title">About Me</h2>
                <div className="line mb-5"></div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-md-4">
                            <ul className="about-link">
                                <div className="links">
                                    <li className="mb-4">
                                        <NavLink to="/about/about-me">
                                            About Me
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/about/education">
                                            Education
                                        </NavLink>
                                    </li>
                                </div>
                            </ul>
                        </div>
                        <div className="col-md-8 links-desc">{<Outlet />}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
