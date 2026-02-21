import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import Shimmer from '../utils/Shimmer';
import LikeDislike from './like & dislike btn';
import SubscribeButton from './subscribeBtn';
// import Comments from './commentsContainer';

const WatchPage = () => {

  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  console.log("Video id", searchParams.get("v"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  if (!videoId) {
    return <Shimmer type="watch" />;
  }
  return (
    <div className="flex flex-col w-full">

      <div className="w-full">
        <div className="w-full md:max-w-4xl md:mx-auto md:px-6 py-4">

          <div className="relative w-full aspect-video">
            <iframe
              className="absolute top-0 left-0 w-full h-full md:rounded-xl"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

        </div>
      </div>

      <div className="w-full">
        <div className="w-full md:max-w-4xl md:mx-auto px-4 md:px-6 py-3">
          <div className="flex items-center gap-4">
            <LikeDislike />
            <SubscribeButton />
          </div>
        </div>
      </div>

    </div>
  );

};

export default WatchPage;