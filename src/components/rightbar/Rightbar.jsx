import React from "react";
import { MdCelebration } from "react-icons/md";

export const Rightbar = () => {
  return (
    <div className="Rightbar flex-[5] border-2 pt-14 ">
      <div className="rightBarWrapper py-4 px-4">
        <div className="birthDayContainer flex items-center">
          {/* <img src="assets/" alt="" /> */}
          <MdCelebration className="text-[40px] text-[tomato] mr-2" />
          <span className="birthDayText font-normal ">
            {" "}
            <b className="cursor-pointer">Emmanuel Asare</b> and{" "}
            <b className="cursor-pointer">3 other friends</b> have their
            birthdays today.
          </span>
        </div>
      </div>
      <div className="advertisement px-4 cursor-pointer mb-5  ">
        <img
          className="w-full h-[400px] object-cover rounded-lg"
          src="/assets/advertisement.jpg"
          alt=""
        />
      </div>
      <div className="onlineFriends mx-4 font-bold">
        <h4 className="mb-4">Online Friends</h4>
        <div className="friend mb-3">
          <div className=" flex items-center ">
            <div className="profileCo ntainer relative flex ">
              <img
                className="w-[45px] h-[45px] rounded-full object-cover object-top mr-4"
                src="assets/person2.jpg"
                alt=""
              />
              <span className="status-icon w-[13px] h-[13px] bg-[#09dc09] rounded-full absolute right-[18px] border-2 border-[white]"></span>
            </div>

            <span className="profileName font-medium">Michael Acheampong</span>
          </div>
        </div>
      </div>
    </div>
  );
};
