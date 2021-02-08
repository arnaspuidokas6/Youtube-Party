import axios from 'axios';
import { YOUTUBE_API_KEY, BASE_YOUTUBE_URL } from './constants';
import { FetchVideoListParameters, IVideo } from './types';

export const fetchVideos = async ({ limit = 20, searchValue }: FetchVideoListParameters): Promise<IVideo[]> => {
    const res = await axios.get(
        `${BASE_YOUTUBE_URL}search?part=snippet&maxResults=${limit}&q=${searchValue}&key=${YOUTUBE_API_KEY}`,
    );

    return res?.data?.items;
};
