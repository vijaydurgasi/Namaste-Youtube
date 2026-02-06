import React from "react";
import { Link } from "react-router-dom";

const Button = ({ label, type }) => {
    const path = type ? `/category/${type}` : "/";

    return (
        <Link to={path}>
            <button className="bg-gray-200 text-black px-3 py-1.5 rounded-lg text-sm font-medium transition-colors hover:bg-gray-300">
                {label}
            </button>
        </Link>
    );
};

export default Button;
