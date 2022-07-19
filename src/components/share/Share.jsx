import React from "react";
import { MdPermMedia, MdLabel, MdRoom, MdEmojiEmotions } from "react-icons/md";

const share = () => {
  return (
    <div className="share w-full h-[170px] ">
      <div className="sharewrapper p-5">
        <div className="shareTop flex items-center">
          <img
            src="/assets/person1.jpg"
            alt="person"
            className="shareProfileImg w-[50px] h-[50px] rounded-full object-cover object-top"
          />
          <input
            placeholder="What's in your mind ?"
            className="shareInput ml-10 border-none w-[80%] focus:outline-none"
          />
        </div>
        <hr className="shareHr m-5" />
        <div className="shareBottom flex items-center justify-center ">
          <div className="shareOptions flex ">
            <div className="shareOption flex items-center mr-5 cursor-pointer">
              <MdPermMedia className="shareIcon text-[tomato]"  />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption flex items-center mr-5 cursor-pointer">
              <MdLabel className="shareIcon text-[#3857d5]" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption flex items-center mr-5 cursor-pointer">
              <MdRoom className="shareIcon text-[tomato]" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption flex items-center mr-5 cursor-pointer">
              <MdEmojiEmotions className="shareIcon text-[goldenrod]" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button  className="shareButton border-none py-[2px] px-[5px] rounded-[5px] bg-[#14A198] font-medium mr-5 text-[white] text-[14px] cursor-pointer"> Share</button>
        </div>
      </div>
    </div>
  );
};

export default share;
