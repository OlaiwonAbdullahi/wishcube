import React from "react";
import { IoMicOutline } from "react-icons/io5";

const VoiceMessage = () => {
  return (
    <div className="bg-violet-50 rounded-2xl p-6 space-y-2 w-full">
      <h2 className="text-lg font-semibold text-gray-800">Voice Message</h2>

      <div className=" flex items-center gap-4 p-4 ">
        <div className=" bg-gray-400 rounded-full p-4 flex items-center justify-center">
          <IoMicOutline className=" size-7" />
        </div>
        <div className=""> Click to Record or Upload A Message</div>
      </div>
    </div>
  );
};

export default VoiceMessage;
