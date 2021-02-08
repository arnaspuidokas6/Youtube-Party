export interface FetchVideoListParameters {
    limit?: number;
    searchValue: string;
}

export interface IVideo {
    snippet: {
        title: string;
        channelTitle: string;
        thumbnails: { medium: { url: string } };
        description: string;
    };
    id: { videoId: string };
}
