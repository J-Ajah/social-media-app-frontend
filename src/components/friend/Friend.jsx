import React from "react";

const Friend = ({user}) => {
  return (
    <li className="sidebarFriend flex items-center mb-5">
      <img
        src={user?.profilePicture}
        alt=""
        className="sidebarFriendImg w-[32px] h-[32px] rounded-full object-cover mr-4"
      />
      <span className="font-medium">{user?.username}</span>
    </li>
  );
};

export default Friend;
