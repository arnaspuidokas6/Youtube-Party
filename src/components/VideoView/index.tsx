/* eslint-disable react/prop-types */
import React, { FC } from 'react';
import '../../tailwind.output.css';
import ReactPlayer from 'react-player/lazy';
import './index.css';
import { useVideosContext } from '../../pages';

export const VideoView: FC = () => {
    const { selectedVideo } = useVideosContext();
    return (
        <div className="md:mb-5 sm:mb-5">
            <div className="relative player-wrapper">
                <ReactPlayer
                    className="absolute top-0 left-0"
                    url={`https://www.youtube.com/watch?v=${selectedVideo?.id?.videoId ?? '19MktOPwClE'}`}
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
