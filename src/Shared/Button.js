import React from "react";
import "./Button.css";

const Button = ({ children }) => {
    return (
        <button className="btn-9">
            <span>{children}</span>
        </button>
    );
};

export default Button;
