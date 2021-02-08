export interface FetchVideoParameters {
    limit?: number;
    searchValue: string;
}

export interface IVideo {
    snippet: {
        title: string;
        channelTitle: string;
        thumbnails: { medium: { url: string } };
    };
}
