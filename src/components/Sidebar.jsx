import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CardWithAvatar from "./CardWithAvatar";
import GlassBannerPlayer from "../components/GlassBannerPlayer";
import myAlbumCover from "./../assets/images/myAlbumCover.jpeg";
import mySongPath from "./../assets/audio/song.mp3";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // <-- Sidebar toggle

  const navItems = [
    { to: "/", label: "home" },
    { to: "/resume", label: "resume" },
    { to: "/recent-projects", label: "recent projects" },
  ];

  return (
    <>
      {/* Toggle Button - only mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden fixed top-4 left-4 z-50 inline-flex items-center p-2 text-pink-900 bg-white/50 backdrop-blur-md rounded-lg shadow-md"
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside
        id="default-sidebar"
        className={`fixed sm:static top-0 left-0 z-40 w-90 h-screen 
          overflow-y-auto custom-scrollbar transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"}
        `}
        aria-label="Sidebar"
      >
        <div className="py-2 px-2 bg-cover bg-center">
          <div className="p-5 h-full rounded-2xl bg-pink/20 backdrop-blur-md border border-white/20 shadow-lg">
            <div className="avatar mb-4 flex justify-center">
              <CardWithAvatar />
            </div>

            <div className="navigation mt-4 flex flex-col space-y-2">
              {navItems.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `no-underline font-quadria bg-white/10 backdrop-blur-sm hover:scale-100 hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] focus:ring-4 focus:outline-none font-medium rounded-lg text-m px-2 py-2 text-center mb-2 border border-white/20 w-full shadow-sm block ${
                      isActive
                        ? "text-pink-500 bg-white/30 border-white/40"
                        : "text-pink-900"
                    }`
                  }
                  onClick={() => setIsOpen(false)} // Auto-close on click (mobile)
                >
                  {label}
                </NavLink>
              ))}
              <GlassBannerPlayer
                className="w-full max-w-full"
                songUrl={mySongPath}
                albumArt={myAlbumCover}
                trackTitle="You're On Your Own, Kid"
                trackArtist="Taylor Swift"
              />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
