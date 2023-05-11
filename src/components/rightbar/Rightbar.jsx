import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { MdAdd, MdCelebration, MdRemove } from "react-icons/md";
import { Link } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
import { Users } from "../../dummyData";
import FriendsOnline from "../friendsOnline/FriendsOnline";

const HomeRightBar = ({ user, publicFolder }) => {
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
          src={publicFolder + `advertisement.jpg`}
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

const ProfileRightBar = ({ user, currentAppUser, publicFolder, friends }) => {
  const [followed, setFollowed] = useState(currentAppUser?.[0].followings.includes(user?._id));
  const { dispatch } = useContext(AuthContext);
  

  const handleFollowClick = async () => {
    try {
      if (followed) {
        dispatch({
          type: "UNFOLLOW",
          payload: currentAppUser[0]._id,
        });
        await axios.put(
          "http://localhost:8800/api/users/" + user._id + "/unfollow",
          {
            userId: currentAppUser[0]._id,
          }
        );
        dispatch({
          type: "UNFOLLOW",
          payload: currentAppUser[0]._id,
        });
        setFollowed(true);
      } else {
        const res = await axios.put(
          "http://localhost:8800/api/users/" + user._id + "/follow",
          {
            userId: currentAppUser[0]._id,
          }
        );
        dispatch({
          type: "FOLLOW",
          payload: currentAppUser[0]._id,
        });
        setFollowed(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="px-4">
        {user?.username !== currentAppUser?.[0].username && (
          <button
            className="btn-follow flex bg-[#14A198] text-white rounded-[5px] px-4 mb-4 py-[4px]
           items-center focus:outline-none"
            onClick={handleFollowClick}
          >
            {followed ? "Unfollow" : "Follow"}
            {followed ? <MdRemove /> : <MdAdd />}
          </button>
        )}
        <h4 className="rightBarTitle text-[18px] font-medium mb-2">
          User Information
        </h4>
        <div className="rightBarInfo mb-10">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">City:</span>
            <span className="rightBarInfoValue">{user?.city}</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From:</span>
            <span className="rightBarInfoValue">{user?.from}</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Relationship:</span>
            <span className="rightBarInfoValue">
              {user?.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "Married"
                : "none"}
            </span>
          </div>
        </div>
        <h4 className="rightBarTitle text-[18px] font-medium mb-5">
          User Friends
        </h4>
        <div className="rightBarFollowings grid grid-cols-3 w-[90%] mx-auto justify-items-center">
          {friends.map((friend,id) => {
            return (
              <Link key={id} to={"/profile/" + friend.username}>
                <div className="rightBarFollowing">
                  <img
                    src={
                      friend.profilePicture
                        ? publicFolder + friend.profilePicture
                        : publicFolder + `person3.jpg`
                    }
                    alt=""
                    className="rightBarFollowingImage"
                  />
                  <span className="rightBarFollowingName">
                    {" "}
                    {friend.username}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export const Rightbar = ({ user }) => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user: currentUser } = useContext(AuthContext);
  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendsList = await axios.get(
          "http://localhost:8800/api/users/friends/" +currentUser?.[0]?._id
        );
        setFriends(friendsList.data);
      } catch (err) {
        console.log(err);
      }
    };

    getFriends();
  }, [user?._id]);

  return (
    <div className="Rightbar  flex-[5] shadow-md self-start relative top-16">
      {user ? (
        <ProfileRightBar
          user={user}
          currentAppUser={currentUser}
          publicFolder={publicFolder}
          friends={friends}
        />
      ) : (
        <HomeRightBar user={user} publicFolder={publicFolder} />
      )}
    </div>
  );
};
