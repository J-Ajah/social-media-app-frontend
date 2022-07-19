import React from "react";
import {
  MdRssFeed,
  MdSchool,
  MdOutlineEventSeat,
  MdOutlineGroups,
  MdOutlineQuestionAnswer,
  MdWorkOutline,
} from "react-icons/md";
import { BiBookmarks } from "react-icons/bi";
import { BsChatDots } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="sidebar flex-[3.5] relative">
      <div className=" sideContainerDiv w-[22.5%] fixed ">
        <div className="sidebar-wrapper p-5">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MdRssFeed className="sidebarIcon" />
              <span className="sidebarListItem">Feed</span>
            </li>
            <li className="sidebarListItem">
              <MdOutlineGroups className="sidebarIcon" />
              <span className="sidebarListItem">Groups</span>
            </li>
            <li className="sidebarListItem">
              <BiBookmarks className="sidebarIcon" />
              <span className="sidebarListItem">Bookmarks</span>
            </li>
            <li className="sidebarListItem">
              <BsChatDots className="sidebarIcon" />
              <span className="sidebarListItem">Chats</span>
            </li>
            <li className="sidebarListItem">
              <MdOutlineQuestionAnswer className="sidebarIcon" />
              <span className="sidebarListItem">Questions</span>
            </li>
            <li className="sidebarListItem">
              <MdWorkOutline className="sidebarIcon" />
              <span className="sidebarListItem">Jobs</span>
            </li>
            <li className="sidebarListItem">
              <MdOutlineEventSeat className="sidebarIcon" />
              <span className="sidebarListItem">Events</span>
            </li>
            <li className="sidebarListItem">
              <MdSchool className="sidebarIcon" />
              <span className="sidebarListItem">Courses</span>
            </li>
          </ul>
          <button className="sidebarButton mx-auto block w-[150px] border-none p-[5px] mb-2 bg-[#d6d6d6] rounded-md font-medium ">
            Show More
          </button>
          <hr className="sidebarHr m-[20px 0]" />
          <ul className="sidebarFriendList p-3  m-0 list-none ">
            <li className="sidebarFriend flex items-center mb-5">
              <img
                src="/assets/person2.jpg"
                alt=""
                className="sidebarFriendImg w-[32px] h-[32px] rounded-full object-cover mr-4"
              />
              <span>Kwabena Amo</span>
            </li>
            <li className="sidebarFriend flex items-center mb-5">
              <img
                src="/assets/person2.jpg"
                alt=""
                className="sidebarFriendImg w-[32px] h-[32px] rounded-full object-cover mr-4"
              />
              <span>Justice Amo</span>
            </li>
            <li className="sidebarFriend flex items-center mb-5">
              <img
                src="/assets/person2.jpg"
                alt=""
                className="sidebarFriendImg w-[32px] h-[32px] rounded-full object-cover mr-4"
              />
              <span>Emmanuel Amo</span>
            </li>
            <li className="sidebarFriend flex items-center mb-5">
              <img
                src="/assets/person2.jpg"
                alt=""
                className="sidebarFriendImg w-[32px] h-[32px] rounded-full object-cover mr-4"
              />
              <span>Michael Amo</span>
            </li>
            <li className="sidebarFriend flex items-center mb-5">
              <img
                src="/assets/person2.jpg"
                alt=""
                className="sidebarFriendImg w-[32px] h-[32px] rounded-full object-cover mr-4"
              />
              <span>Kwabena Amo</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
