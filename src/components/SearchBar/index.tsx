import React, { FC, useState } from 'react';
import { SEARCH_MAXIMUM_COUNT } from '../../constants';
import { useVideosContext } from '../../pages';
import '../../tailwind.output.css';

export const SearchBar: FC = () => {
    const { setSearchValue } = useVideosContext();
    const [isValid, setValid] = useState<boolean>(true);

    const handleSearchChange = (event: { target: { value: string } }) => {
        const typedValue = event.target.value;

        if (typedValue.length > SEARCH_MAXIMUM_COUNT) {
            setValid(false);
            return;
        }

        setValid(true);
        setSearchValue(typedValue);
    };

    return (
        <div className="w-screen flex flex-row p-8 items-center justify-between bg-white shadow-xs border solid">
            <div className="text-lg text-gray-700 hidden md:flex">Fake Youtube App</div>
            <span className="w-screen md:w-1/3 h-10 bg-gray-200 cursor-pointer rounded-full">
                <div className="relative">
                    <input
                        type="search"
                        name="search"
                        data-testid="search-input"
                        onChange={handleSearchChange}
                        placeholder="Search"
                        className={`sm:text-base relative w-full rounded-full border focus:outline-none py-2 pr-2 pl-12 ${
                            isValid ? '' : 'border-red-500'
                        }`}
                    />
                </div>

                {!isValid ? (
                    <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                        Invalid search!
                    </span>
                ) : (
                    <></>
                )}
            </span>
        </div>
    );
};
