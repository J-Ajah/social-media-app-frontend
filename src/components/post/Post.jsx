import React, { useContext, useState } from "react";
import { MdMoreVert } from "react-icons/md";
import { BiHeart, BiLike } from "react-icons/bi";
import { MdPersonOutline } from "react-icons/md";
import { Users } from "../../dummyData";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const config = {
  
  rootMargin: "0px 0px 0px 0px",
  threshold: 0,
};
const Post = ({ post, index }) => {
  const [like, setLike] = useState(post?.likes.length);
  const [postIsLiked, setPostIsLiked] = useState(false);
  const [user, setUser] = useState([]);
  const { user: currentUser } = useContext(AuthContext);
  const [loaded, setLoaded] = useState(false);
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  React.useEffect(() => {
    setPostIsLiked(post.likes.includes(currentUser?.[0]._id));
  }, [currentUser, post.likes]);

  React.useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(
        `http://localhost:8800/api/users?userId=${post.userId}`
      );

      setUser(response.data);
    };

    fetchUser();
  }, []);



  // Added intersection observer to load post images dynamically
  React.useEffect(() => {
    config.root = document.querySelector(".intersect-container");
   
    let observer = new window.IntersectionObserver((entries, self) => {
      // Iterate over each entry
      entries.forEach((entry) => {
        //  Process each individual entry
        if (entry.isIntersecting) {
          // Replaces the loading image with the actual image
          loadImages(entry.target);
          // Stops observing that particular image
          self.unobserve(entry.target);
        }
      });
    }, config);

    const imgs = document.querySelectorAll('[data-src]');
    imgs.forEach((img) => {
      observer.observe(img);
    });

    return () => {
      imgs.forEach((img) => {
        observer.unobserve(img);
      });
    };
  }, []);

  function loadImages(image) {
    image.src = image.dataset.src;
  }

  const likeHandler = () => {
    try {
      axios.put("http://localhost:8800/api/posts/" + post._id + "/like", {
        userId: currentUser[0]._id,
      });
    } catch (error) {}
    setLike(!postIsLiked ? like + 1 : like - 1);
    setPostIsLiked(!postIsLiked);
  };
  return (
    <div className="post w-full rounded-md mb-5 shadow-md border-2">
     
      <div className="postWrapper p-5">
        <div className="postTop flex items-center justify-between">
          <div className="postTopLeft flex items-center">
            {user.profilePicture ? (
              <img
                className="profileImage w-[50px] h-[50px] rounded-full object-cover object-top cursor-pointer"
                src={publicFolder + user.profilePicture}
                alt="personImage"
              />
            ) : (
              <Link to={`profile/${user.username}`}>
                <div className="border-2 border-[#5e5c5c] rounded-full bg-[#eeeeee]">
                  <MdPersonOutline className="text-[28px]" />
                </div>
              </Link>
            )}

            <span className="postUsername text-[17px] font-medium ml-4 mr-5">
              {user.username}
            </span>
            <span className="postDuration text-[12px]">
              {format(post?.createdAt)}
            </span>
          </div>
          <div className="postTopright">
            <MdMoreVert className="text-[20px] cursor-pointer" />
          </div>
        </div>
        <div className="postCenter mx-0 my-3 ">
          <span className="postText">{post?.desc}</span>
          {index === 0 ? (
            <img
              className="postImage w-[100%] mt-5  bg-gray-500 max-h-[500px]  object-contain object-top"
              src={publicFolder + post?.img}
              alt=""
            />
          ) : (
            <img
              className={`${loaded  ? 'loaded ': 'loading '}   postImage w-[100%] mt-5  bg-gray-500 max-h-[500px]  object-contain object-top`}
              src={
                "https://blog.teamtreehouse.com/wp-content/uploads/2015/05/InternetSlowdown_Day.gif"
              }
              alt=""
              onLoad={() => setLoaded(true)}
              data-src={publicFolder + post?.img}
            />
          )}
        </div>
        <div className="postBottom  flex items-center justify-between border-t-2 pt-2">
          <div className="postBottomLeft flex items-center">
            <BiHeart
              className="heartIcon text-[red] w-[24px] h-[24px] mr-4 cursor-pointer"
              onClick={likeHandler}
            />
            <BiLike
              className="likeIcon w-[24px] h-[24px] text-[blue] cursor-pointer mr-2"
              onClick={likeHandler}
            />
            <span className="postLikeCounter  "> {like} like's</span>
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
