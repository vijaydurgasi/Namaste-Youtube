import React from 'react'
import { useEffect } from 'react';
import { YOUTUBE_VIDEOS_API } from '../utils/Constants';

const VideoContainer = () => {

    useEffect(() => {

        getVideos();

    }, []);

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        console.log("json Data", json);
    };

    return (
        <div className='ml-[600px] '>videoContainer</div>
    )
}

export default VideoContainer;