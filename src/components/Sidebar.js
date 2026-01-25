import React from "react";

const Sidebar = () => {
    return (
        <div className="h-screen w-60 border-r border-gray-300 p-4 overflow-y-auto">

            <h1 className="font-semibold mb-3">Subscriptions</h1>
            <SidebarItem icon="🎵" label="Music" />
            <SidebarItem icon="🏏" label="Sports" />
            <SidebarItem icon="🎮" label="Gaming" />
            <SidebarItem icon="🎬" label="Movies" />

            <hr className="my-4" />


            <h1 className="font-semibold mb-3">You</h1>
            <SidebarItem icon="🕒" label="History" />
            <SidebarItem icon="⏰" label="Watch Later" />
            <SidebarItem icon="👍" label="Liked Videos" />
            <SidebarItem icon="⬇️" label="Downloads" />

            <hr className="my-4" />

            <h1 className="font-semibold mb-3">Explore</h1>
            <SidebarItem icon="🔥" label="Trending" />
            <SidebarItem icon="🛍️" label="Shopping" />
            <SidebarItem icon="🎶" label="Music" />
            <SidebarItem icon="🎥" label="Live" />
            <SidebarItem icon="🎮" label="Gaming" />

            <hr className="my-4" />
            <h1 className="font-semibold mb-3">More from YouTube</h1>
            <SidebarItem icon="💼" label="YouTube Premium" />
            <SidebarItem icon="🎙️" label="YouTube Music" />
            <SidebarItem icon="📺" label="YouTube TV" />
            <SidebarItem icon="👾" label="YouTube Kids" />

            <hr className="my-4" />
            <SidebarItem icon="⚙️" label="Settings" />
            <SidebarItem icon="❓" label="Help" />
            <SidebarItem icon="🚩" label="Report history" />
            <SidebarItem icon="💬" label="Send feedback" />

        </div>
    );
};

/* Reusable Sidebar Item */
const SidebarItem = ({ icon, label }) => {
    return (
        <div className="flex items-center gap-3 py-2 px-2 rounded hover:bg-gray-100 cursor-pointer">
            <span>{icon}</span>
            <span className="text-sm">{label}</span>
        </div>
    );
};

export default Sidebar;
