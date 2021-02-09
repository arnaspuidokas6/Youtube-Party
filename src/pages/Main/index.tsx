import React, { FC, useEffect, useState } from 'react';
import { VideosListPage } from '..';
import { fetchVideos } from '../../api/fetchVideos';
import { IVideo } from '../../api/types';
import { SearchBar } from '../../components/SearchBar';
import { VideoItem } from '../../components/VideoItem';
import { VideoView } from '../../components/VideoView';
import '../../tailwind.output.css';
import { loadMoreItems } from '../../tools/loadMoreItems';

const DEFAULT_SEARCH_VALUE = 'happy';

export const Main: FC = () => {
    const [videosList, setVideosList] = useState<IVideo[]>([]);
    const [searchValue, setSearchValue] = useState<string>(DEFAULT_SEARCH_VALUE);
    const [videoLimit, setVideoLimit] = useState<number>(20);
    const [selectedVideo, setSelectedVideo] = useState<IVideo>({} as IVideo);

    useEffect(() => {
        searchValue &&
            fetchVideos({ searchValue, limit: videoLimit }).then((newGifsList) => setVideosList(newGifsList));
    }, [searchValue, videoLimit]);

    loadMoreItems({ setVideoLimit });

    return (
        <VideosListPage
            setSelectedVideo={setSelectedVideo}
            videosList={videosList}
            setSearchValue={setSearchValue}
            selectedVideo={selectedVideo}
        >
            <SearchBar />
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
        </VideosListPage>
    );
};
