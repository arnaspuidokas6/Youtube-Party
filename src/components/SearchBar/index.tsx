import React, { ChangeEvent, FC } from 'react';
import '../../tailwind.output.css';

interface ISearchBar {
    isValid: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

// eslint-disable-next-line react/prop-types
export const SearchBar: FC<ISearchBar> = ({ onChange, isValid }) => (
    <div className="w-screen flex flex-row p-8 items-center justify-between bg-white shadow-xs border solid">
        <div className="text-lg text-gray-700 hidden md:flex">Fake Youtube App</div>
        <span className="w-screen md:w-1/3 h-10 bg-gray-200 cursor-pointer rounded-full">
            <div className="relative">
                <input
                    type="search"
                    name="search"
                    onChange={onChange}
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
