import React from "react";
import { MdMoreVert } from "react-icons/md";
import { BiHeart, BiLike } from "react-icons/bi";
import { Users } from "../../dummyData";

const Post = ({ post }) => {
  const user = Users.filter((currentUser) => currentUser.userId === post.userId);

  return (
    <div className="post w-full rounded-md mb-5 shadow-md border-2">
      <div className="postWrapper p-5">
        <div className="postTop flex items-center justify-between">
          <div className="postTopLeft flex items-center">
            <img
              className="profileImage w-[50px] h-[50px] rounded-full object-cover object-top cursor-pointer"
              src={user[0]?.profilePicture}
              alt="personImage"
            />
            <span className="postUsername text-[17px] font-medium ml-4 mr-5">
              {user[0]?.username}
            </span>
            <span className="postDuration text-[12px]">{post.date}</span>
          </div>
          <div className="postTopright">
            <MdMoreVert className="text-[20px] cursor-pointer" />
          </div>
        </div>
        <div className="postCenter mx-0 my-3 ">
          <span className="postText">{post?.desc}</span>
          <img
            className="postImage w-[100%] mt-5  bg-gray-500 max-h-[500px]  object-contain object-top"
            src={post?.photo}
            alt=""
          />
        </div>
        <div className="postBottom  flex items-center justify-between border-t-2 pt-2">
          <div className="postBottomLeft flex items-center">
            <BiHeart className="heartIcon text-[red] w-[24px] h-[24px] mr-4 cursor-pointer" />
            <BiLike className="likeIcon w-[24px] h-[24px] text-[blue] cursor-pointer mr-2" />
            <span className="postLikeCounter  "> {post?.like} like's</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText cursor-pointer border-b-2 border-[gray]">
              {" "}
              {post?.comment} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
