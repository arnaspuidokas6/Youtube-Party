import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { VideoItem } from '.';
import { IVideo } from '../../api/types';
import { VideosListContext } from '../../pages';

describe('Video Item', () => {
    const mockVideo: IVideo = {
        snippet: {
            title: 'Random video title',
            channelTitle: 'Random channel title',
            thumbnails: { medium: { url: 'https://www.youtube.com/watch?v=EFVcKWFajHI' } },
            description: 'Random description',
        },
        id: { videoId: 'string' },
    };
    const videosList: IVideo[] = [];
    const selectedVideo = {} as IVideo;
    const setSearchValue = jest.fn();
    const setSelectedVideo = jest.fn().mockResolvedValueOnce(true);
    it('should render video', () => {
        const { baseElement } = render(
            <VideosListContext.Provider value={{ setSearchValue, setSelectedVideo, videosList, selectedVideo }}>
                <VideoItem video={mockVideo} />
            </VideosListContext.Provider>,
        );
        expect(baseElement).toMatchSnapshot();
    });

    it('should allow to select when clicked', () => {
        render(
            <VideosListContext.Provider value={{ setSearchValue, setSelectedVideo, videosList, selectedVideo }}>
                <VideoItem video={mockVideo} />
            </VideosListContext.Provider>,
        );
        userEvent.click(screen.getByTestId('video-item'));
        expect(setSelectedVideo).toHaveBeenCalledTimes(1);
        expect(setSelectedVideo).toHaveBeenCalledWith(mockVideo);
    });
});
