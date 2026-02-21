import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { togglemenu } from "../utils/appSlice";

const Sidebar = () => {
    const dispatch = useDispatch();
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    const closeSidebar = () => {
        dispatch(togglemenu());
    };

    return (
        <>
            {isMenuOpen && (
                <div
                    onClick={closeSidebar}
                    className="fixed inset-0 bg-black bg-opacity-40 z-40"
                />
            )}

            <div
                className={`
          fixed top-14 left-0
          h-[calc(100vh-56px)]
          w-56
          bg-white
          border-r border-gray-300
          overflow-y-auto
          z-50
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
            >
                <div className="p-4 space-y-2">

                    <SectionTitle title="Home" />
                    <Link to="/" onClick={closeSidebar}>
                        <SidebarItem icon="🏠" label="Home" />
                    </Link>

                    <Divider />

                    <SectionTitle title="Subscriptions" />
                    <Link to="/category/music" onClick={closeSidebar}>
                        <SidebarItem icon="🎵" label="Music" />
                    </Link>
                    <Link to="/category/sports" onClick={closeSidebar}>
                        <SidebarItem icon="🏏" label="Sports" />
                    </Link>
                    <Link to="/category/gaming" onClick={closeSidebar}>
                        <SidebarItem icon="🎮" label="Gaming" />
                    </Link>
                    <Link to="/category/movies" onClick={closeSidebar}>
                        <SidebarItem icon="🎬" label="Movies" />
                    </Link>

                    <Divider />

                    <SectionTitle title="You" />
                    <SidebarItem icon="🕒" label="History" onClick={closeSidebar} />
                    <SidebarItem icon="⏰" label="Watch Later" onClick={closeSidebar} />
                    <SidebarItem icon="👍" label="Liked Videos" onClick={closeSidebar} />
                    <SidebarItem icon="⬇️" label="Downloads" onClick={closeSidebar} />

                    <Divider />

                    <SectionTitle title="Explore" />
                    <Link to="/category/comedy" onClick={closeSidebar}>
                        <SidebarItem icon="😂" label="Comedy" />
                    </Link>
                    <Link to="/category/science" onClick={closeSidebar}>
                        <SidebarItem icon="🔭" label="Science" />
                    </Link>
                    <SidebarItem icon="🎥" label="Live" onClick={closeSidebar} />

                    <Divider />

                    <SectionTitle title="More from YouTube" />
                    <SidebarItem icon="💼" label="YouTube Premium" onClick={closeSidebar} />
                    <SidebarItem icon="🎙️" label="YouTube Music" onClick={closeSidebar} />
                    <SidebarItem icon="📺" label="YouTube TV" onClick={closeSidebar} />
                    <SidebarItem icon="👾" label="YouTube Kids" onClick={closeSidebar} />

                    <Divider />

                    <SidebarItem icon="⚙️" label="Settings" onClick={closeSidebar} />
                    <SidebarItem icon="❓" label="Help" onClick={closeSidebar} />
                    <SidebarItem icon="🚩" label="Report history" onClick={closeSidebar} />
                    <SidebarItem icon="💬" label="Send feedback" onClick={closeSidebar} />

                </div>
            </div>
        </>
    );
};

const SectionTitle = ({ title }) => (
    <h1 className="font-semibold text-sm text-gray-700 mt-2">{title}</h1>
);

const Divider = () => (
    <hr className="my-3 border-gray-200" />
);

const SidebarItem = ({ icon, label, onClick }) => (
    <div
        onClick={onClick}
        className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-100 cursor-pointer transition"
    >
        <span className="text-lg">{icon}</span>
        <span className="text-sm">{label}</span>
    </div>
);

export default Sidebar;