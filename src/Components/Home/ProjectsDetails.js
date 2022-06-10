import React from "react";
import phmImg from "../../images//newPHM.png";
import status from "../../images/status.png";
import review from "../../images/review.png";

const ProjectsDetails = () => {
    return (
        <div className="project-details">
            <div className="container">
                <h2 className="text-uppercase fw-bold title">
                    Projects Details
                </h2>
                <div className="line mb-5"></div>
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center">
                        <div className="project-wrapper">
                            <div className="project-sample">
                                <div className="left-side">
                                    <img
                                        className="img-fluid"
                                        src={phmImg}
                                        alt=""
                                    />
                                </div>
                                <div className="right-side">
                                    <div className="half-img">
                                        <img src={status} alt="" />
                                    </div>
                                    <div className="half-img">
                                        <img src={review} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3">
                                <button
                                    onClick={() =>
                                        window.open(
                                            "https://motorcycle-parts-manufacturer.web.app/"
                                        )
                                    }
                                    className="link-btn "
                                >
                                    Live Site
                                </button>
                                <button
                                    onClick={() =>
                                        window.open(
                                            "https://github.com/Ramash3828/motorcycle-parts-manufacturer-server"
                                        )
                                    }
                                    className="link-btn "
                                >
                                    Server Site
                                </button>
                                <button
                                    onClick={() =>
                                        window.open(
                                            "https://github.com/Ramash3828/motorcycle-parts-menfecturer-client"
                                        )
                                    }
                                    className="link-btn "
                                >
                                    Client Site
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="details ">
                            <h4 className="my-3 pro-title">PHM Manufacturer</h4>
                            <div className="tools my-3">
                                <p>
                                    <strong>Technologies:</strong>
                                </p>
                                <button className="tools-btn">
                                    JavaScript(ES6)
                                </button>
                                <button className="tools-btn">React JS</button>
                                <button className="tools-btn">MongoDB</button>
                                <button className="tools-btn">
                                    Express JS
                                </button>
                                <button className="tools-btn">
                                    Nodemailer
                                </button>
                                <button className="tools-btn">
                                    Tailwind CSS
                                </button>
                                <button className="tools-btn">Firebase</button>
                                <button className="tools-btn">Heroku</button>
                                <button className="tools-btn">JWT</button>
                            </div>
                            <p>
                                <strong>Description:</strong>
                            </p>
                            <ul>
                                <li>
                                    Implemented a beautiful user interface with
                                    ReactJS.
                                </li>
                                <li>
                                    Utilized to create the REST API and
                                    implement to load the data on the home page.
                                </li>
                                <li>
                                    Implement the login system and the user
                                    logged in shows the Dashboard button in
                                    Navbar.
                                </li>
                                <li>
                                    The dashboard contains many routes divided
                                    are two sections. Only the user can see some
                                    routes and the admin can see another route.
                                </li>
                                <li>
                                    The user submitted the order, the user can
                                    see the confirmed message user’s personal
                                    email inbox.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsDetails;
