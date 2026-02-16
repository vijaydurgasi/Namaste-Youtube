import React, { useState, useEffect } from "react";
import { Hamburger_URL, UserIcon_URL, YOUTUBE_SEARCH_API, YouTube_Logo_URL, search_icon_URL } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { togglemenu } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    const handleSearch = (searchText) => {
        if (!searchText) return;
        navigate(`/results?search_query=${searchText}`);
        setShowSuggestions(false);
        setSearchQuery(searchText);
    };

    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const dispatch = useDispatch();

    const searchCache = useSelector((store) => store.search);

    useEffect(() => {

        if (!searchQuery.trim()) return;

        const getSearchSuggestion = async () => {
            const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
            const json = await data.json();

            setSuggestions(json[1]);
            console.log(json);

            dispatch(cacheResults({
                [searchQuery]: json[1],
            }));
        };

        const timer = setTimeout(() => {

            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery]);
            } else {
                getSearchSuggestion();
            }

        }, 200);

        return () => clearTimeout(timer);

    }, [searchQuery, searchCache, dispatch]);


    const togglemenuHandler = () => {
        dispatch(togglemenu());
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-50 h-14 bg-white border-b border-gray-200 shadow-sm">

            <div className="flex h-full items-center justify-between px-4">

                <div className="flex items-center gap-2">
                    <button onClick={() => togglemenuHandler()}
                        className="p-2 rounded-full hover:bg-gray-100  transition-transform duration-200 hover:scale-105 active:scale-95">
                        <img
                            src={Hamburger_URL}
                            alt="menu"
                            className="h-5 w-5" />
                    </button>

                    <img
                        src={YouTube_Logo_URL}
                        alt="YouTube"
                        className="h-12 cursor-pointer " />
                </div>
                <div className="relative flex items-center flex-1 mx-2 max-w-[600px]">

                    <input
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleSearch(searchQuery);
                                setShowSuggestions(false);
                            }
                        }}
                        className="w-full h-10 px-4 text-sm border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500" />

                    <button className="h-10 px-6 border border-l-0 border-gray-300 rounded-r-full flex items-center justify-center hover:bg-gray-100">
                        <img className="h-5 w-5 opacity-70" src={search_icon_URL} alt="search icon" />
                    </button>

                    {searchQuery.trim() !== "" && showSuggestions && suggestions.length > 0 && (
                        <div className="absolute top-12 left-0 w-full bg-white shadow-lg rounded-xl border border-gray-200 overflow-hidden z-50">

                            <ul className="max-h-96 overflow-y-auto py-2">

                                {suggestions.map((s) => (
                                    <li
                                        key={s}
                                        onMouseDown={() => handleSearch(s)}
                                        className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                                    >
                                        <span className="text-gray-500">🔍</span>
                                        <span>{s}</span>
                                    </li>
                                ))}

                            </ul>
                        </div>
                    )}
                </div>

                <div className="flex items-center gap-2">
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
