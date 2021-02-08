import debounce from 'lodash.debounce';
import React, { FC, useEffect, useState } from 'react';
import { DEFAULT_LIST_ITEMS } from '../../api/constants';
import { fetchVideos } from '../../api/fetchVideos';
import { IVideo } from '../../api/types';
import { SearchBar } from '../../components/SearchBar';
import { VideoItem } from '../../components/VideoItem';
import { VideoView } from '../../components/VideoView';
import { SEARCH_MAXIMUM_COUNT } from '../../constants';
import '../../tailwind.output.css';

const DEFAULT_SEARCH_VALUE = 'happy';
const DEBOUNCE_COUNT = 100;

export const Main: FC = () => {
    const [videosList, setVideosList] = useState<IVideo[]>([]);
    const [searchValue, setSearchValue] = useState<string>(DEFAULT_SEARCH_VALUE);
    const [searchError, setSearchError] = useState<boolean>(false);
    const [videoLimit, setVideoLimit] = useState<number>(20);

    const handleSearchChange = (event: { target: { value: string } }) => {
        const typedValue = event.target.value;

        if (typedValue.length > SEARCH_MAXIMUM_COUNT) {
            setSearchError(true);
            return;
        }

        setSearchError(false);
        setSearchValue(typedValue);
    };

    useEffect(() => {
        searchValue &&
            fetchVideos({ searchValue, limit: videoLimit }).then((newGifsList) => setVideosList(newGifsList));
    }, [searchValue, videoLimit]);

    window.onscroll = debounce(() => {
        if (searchError) return;
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            setVideoLimit((limit) => limit + DEFAULT_LIST_ITEMS);
        }
    }, DEBOUNCE_COUNT);

    return (
        <>
            <SearchBar onChange={handleSearchChange} isValid={!searchError} />
            <div className="grid grid-cols-1 lg:grid-cols-3 p-5">
                <div className="col-span-2">
                    <VideoView />
                </div>
                <div className="col-span-1 lg:ml-5">
                    {videosList?.length ? (
                        <>
                            {videosList?.map((props, index) => (
                                <VideoItem video={props} key={index} />
                            ))}
                        </>
                    ) : (
                        <>No items</>
                    )}
                </div>
            </div>
        </>
    );
};
