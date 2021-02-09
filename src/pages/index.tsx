import React, { createContext, Dispatch, FC, SetStateAction, useContext } from 'react';
import { IVideo } from '../api/types';

export const EMPTY_VIDEOS_LIST = [];
export const DEFAULT_SELECTED_ITEM = {} as IVideo;
const EMPTY_VOID = () => {};

interface IVideosContext {
    setSearchValue: Dispatch<SetStateAction<string>>;
    searchValue?: string;
    setSelectedVideo: Dispatch<SetStateAction<IVideo>>;
    videosList: IVideo[];
    selectedVideo: IVideo;
}

export const VideosListContext = createContext<IVideosContext>({
    setSearchValue: EMPTY_VOID,
    setSelectedVideo: EMPTY_VOID,
    videosList: EMPTY_VIDEOS_LIST,
    selectedVideo: DEFAULT_SELECTED_ITEM,
});

export const useVideosContext = () => {
    const context = useContext(VideosListContext);
    if (!context) {
        throw new Error("This component can't be used outside VideosList component");
    }
    return context;
};

export const VideosListPage: FC<IVideosContext> = ({
    setSearchValue,
    setSelectedVideo,
    videosList,
    selectedVideo,
    children,
    searchValue,
}) => {
    const context: IVideosContext = {
        setSearchValue,
        videosList,
        setSelectedVideo,
        selectedVideo,
        searchValue,
    };
    return <VideosListContext.Provider value={context}>{children}</VideosListContext.Provider>;
};
