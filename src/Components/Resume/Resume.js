import React from "react";
import Button from "../../Shared/Button";
import "./Resume.css";

const Resume = () => {
    return (
        <div className="resume">
            <a
                className="btn-text"
                href="ramash-resume.pdf"
                download="ramash-resume.pdf"
            >
                <Button> Get Resume</Button>
            </a>
        </div>
    );
};

export default Resume;
