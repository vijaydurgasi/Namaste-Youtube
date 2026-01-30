import React, { useState, useEffect } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/Constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import Shimmer from '../utils/Shimmer';

const VideoContainer = () => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {

        getVideos();

    }, []);

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        // console.log("json Data", json);
        setVideos(json.items);
    };

    if (videos.length === 0) {
        return <Shimmer type="video" />;
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
            {videos.map((video) => (
                <Link to={"/watch?v=" + video.id}><VideoCard key={video.id} info={video} /></Link>
            ))};
        </div>
    );
};

export default VideoContainer;