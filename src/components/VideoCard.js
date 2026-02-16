import React from 'react';
import { formatViewCount } from '../utils/formatCount';

const VideoCard = ({ info }) => {
    const title = info?.snippet?.title;
    const channelTitle = info?.snippet?.channelTitle;
    const viewCount = info?.statistics?.viewCount;

    if (!title) return null;

    return (
        <div className="w-full bg-gray-100 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer overflow-hidden">

            {/* Thumbnail */}
            <div className="w-full aspect-video">
                <img
                    className="w-full h-full object-cover"
                    src={info?.snippet?.thumbnails?.medium?.url}
                    alt={title}
                />
            </div>

            {/* Text */}
            <div className="p-3">
                <h3 className="font-semibold text-sm md:text-base line-clamp-2">
                    {title}
                </h3>

                <p className="text-xs md:text-sm text-gray-600 mt-1">
                    {channelTitle}
                </p>

                <p className="text-xs text-gray-500">
                    {formatViewCount(viewCount)} views
                </p>
            </div>

        </div>
    );

};


export default VideoCard;