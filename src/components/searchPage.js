import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SEARCH_RESULT_URL } from "../utils/Constants";

const SearchPage = () => {
    const [searchParams] = useSearchParams();

    const query = searchParams.get("search_query");

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        if (!query) return;
        fetchSearchResults();
    }, [query]);

    const fetchSearchResults = async () => {
        try {
            const data = await fetch(SEARCH_RESULT_URL(query));
            const json = await data.json();
            console.log("search DATA", json);
            setVideos(json.items || []);
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    };

    return (
        <div className="flex flex-col gap-6">
            {videos?.map((video) => (
                <Link to={`/watch?v=${video.id.videoId}`}><div
                    key={video.id.videoId}
                    className="flex gap-4 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition"
                >
                    <img
                        src={video.snippet.thumbnails.medium.url}
                        alt={video.snippet.title}
                        className="w-72 h-40 object-cover rounded-lg"
                    />

                    <div className="flex flex-col">
                        <h2 className="text-lg font-semibold">
                            {video.snippet.title}
                        </h2>

                        <p className="text-sm text-gray-600 mt-1">
                            {video.snippet.channelTitle}
                        </p>

                        <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                            {video.snippet.description}
                        </p>
                    </div>
                </div></Link>
            ))}
        </div>
    );
};

export default SearchPage;
