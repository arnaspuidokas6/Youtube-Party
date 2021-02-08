/* eslint-disable react/prop-types */
import React, { FC } from 'react';
import { IVideo } from '../../api/types';

interface IVideoItem {
    video: IVideo;
}

export const VideoItem: FC<IVideoItem> = ({ video: { snippet } }) => (
    <div className="flex flex-wrap w-full mb-3">
        <img className="w-1/2" src={snippet?.thumbnails?.medium?.url} />
        <div className="w-1/2 pl-2">
            <h3 className="text-base mb-2">{snippet?.title}</h3>
            <p className="text-sm text-grey-darken mb-1">{snippet?.channelTitle}</p>
        </div>
    </div>
);
