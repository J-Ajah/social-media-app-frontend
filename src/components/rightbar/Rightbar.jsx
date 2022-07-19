import React from "react";
import { MdCelebration } from "react-icons/md";

export const Rightbar = () => {
  return (
    <div className="Rightbar flex-[4] border-2">
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
      <div className="advertisement"></div>
      <div className="onlineFriends mx-4 font-bold">
        <h4 className="mb-2">Online Friends</h4>
        <div className="friend mb-3">
          <div className=" flex items-center ">
            <div className="profileContainer relative flex ">
              <img
                className="w-[45px] h-[45px] rounded-full object-cover object-top mr-4"
                src="assets/person2.jpg"
                alt=""
              />
              <span className="status-icon w-[12px] h-[12px] bg-[#09dc09] rounded-full absolute right-[18px] border-2 border-[white]"></span>
            </div>

            <span className="profileName font-medium">Michael Acheampong</span>
          </div>
        </div>
        <div className="friend mb-3">
          <div className=" flex items-center ">
            <div className="profileContainer relative flex ">
              <img
                className="w-[45px] h-[45px] rounded-full object-cover object-top mr-4"
                src="assets/person3.jpg"
                alt=""
              />
              <span className="status-icon w-[12px] h-[12px] bg-[#09dc09] rounded-full absolute right-[18px] border-2 border-[white]"></span>
            </div>

            <span className="profileName font-medium">Justice Ajah</span>
          </div>
        </div>
      </div>
    </div>
  );
};
