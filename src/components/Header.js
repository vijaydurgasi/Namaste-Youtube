import React from "react";
import { Hamburger_URL, UserIcon_URL, YouTube_Logo_URL, search_icon_URL } from "../utils/Constants";

const Header = () => {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 h-14 bg-white border-b border-gray-200 shadow-sm">

            <div className="flex h-full items-center justify-between px-4">

                <div className="flex items-center gap-2">
                    <button className="p-2 rounded-full hover:bg-gray-100">
                        <img
                            src={Hamburger_URL}
                            alt="menu"
                            className="h-5 w-5" />
                    </button>

                    <img
                        src={YouTube_Logo_URL}
                        alt="YouTube"
                        className="h-12 cursor-pointer "
                    />
                </div>

                <div className="flex items-center w-[45%] min-w-[300px] max-w-[600px]">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full h-10 px-4 text-sm border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500" />

                    <button className="h-10 px-6 border border-l-0 border-gray-300 rounded-r-full flex items-center justify-center   hover:border-gray-800">
                        <img className="h-5 w-5 opacity-70" src={search_icon_URL} alt="search icon" />
                    </button>
                </div>

                <div className="flex items-center">
                    <button className="h-10 px-6 cursor-pointer">
                        <img
                            src={UserIcon_URL}
                            alt="user"
                            className="h-8 w-8 rounded-full" />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Header;
