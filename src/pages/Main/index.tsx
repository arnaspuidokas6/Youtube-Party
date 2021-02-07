import React, { FC } from 'react';
import { SearchBar } from '../../components/SearchBar';
import { VideoView } from '../../components/VideoView';
import '../../tailwind.output.css';

export const Main: FC = () => (
    <>
        <SearchBar />
        <VideoView />
    </>
);
