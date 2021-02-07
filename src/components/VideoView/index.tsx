import React, { FC } from 'react';
import '../../tailwind.output.css';
import ReactPlayer from 'react-player';
import './index.css';

export const VideoView: FC = () => (
    <>
        <div className="relative player-wrapper">
            <ReactPlayer
                className="absolute top-0 left-0"
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                width="100%"
                height="100%"
            />
        </div>
        <h1>Title</h1>
        <p>
            One of many rows: What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting
            industry Lorem Ipsum has been the industry standard dummy text ever since the 1500s when an unknown printer
            took a galley of type and scrambled it to make a type specimen book it has?
        </p>
    </>
);
