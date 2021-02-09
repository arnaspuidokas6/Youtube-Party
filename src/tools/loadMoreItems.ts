import debounce from 'lodash.debounce';
import { Dispatch, SetStateAction } from 'react';
import { DEFAULT_LIST_ITEMS } from '../api/constants';

const DEBOUNCE_COUNT = 100;

interface ILoadMoreItems {
    setVideoLimit: Dispatch<SetStateAction<number>>;
}

export const loadMoreItems = ({ setVideoLimit }: ILoadMoreItems) => {
    window.onscroll = debounce(() => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            setVideoLimit((limit) => limit + DEFAULT_LIST_ITEMS);
        }
    }, DEBOUNCE_COUNT);
};
