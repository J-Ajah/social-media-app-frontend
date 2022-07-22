import React from "react";

const FriendsOnline = ({friend}) => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className=" flex items-center mb-5 ">
      <div className="profileContainer relative flex ">
        <img
          className="w-[45px] h-[45px] rounded-full object-cover object-top mr-4"
          src={publicFolder+friend?.profilePicture}
          alt=""
        />
        <span className="status-icon w-[13px] h-[13px] bg-[#09dc09] rounded-full absolute right-[18px] border-2 border-[white]"></span>
      </div>

      <span className="profileName font-medium">{friend?.username}</span>
    </div>
  );
};

export default FriendsOnline;
