import React, { useContext } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const Feed = ({ username }) => {
  const [post, setPost] = React.useState([]);
  const { user } = useContext(AuthContext);

  React.useEffect(() => {
    const fetchPost = async () => {
      const response = username
        ? await axios.get(`http://localhost:8800/api/posts/profile/${username}`)
        : await axios.get(
            `http://localhost:8800/api/posts/timeline/${user[0]._id}`
          );

      setPost(
        response.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )
      );
    };
    fetchPost();
  }, [user, username]);

  return (
    <div className="feed flex-[7] ">
      <div className="feedwrapper relative px-2 lg:top-14">
        <div class="intersect-container h-[100vh] overflow-y-auto ">
          {(!username || username === user?.[0].username) && <Share />}
          {post?.map((post, index) => (
            <Post key={post._id} index={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
