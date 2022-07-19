import React from "react";
import Feed from "../../components/feed/Feed";
import { Rightbar } from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

const Home = () => {
  return (
    <div className="">
      <Topbar />
      <div className="pageContentContainer flex  items-center justify-around relative">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
