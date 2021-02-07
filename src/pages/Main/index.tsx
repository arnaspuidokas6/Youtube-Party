import React, { FC, useState } from 'react';
import { SearchBar } from '../../components/SearchBar';
import { VideoView } from '../../components/VideoView';
import { SEARCH_MAXIMUM_COUNT } from '../../constants';
import '../../tailwind.output.css';

export const Main: FC = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [searchError, setSearchError] = useState<boolean>(false);

    const handleSearchChange = (event: { target: { value: string } }) => {
        const typedValue = event.target.value;

        if (typedValue.length > SEARCH_MAXIMUM_COUNT) {
            setSearchError(true);
            return;
        }

        setSearchError(false);
        setSearchValue(typedValue);
    };

    return (
        <>
            <SearchBar onChange={handleSearchChange} isValid={!searchError} />
            <div className="grid grid-cols-1 lg:grid-cols-3 p-5">
                <div className="col-span-2">
                    <VideoView />
                </div>
                <div className="col-span-1 lg:ml-5">
                    One of many rows: What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry Lorem Ipsum has been the industry standard dummy text ever since the 1500s when
                    an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
                    <div className="mt-8">
                        One of many rows: What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has been the industry standard dummy text ever since the 1500s
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book it
                        has?
                    </div>
                    <div className="mt-8">
                        One of many rows: What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has been the industry standard dummy text ever since the 1500s
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book it
                        has?
                    </div>
                    <div className="mt-8">
                        One of many rows: What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has been the industry standard dummy text ever since the 1500s
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book it
                        has?
                    </div>
                    <div className="mt-8">
                        One of many rows: What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has been the industry standard dummy text ever since the 1500s
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book it
                        has?
                    </div>
                    <div className="mt-8">
                        One of many rows: What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has been the industry standard dummy text ever since the 1500s
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book it
                        has?
                    </div>
                    <div className="mt-8">
                        One of many rows: What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has been the industry standard dummy text ever since the 1500s
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book it
                        has?
                    </div>
                    <div>One of many rows</div>
                    <div>One of many rows</div>
                </div>
            </div>
        </>
    );
};
