import React from 'react';
import { formatViewCount } from '../utils/formatCount';

const VideoCard = ({ info }) => {
    const title = info?.snippet?.title;
    const channelTitle = info?.snippet?.channelTitle;
    const viewCount = info?.statistics?.viewCount;

    if (!title) return null;

    return (
        <div className="border border-gray-200 m-2 p-2 w-80 h-64 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1  transition-all duration-300 ease-in-out cursor-pointer ">
            <img className="w-full h-40 object-cover rounded-lg" src={info?.snippet?.thumbnails?.medium?.url} alt={title} />
            <h3 className="font-bold mt-2 truncate">{title}</h3>
            <p className="text-sm text-gray-600">{channelTitle}</p>
            <p> {formatViewCount(viewCount)} views</p>
        </div>
    );
};


export default VideoCard;