import React from 'react';


const Button = ({ name }) => {
    return (
        <div>
            <button className="bg-gray-200 text-black px-3 py-1.5 rounded-lg text-sm font-medium transition-colors hover:bg-gray-300">
                {name}
            </button>

        </div>
    )
}

export default Button