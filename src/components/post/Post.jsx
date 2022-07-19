import React from "react";
import { MdMoreVert } from "react-icons/md";
import { BiHeart, BiLike } from "react-icons/bi";

const Post = () => {
  return (
    <div className="post w-full rounded-md mb-5 shadow-md border-2">
      <div className="postWrapper p-5">
        <div className="postTop flex items-center justify-between">
          <div className="postTopLeft flex items-center">
            <img
              className="profileImage w-[50px] h-[50px] rounded-full object-cover object-top"
              src="/assets/person1.jpg"
              alt="personImage"
            />
            <span className="postUsername text-[16px] font-medium ml-5 mr-5">
              Alina Blessing
            </span>
            <span className="postDuration text-[12px]">5 mins ago</span>
          </div>
          <div className="postTopright">
            <MdMoreVert />
          </div>
        </div>
        <div className="postCenter mx-0 my-3 ">
          <span className="postText">Hey it's my first Post :)</span>
          <img
            className="postImage w-[100%] mt-5  max-h-[500px]   object-contain"
            src="/assets/shoe.png"
            alt=""
          />
        </div>
        <div className="postBottom  flex items-center justify-between border-t-2 pt-2">
          <div className="postBottomLeft flex items-center">
            <BiHeart className="heartIcon text-[red] w-[24px] h-[24px] mr-4 cursor-pointer" />
            <BiLike className="likeIcon w-[24px] h-[24px] text-[blue] cursor-pointer mr-2" />
            <span className="postLikeCounter  "> 32 like's</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText cursor-pointer border-b-2 border-[gray]"> 9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
