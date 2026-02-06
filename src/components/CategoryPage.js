import React from "react";
import { useParams } from "react-router-dom";
import VideoContainer from "./videoContainer"
import { categoryConfig } from "../utils/categoryConfig";
import { YOUTUBE_VIDEOS_API } from "../utils/Constants";

const CategoryPage = () => {
    const { type } = useParams();

    const category = categoryConfig[type];

    if (!category) {
        return <h1 className="p-4 text-xl">Category not found</h1>;
    }

    const { title, categoryId } = category;

    const api =
        `${YOUTUBE_VIDEOS_API}&videoCategoryId=${categoryId}`;

    return (
        <div>
            <h1 className="text-2xl font-bold p-4">{title}</h1>
            <VideoContainer api={api} />
        </div>
    );
};

export default CategoryPage;
