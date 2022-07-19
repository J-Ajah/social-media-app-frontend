import React from "react";
import { MdCelebration } from "react-icons/md";
import { Users } from "../../dummyData";
import FriendsOnline from "../friendsOnline/FriendsOnline";

export const Rightbar = ({ profile }) => {
  
  const HomeRightBar = () => {
    return (
      <>
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
            {Users?.map((friend) => (
              <FriendsOnline key={friend.id} friend={friend} />
            ))}
          </div>
        </div>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
      <div className="px-4">
         <h4 className="rightBarTitle text-[18px] font-medium mb-2">User Information</h4>
         <div className="rightBarInfo mb-10">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">City:</span>
            <span className="rightBarInfoValue">New York</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From:</span>
            <span className="rightBarInfoValue">Madrid</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Relationship:</span>
            <span className="rightBarInfoValue">Single</span>
          </div>
         </div>
         <h4 className="rightBarTitle text-[18px] font-medium mb-5">User Friends</h4>
         <div className="rightBarFollowings grid grid-cols-3 w-[90%] mx-auto border-2 justify-items-center">
            <div className="rightBarFollowing">
                <img src="assets/person3.jpg" alt="" className="rightBarFollowingImage" />
                <span className="rightBarFollowingName"> John Smith</span>
            </div>
            <div className="rightBarFollowing">
                <img src="assets/person5.jpg" alt="" className="rightBarFollowingImage" />
                <span className="rightBarFollowingName"> John Smith</span>
            </div>
            <div className="rightBarFollowing">
                <img src="assets/person3.jpg" alt="" className="rightBarFollowingImage" />
                <span className="rightBarFollowingName"> John Smith</span>
            </div>
            <div className="rightBarFollowing">
                <img src="assets/person3.jpg" alt="" className="rightBarFollowingImage" />
                <span className="rightBarFollowingName"> John Smith</span>
            </div>
            <div className="rightBarFollowing">
                <img src="assets/person4.jpg" alt="" className="rightBarFollowingImage" />
                <span className="rightBarFollowingName"> John Smith</span>
            </div>
            <div className="rightBarFollowing">
                <img src="assets/person3.jpg" alt="" className="rightBarFollowingImage" />
                <span className="rightBarFollowingName"> John Smith</span>
            </div>
         </div>
         </div>
      </>
    );
  };
  return (
    <div className="Rightbar  flex-[5] shadow-md self-start relative top-16">
      <ProfileRightBar />
    </div>
  );
};
