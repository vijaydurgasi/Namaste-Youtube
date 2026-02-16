import React from "react";
import { Link } from "react-router-dom";

const Button = ({ label, type }) => {
    const path = type ? `/category/${type}` : "/";

    return (
        <Link to={path}>
            <button className="bg-gray-200 text-black px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-gray-300 flex-shrink-0">
                {label}
            </button>
        </Link>
    );
};

export default Button;
