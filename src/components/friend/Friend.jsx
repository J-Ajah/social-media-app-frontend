import React from "react";

const Friend = ({user}) => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebarFriend flex items-center mb-5">
      <img
        src={publicFolder+user?.profilePicture}
        alt=""
        className="sidebarFriendImg w-[35px] h-[35px] rounded-full object-top object-cover mr-4"
      />
      <span className="font-medium">{user?.username}</span>
    </li>
  );
};

export default Friend;
