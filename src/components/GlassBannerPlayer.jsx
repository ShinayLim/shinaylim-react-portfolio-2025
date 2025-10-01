import React, { useEffect, useState, useRef } from "react";
import {
  FaInstagram,
  FaPlay,
  FaPause,
  FaForward,
  FaBackward,
} from "react-icons/fa";

/*
GlassBannerPlayer (React + Vite + Tailwind)

Features:
- Full-width glassmorphism banner (rounded, blur, semi-transparent)
- Left column: a Spotify-like mini player (album art, title, artist, basic controls)
- **New:** Embedded audio player using the songUrl prop for a local/external track link.
- Center divider (hidden on small screens)
- Right column: Instagram icon + 2 rows: username (link) and actions (Follow / Message)
- Dynamic Instagram username sources (as before)

How to use:
1) Make sure Tailwind is configured in your Vite project.
2) Install react-icons: `npm install react-icons`
3) (optional) Add `.env` with: VITE_IG_USERNAME=your_username and restart dev server.
4) Import and use the component. **Ensure the songUrl is correct and the image URL for albumArt is valid.**

Props:
- **songUrl** (string) - **REQUIRED**, the URL or path to the audio file (e.g., '/songs/my-song.mp3')
- instagramUsername (string) - optional, directly pass a username
- fetchUsernameUrl (string) - optional, URL to fetch JSON/string that contains username
- trackTitle (string) - default "you're on your own kid"
- trackArtist (string) - default "taylor swift"
- **albumArt** (string) - **REQUIRED**, URL or path to the album artwork image.
- initialPlaying (boolean) - optional initial play state
- onPlayToggle (function) - optional callback when play state toggles
*/

export default function GlassBannerPlayer({
  instagramUsername: instagramUsernameProp,
  fetchUsernameUrl,
  trackTitle = "you're on your own kid",
  trackArtist = "taylor swift",
  songUrl, // NEW: URL/path for the song
  albumArt, // UPDATED: Now required for the cover image link
  initialPlaying = false,
  onPlayToggle,
}) {
  const [username, setUsername] = useState(
    instagramUsernameProp || import.meta.env.VITE_IG_USERNAME || ""
  );
  const [isPlaying, setIsPlaying] = useState(initialPlaying);

  // Ref for the <audio> element
  const audioRef = useRef(null);

  // Keep prop-driven username in sync
  useEffect(() => {
    if (instagramUsernameProp) setUsername(instagramUsernameProp);
  }, [instagramUsernameProp]);

  // If a fetch URL is provided, try to fetch and extract username
  useEffect(() => {
    if (!fetchUsernameUrl) return;
    let mounted = true;

    async function load() {
      try {
        const res = await fetch(fetchUsernameUrl, { cache: "no-store" });
        const text = await res.text();

        // Try parse as JSON, otherwise treat as plain text
        try {
          const json = JSON.parse(text);
          if (!mounted) return;
          if (typeof json === "string") setUsername(json);
          else if (json.username) setUsername(json.username);
          else if (json.data && json.data.username)
            setUsername(json.data.username);
        } catch (e) {
          // plain text
          if (!mounted) return;
          const t = text.trim();
          if (t) setUsername(t);
        }
      } catch (e) {
        // silently fail -- keep existing username
        console.warn("GlassBannerPlayer: fetch failed", e);
      }
    }

    load();
    return () => (mounted = false);
  }, [fetchUsernameUrl]);

  // Handle play/pause logic for the audio element
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current
          .play()
          .catch((e) => console.error("Audio play failed:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, songUrl]); // Re-run if songUrl changes

  function togglePlay() {
    setIsPlaying((p) => {
      const next = !p;
      if (onPlayToggle) onPlayToggle(next);
      return next;
    });
  }

  const profileUrl = username ? `https://instagram.com/${username}` : "#";
  const messageUrl = username
    ? `https://www.instagram.com/direct/new/?username=${username}`
    : "#";

  // If no albumArt is provided, use a simple fallback.
  const defaultAlbumArt =
    albumArt ||
    "data:image/svg+xml;utf8," +
      encodeURIComponent(`
  <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512'>
    <defs>
      <linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>
        <stop offset='0' stop-color='#fbc2eb'/>
        <stop offset='1' stop-color='#a6c1ee'/>
      </linearGradient>
    </defs>
    <rect width='100%' height='100%' fill='url(#g)' rx='20'/>
  </svg>
  `);

  // Log an error if songUrl or albumArt is missing but still render
  useEffect(() => {
    if (!songUrl)
      console.error("GlassBannerPlayer: 'songUrl' prop is missing.");
    if (!albumArt)
      console.warn(
        "GlassBannerPlayer: 'albumArt' prop is missing. Using fallback image."
      );
  }, [songUrl, albumArt]);

  return (
    <div className="w-full rounded-2xl bg-white/26 backdrop-blur-md border border-white/20 shadow-lg p-2">
      {/* Invisible Audio Element */}
      <audio ref={audioRef} src={songUrl} loop={true} preload="auto" />

      <div className="w-full flex flex-col md:flex-row items-center gap-4">
        {/* LEFT: player */}
        <div className="flex items-center w-full md:w-2/3">
          <img
            src={defaultAlbumArt}
            alt={`album art for ${trackTitle}`}
            className="w-20 h-20 rounded-lg object-cover mr-4 shadow-md"
          />

          <div className="flex-1">
            <div className="text-xs uppercase text-pink/60">Now Playing</div>
            <div className="text-m font-semibold text-pink truncate">
              {trackTitle}
            </div>
            <div className="text-sm text-pink/70 truncate">{trackArtist}</div>

            <div className="mt-3 flex items-center space-x-3">
              <button
                aria-label="previous"
                className="p-2 rounded-full bg-white/6 hover:bg-white/10"
                onClick={() => {
                  /* hook for prev */
                }}
              >
                <FaBackward />
              </button>

              <button
                aria-label={isPlaying ? "pause" : "play"}
                className="p-3 rounded-full bg-white/10 hover:bg-white/15"
                onClick={togglePlay}
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>

              <button
                aria-label="next"
                className="p-2 rounded-full bg-white/6 hover:bg-white/10"
                onClick={() => {
                  /* hook for next */
                }}
              >
                <FaForward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
