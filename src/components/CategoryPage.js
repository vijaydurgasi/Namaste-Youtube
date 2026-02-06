import React from "react";
import { useParams } from "react-router-dom";
import VideoContainer from "./videoContainer";
import { YOUTUBE_GAMING_API, YOUTUBE_MUSIC_API } from "../utils/Constants";

const CategoryPage = () => {
    const { type } = useParams();

    let api = null;
    let title = "";

    if (type === "gaming") {
        api = YOUTUBE_GAMING_API;
        title = "Gaming";
    }

    if (type === "music") {
        api = YOUTUBE_MUSIC_API;
        title = "Music";
    }

    return (
        <div>
            <h1 className="text-2xl font-bold p-4">{title}</h1>
            <VideoContainer api={api} />
        </div>
    );
};

export default CategoryPage;
