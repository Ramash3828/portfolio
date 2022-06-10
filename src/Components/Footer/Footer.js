import React from "react";
import "./footer.css";
import myImage from "../../images/ramash.png";
import { Link } from "react-router-dom";
import phmImg from "../../images/PHM-Manufacturer.png";
import byCycleImg from "../../images/BiCycle-Store.png";
import eliteImg from "../../images/Elite-Physiotherapy-Center.png";

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="container pb-5">
                    <div className="row g-5">
                        <div className="col-md-4 text-white">
                            <div className="footer-contact">
                                <img src={myImage} alt="" />
                                <p className="mt-1 mb-0 myName">
                                    Ramash Halder
                                </p>
                                <small>(Web Developer)</small>
                                <div className="social-contact">
                                    <a
                                        href="https://github.com/Ramash3828?tab=repositories"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                    <a
                                        href="https://www.facebook.com/ramash.halder.5/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/ramash-halder-mern-stack-developers/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-start text-white">
                            <h4 className="mb-3 link-title">Link</h4>
                            <ul className="link-sec">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="about">About</Link>
                                </li>
                                <li>
                                    <Link to="resume">Resume</Link>
                                </li>
                                <li>
                                    <Link to="contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h4 className="mb-3 text-white pro-title">
                                Projects Link
                            </h4>
                            <div className="project-img mx-auto">
                                <div className="image-sec">
                                    <img
                                        onClick={() =>
                                            window.open(
                                                `https://motorcycle-parts-manufacturer.web.app/`
                                            )
                                        }
                                        src={phmImg}
                                        alt=""
                                    />
                                    <i class="fa-solid fa-link"></i>
                                </div>
                                <div className="image-sec">
                                    <img
                                        src={byCycleImg}
                                        alt=""
                                        onClick={() =>
                                            window.open(
                                                `https://bicycle-store-4982a.firebaseapp.com/`
                                            )
                                        }
                                    />
                                    <i class="fa-solid fa-link"></i>
                                </div>
                                <div className="image-sec">
                                    <img
                                        src={eliteImg}
                                        alt=""
                                        onClick={() =>
                                            window.open(
                                                `https://elite-physiotherapy-center.web.app/`
                                            )
                                        }
                                    />
                                    <i class="fa-solid fa-link"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy-right-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <p className="text-center text-md-start">
                                    Portfolio, Ramash Halder
                                </p>
                            </div>
                            <div className="col-md-6">
                                <p className="text-center text-md-end">
                                    {Date()}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
