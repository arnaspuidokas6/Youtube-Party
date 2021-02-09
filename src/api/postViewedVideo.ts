import axios from 'axios';

export interface ViewedVideo {
    videoTitle: string;
    videoId: string;
    channelTitle: string;
}

export const postViewedVideo = async ({ videoTitle, videoId, channelTitle }: ViewedVideo) => {
    return await axios.post(`http://localhost:8080/api/video`, { videoTitle, videoId, channelTitle });
};
