/* eslint-disable react/prop-types */
import React, { FC } from 'react';
import { IVideo } from '../../api/types';
import { useVideosContext } from '../../pages';

interface IVideoItem {
    video: IVideo;
}

export const VideoItem: FC<IVideoItem> = ({ video }) => {
    const { setSelectedVideo } = useVideosContext();
    return (
        <div onClick={() => setSelectedVideo(video)} className="flex flex-wrap w-full mb-3">
            <img className="w-1/2 cursor-pointer" src={video?.snippet?.thumbnails?.medium?.url} />
            <div className="w-1/2 pl-2">
                <h3 className="text-base mb-2">{video?.snippet?.title}</h3>
                <p className="text-sm text-grey-darken mb-1">{video?.snippet?.channelTitle}</p>
            </div>
        </div>
    );
};
