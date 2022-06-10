import React from "react";
import "./Home.css";
import Typical from "react-typical";
import Button from "../../Shared/Button";
import heroBg from "../../images/hero-bg.jpg";
import myImage from "../../images/ramash.png";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "../Contact/Contact";

const Home = () => {
    return (
        <main>
            <div
                className="hero-area py-5"
                style={{
                    backgroundImage: `linear-gradient(rgba(6, 40, 61, 0.3), rgba(6, 40, 61, 0.7)), url(${heroBg})`,
                    backgroundPosition: `center`,
                    backgroundRepeat: `no-repeat`,
                    backgroundSize: `cover`,
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 order-2 order-md-1">
                            <div className="portfolio-area">
                                <div className="social-contact my-3">
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
                                <div className="portfolio-name">
                                    <h3 className="text-white">
                                        Hello, I'm{" "}
                                        <span className="portfolio-title">
                                            Ramash Halder
                                        </span>
                                    </h3>
                                    <h2 className="text-white">
                                        <Typical
                                            loop={Infinity}
                                            steps={[
                                                "MERN Stack developer",
                                                2000,
                                                "Front end developer",
                                                2000,
                                                "Back end developer",
                                                2000,
                                            ]}
                                        />
                                    </h2>
                                </div>
                                <p className="text-white">
                                    Building applications with front and back
                                    end.
                                </p>
                                <div className="btn-area">
                                    <Button>Hire me</Button>

                                    <a
                                        className="btn-text"
                                        href="ramash-resume.pdf"
                                        download="ramash-resume.pdf"
                                    >
                                        <Button> Get Resume</Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 align-items-center order-1 order-md-2">
                            <div className="image-area">
                                <div className="img-wraper">
                                    <div className="image-container">
                                        <img src={myImage} alt="Ramash" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Skills />
            <Projects />
            <Contact />
        </main>
    );
};

export default Home;
