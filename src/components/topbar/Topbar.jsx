import React from "react";
import { BsSearch, BsFillChatFill } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";

const Topbar = () => {
  return (
    <div className="topContainer h-[50px] w-full bg-[#14A198] flex items-center  sticky top-0 ">
      <div className="topBarLeft flex-[5]">
        <span className="logo text-[24px] text-[#f8ecec] ml-20 font-bold cursor-pointer">
          Icesocial
        </span>
      </div>
      <div className="topBarCenter flex-[5]">
        <div className="searchBar flex items-center w-full h-[30px] bg-[white] rounded-2xl">
          <BsSearch className="searchIcon text-[15px] ml-2 " />
          <input
            placeholder="Search for a friend, post or video"
            className="searchInput border-none w-[70%] ml-2 focus:outline-none text-[15px]"
          />
        </div>
      </div>
      <div className="topBarRight flex-[8] flex items-center justify-around">
        <div className="topBarLinks first-line:font-medium text-[white]">
          <span className="topbarLink mr-5 text-[14px] cursor-pointer">
            {" "}
            Homepage
          </span>
          <span className="topbarLink mr-5 text-[14px] cursor-pointer">
            {" "}
            Timeline
          </span>
        </div>
        <div className="topBarIconsContainer flex space-x-8">
          <div className="topBarIconItem  cursor-pointer">
            <IoMdPerson className="topbarIcons" />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topBarIconItem cursor-pointer">
            <BsFillChatFill className="topbarIcons" />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topBarIconItem cursor-pointer">
            <IoIosNotifications className="topbarIcons" />
            <span className="topbarIconBadge">3</span>
          </div>
        </div>
        <img
          src="/assets/person1.jpg"
          alt="Sample user"
          className="topBarImage w-[32px] h-[32px] rounded-full object-cover cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Topbar;
