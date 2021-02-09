import React, { FC, useEffect } from 'react';
import '../../tailwind.output.css';
import ReactPlayer from 'react-player/lazy';
import './index.css';
import { useVideosContext } from '../../pages';
import { postViewedVideo } from '../../api/postViewedVideo';

export const VideoView: FC = () => {
    const { selectedVideo } = useVideosContext();

    useEffect(() => {
        postViewedVideo({
            videoTitle: selectedVideo?.snippet?.title,
            videoId: selectedVideo?.id?.videoId,
            channelTitle: selectedVideo?.snippet?.channelTitle,
        });
    }, [selectedVideo]);

    return (
        <div className="md:mb-5 sm:mb-5">
            <div className="relative player-wrapper">
                <ReactPlayer
                    className="absolute top-0 left-0"
                    url={`https://www.youtube.com/watch?v=${selectedVideo?.id?.videoId ?? 'ZbZSe6N_BXs'}`}
                    width="100%"
                    height="100%"
                    controls
                />
            </div>
            <h1 className="mt-5 font-bold">{selectedVideo?.snippet?.title ?? 'No title'}</h1>
            <p className="mt-5">{selectedVideo?.snippet?.description ?? 'No description'}</p>
            <p className="mt-5">
                <span className="font-bold">Uploaded by: </span>
                {selectedVideo?.snippet?.channelTitle ?? 'no data'}
            </p>
        </div>
    );
};
