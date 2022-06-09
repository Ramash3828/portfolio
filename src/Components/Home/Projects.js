import React from "react";
import phmImg from "../../images/PHM-Manufacturer.png";
import byCycleImg from "../../images/BiCycle-Store.png";
import eliteImg from "../../images/Elite-Physiotherapy-Center.png";

const Projects = () => {
    return (
        <div className="project-area">
            <div className="container">
                <h2 className="text-uppercase text-bold">Projects</h2>
                <div className="line mb-5"></div>
                <div className="row">
                    <div className="col-md-4">
                        <div class="card" style={{ width: `18rem` }}>
                            <div className="card-image">
                                <img
                                    src={phmImg}
                                    class="card-img-top"
                                    alt="..."
                                />
                            </div>
                            <div class="card-body">
                                <p class="card-text">
                                    <strong>Technologies:</strong>{" "}
                                    JavaScript(ES6), React.JS, Tailwind CSS,
                                    Firebase, MongoDB, Express.JS, Nodemailer,
                                    Heroku
                                </p>
                                <div className="card-link">
                                    <button
                                        onClick={() =>
                                            window.open(
                                                `https://motorcycle-parts-manufacturer.web.app/`
                                            )
                                        }
                                        className="view-btn"
                                    >
                                        preview
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card" style={{ width: `18rem` }}>
                            <div className="card-image">
                                <img
                                    src={byCycleImg}
                                    class="card-img-top"
                                    alt="..."
                                />
                            </div>
                            <div class="card-body">
                                <p class="card-text">
                                    <strong>Technologies:</strong>{" "}
                                    JavaScript(ES6), React.JS, Bootstrap,
                                    Firebase, MongoDB, Express.JS, Heroku
                                </p>
                                <div className="card-link">
                                    <button
                                        onClick={() =>
                                            window.open(
                                                `https://bicycle-store-4982a.firebaseapp.com/`
                                            )
                                        }
                                        className="view-btn"
                                    >
                                        preview
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card" style={{ width: `18rem` }}>
                            <div className="card-image">
                                <img
                                    src={eliteImg}
                                    class="card-img-top"
                                    alt="..."
                                />
                            </div>
                            <div class="card-body">
                                <p class="card-text">
                                    <strong>Technologies:</strong>{" "}
                                    JavaScript(ES6), React.JS, react-bootstrap,
                                    Firebase, react-firebase-hooks,
                                    react-toastify
                                </p>
                                <div className="card-link">
                                    <button
                                        onClick={() =>
                                            window.open(
                                                `https://elite-physiotherapy-center.web.app/`
                                            )
                                        }
                                        className="view-btn"
                                    >
                                        preview
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
