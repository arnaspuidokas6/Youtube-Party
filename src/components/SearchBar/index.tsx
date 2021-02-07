import React, { FC } from 'react';
import '../../tailwind.output.css';

export const SearchBar: FC = () => (
    <div className="w-screen flex flex-row items-center p-8 justify-between bg-white shadow-xs">
        <div className="ml-8 text-lg text-gray-700 hidden md:flex">Fake youtube</div>
        <span className="w-screen md:w-1/4 h-10 bg-gray-200 cursor-pointer border border-gray-300 text-sm rounded-full flex">
            <input
                type="search"
                name="serch"
                placeholder="Search"
                className="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none"
            />
            <i className="fas fa-search mr-5 ml-5 mt-1 text-lg text-gray-700 w-4 h-4"></i>
        </span>
    </div>
);
