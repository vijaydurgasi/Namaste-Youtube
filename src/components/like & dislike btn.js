import { useState } from "react";

const LikeDislike = () => {
    const [liked, setLiked] = useState(null);

    return (
        <div className="flex gap-3 items-center">

            <button
                onClick={() => setLiked(liked === "like" ? null : "like")}
                className={`px-4 py-2 rounded-full border
          ${liked === "like" ? "bg-black text-white" : "bg-transparent"}
        `}
            >
                👍
            </button>

            <button
                onClick={() => setLiked(liked === "dislike" ? null : "dislike")}
                className={`px-4 py-2 rounded-full border 
          ${liked === "dislike" ? "bg-black text-white" : "bg-transparent"}
        `}
            >
                👎
            </button>

        </div>
    );
};

export default LikeDislike;
