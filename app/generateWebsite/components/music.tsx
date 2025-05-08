import React, { useState } from "react";

const Music = () => {
  const [musicList, setMusicList] = useState([]);
  const fetchMusicList = async () => {
    try {
      const response = await fetch("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <label htmlFor="music">Add Music</label>
      <div className=" bg-gray-100 rounded-xl p-3.5">
        <span>Choose Your Music</span>
        <div className="">{musicList}</div>
      </div>
    </div>
  );
};

export default Music;
