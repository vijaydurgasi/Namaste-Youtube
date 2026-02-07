import React, { useState, useEffect } from 'react';
import { YOUTUBE_VIDEOS_API } from '../utils/Constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
// import Shimmer from '../utils/Shimmer';

const VideoContainer = ({ api }) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const getVideos = async () => {
            const data = await fetch(api || YOUTUBE_VIDEOS_API);
            const json = await data.json();
            setVideos(json.items);
        };

        getVideos();
    }, [api]);

    // if (videos.length === 0) {
    //     return (

    //         <Shimmer type="video" />

    //     );
    // }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 overflow-auto">
            {videos.map((video) => (
                <Link
                    key={video.id}
                    to={"/watch?v=" + video.id}
                >
                    <VideoCard info={video} />
                </Link>
            ))}

        </div>
    );
};

export default VideoContainer;
