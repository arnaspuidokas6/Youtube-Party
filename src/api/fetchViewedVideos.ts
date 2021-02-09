import axios from 'axios';
import { ViewedVideo } from './postViewedVideo';

export const fetchViewedVideos = async (): Promise<ViewedVideo[]> => {
    return await axios.get(`http://localhost:8080/api/video`);
};
