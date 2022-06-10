import React from "react";
import skillImg from "../../images/skill-img.jpg";

const Skills = () => {
    return (
        <div className="skill-area ">
            <div className="container">
                <h2 className="text-uppercase fw-bold title">Skills</h2>
                <div className="line mb-5"></div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="skill-image mx-auto">
                            <img src={skillImg} alt="skill" />
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center my-3">
                        <div className="skill text-start ">
                            <ul>
                                <li>
                                    <strong>Expert in -</strong> HTML5, CSS3,
                                    JavaScript(ES5 + 6), Bootstrap, Tailwind CSS
                                    , React.JS, React Hooks, React Hook Form,
                                    React Router-Dom, React Query,
                                    React-firebase-hooks, Authentication, Rest
                                    API, Nodemailer, JWT.
                                </li>
                                <li>
                                    <strong>Comfortable with-</strong>{" "}
                                    Node.JS(Express JS), PHP, MongoDB, mySQL.
                                </li>
                                <li>
                                    <strong>Tools and Others-</strong> Github,
                                    Firebase, Netlify, Heroku
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
