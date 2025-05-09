import Image from "next/image";
import React, { useState } from "react";

const Music = () => {
  const [musicList, setMusicList] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchMusicList = async () => {
    if (!search.trim()) return;

    setIsLoading(true);
    try {
      // Deezer API requires CORS proxy for browser requests
      // In production, this should be handled by your backend
      const corsProxy = "https://cors-anywhere.herokuapp.com/";
      const response = await fetch(
        `${corsProxy}https://api.deezer.com/search?q=${encodeURIComponent(
          search
        )}&limit=5`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setMusicList(data.data); // Deezer uses data array for results
    } catch (error) {
      console.error("Error fetching music:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearch(e.target.value);
  };

  const handleKeyPress = (e: { key: string }) => {
    if (e.key === "Enter") {
      fetchMusicList();
    }
  };

  const playPreview = (previewUrl: string | undefined) => {
    // Create an audio element and play the preview
    const audio = new Audio(previewUrl);
    audio.play();
  };

  return (
    <div>
      <label htmlFor="music">Add Music</label>
      <div className="bg-gray-100 rounded-xl p-3.5">
        <div className="flex flex-col">
          <input
            type="text"
            className="border rounded-lg border-gray-400 w-1/2 flex mx-auto p-1"
            placeholder="Search Music"
            value={search}
            onChange={handleSearch}
            onKeyPress={handleKeyPress}
          />
          <button
            onClick={fetchMusicList}
            className="mt-2 bg-gray-500 text-white px-4 py-1 rounded-lg w-1/4 mx-auto"
          >
            Search
          </button>
        </div>

        <div className="mt-4">
          {isLoading ? (
            <p className="text-center">Loading...</p>
          ) : musicList.length > 0 ? (
            <ul className="space-y-2">
              {musicList.map(
                (track: {
                  id: string;
                  title: string;
                  artist: { name: string };
                  album?: { cover_small: string; title: string };
                  preview?: string;
                }) => (
                  <li
                    key={track.id}
                    className="flex items-center p-2 bg-white rounded-lg shadow"
                  >
                    {track.album?.cover_small && (
                      <Image
                        src={track.album.cover_small}
                        alt={track.album.title}
                        className="w-10 h-10 mr-3"
                      />
                    )}
                    <div className="flex-grow">
                      <p className="font-medium">{track.title}</p>
                      <p className="text-sm text-gray-600">
                        {track.artist.name}
                      </p>
                    </div>
                    {track.preview && (
                      <button
                        onClick={() => playPreview(track.preview)}
                        className="bg-gray-500 text-white px-3 py-1 rounded-lg text-sm"
                      >
                        Play
                      </button>
                    )}
                  </li>
                )
              )}
            </ul>
          ) : (
            search.trim() && <p className="text-center">No results found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Music;
