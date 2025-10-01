import React from "react";
import { NavLink } from "react-router-dom";
import CardWithAvatar from "./CardWithAvatar";
import GlassBannerPlayer from "../components/GlassBannerPlayer";
import myAlbumCover from "./../assets/images/myAlbumCover.jpeg";
import mySongPath from "./../assets/audio/song.mp3";

const Sidebar = () => {
  const navItems = [
    { to: "/", label: "home" },
    { to: "/resume", label: "resume" },
    { to: "/recent-projects", label: "recent projects" },
  ];

  return (
    <aside
      id="default-sidebar"
      className="top-0 left-0 z-40 w-90 h-screen sm:translate-x-0 overflow-y-auto custom-scrollbar"
      aria-label="Sidebar"
    >
      <div className="py-2 px-2 overflow-y-auto bg-cover bg-center">
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
  );
};

export default Sidebar;
