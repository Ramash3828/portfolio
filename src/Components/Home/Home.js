import React from "react";
import "./Home.css";

const Home = () => {
    return (
        <main>
            <div className="hero-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="portfolio-area">
                                <div className="social-contact">
                                    <a href="" target="_blank">
                                        <i class="fa-brands fa-github"></i>
                                    </a>
                                    <i class="fa-brands fa-facebook-f"></i>
                                    <i class="fa-brands fa-linkedin-in"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
