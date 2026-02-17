import { useState } from "react";

const LikeDislike = () => {
    const [liked, setLiked] = useState(null);

    return (
        <div className="flex gap-3 items-center">

            <button
                onClick={() =>
                    setLiked(prev => (prev === "like" ? null : "like"))
                }
                className={`px-4 py-2 rounded-full border transition-colors duration-200
               ${liked === "like" ? "bg-black " : "bg-white "} `}
            >
                👍
            </button>

            <button
                onClick={() =>
                    setLiked(prev => (prev === "dislike" ? null : "dislike"))
                }
                className={`px-4 py-2 rounded-full border transition-colors duration-200
                  ${liked === "dislike" ? "bg-black" : "bg-white"} `}
            >
                👎
            </button>


        </div>
    );
};

export default LikeDislike;
