import React, { FC } from 'react';
import '../../tailwind.output.css';

export const SearchBar: FC = () => (
    <div className="w-screen flex flex-row p-8 items-center justify-between bg-white shadow-xs border solid">
        <div className="text-lg text-gray-700 hidden md:flex">Fake Youtube App</div>
        <span className="w-screen md:w-1/4 h-10 bg-gray-200 cursor-pointer border text-sm rounded-full flex">
            <input
                type="search"
                name="serch"
                placeholder="Search"
                className="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none"
            />
        </span>
    </div>
);
