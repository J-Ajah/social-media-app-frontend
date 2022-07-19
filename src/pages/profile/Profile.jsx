import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import { Rightbar } from "../../components/rightbar/Rightbar";

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profileContainer flex ">
        <Sidebar />
        <div className="profileRight flex-[12]">
          <div className="profileRightTop mt-10">
            <div className="profileCover h-[340px] relative">
              <img
                className="profileCoverImage w-full h-[250px] object-cover"
                src="assets/advertisement.jpg"
                alt=""
              />
              <img
                className="profileUserImage w-[150px] h-[150px] rounded-full object-cover absolute left-0 right-0 m-auto bottom-4 border-4 border-[white]"
                src="assets/person1.jpg"
                alt=""
              />
            </div>
            <div className="profileInfo flex flex-col items-center">
              <h4 className="profileInfoName font-medium text-[24px]">Kwabena Dwamena</h4>
              <span className="profileInfoDesc"> Hello Everyone</span>
            </div> 
          </div>
          <div className="profileRightBottom flex">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
