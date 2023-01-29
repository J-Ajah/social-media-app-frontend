import React, { useState, useEffect } from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import { Rightbar } from "../../components/rightbar/Rightbar";
import axios from "axios";
import { MdPersonOutline } from "react-icons/md";
import { useParams } from "react-router";

const Profile = () => {
  const [user, setUser] = useState({});
  const username = useParams().username;


  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        `http://localhost:8800/api/users?username=${username}`
      );
      setUser(res.data);
    };
    fetchUser();
  }, [username]);


  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <Topbar />
      <div className="profileContainer flex ">
        <Sidebar />
        <div className="profileRight flex-[12]">
          <div className="profileRightTop mt-10">
            <div className="profileCover h-[340px] relative">
              {user?.coverPicture ? (
                <img
                  className="profileCoverImage w-full h-[250px] object-cover"
                  src={user?.coverPicture}
                  alt=""
                />
              ) : (
                <img
                  className="profileCoverImage w-full h-[250px] object-cover"
                  src={publicFolder + `advertisement.jpg`}
                  alt=""
                />
              )}
              {user?.coverProfile ? (
                <img
                  className="profileUserImage w-[150px] h-[150px] rounded-full object-cover absolute left-0 right-0 m-auto bottom-4 border-4 border-[white]"
                  src={user?.coverProfile}
                  alt=""
                />
              ) : (
                <div className=" w-[150px] m-auto absolute top-[178px] left-0 right-0 bottom-0">
                  <div className=" w-[150px] h-[150px] flex items-center mx-auto justify-center border-2 bottom-4 border-[#ffffff] rounded-full bg-[#eeeeee]">
                    <MdPersonOutline className="text-[100px]" />
                  </div>
                </div>
              )}
            </div>
            <div className="profileInfo flex flex-col items-center">
              <h4 className="profileInfoName font-medium text-[24px]">
                {user.username}
              </h4>
              <span className="profileInfoDesc"> {user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom flex">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
