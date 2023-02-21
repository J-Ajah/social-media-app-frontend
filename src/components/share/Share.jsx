import axios from "axios";
import React, { useContext, useState } from "react";
import { useRef } from "react";
import {
  MdPermMedia,
  MdLabel,
  MdRoom,
  MdEmojiEmotions,
  MdCancel,
} from "react-icons/md";
import { AuthContext } from "../../context/AuthContext";
import NoImage from "../generics/NoImage";

const Share = () => {
  const { user: currentUser } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const desc = useRef();

  const uploadImageAndUpdateURL = (newPost, data, config) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(
          "http://localhost:8800/api/upload",
          data,
          config
        );
        console.log("Await: ", res);
        // Adds the image information to the post request
        newPost.img = res.data.url;
        return resolve(newPost);
      } catch (err) {
        console.log(err);
        return reject("Error uploading image");
      }
    });
  };

  // Function that sends the post to the backend server.
  const sendPostToBackend = async (post) => {
    if (post.desc || post?.img) {
      try {
        const response = await axios.post(
          "http://localhost:8800/api/posts",
          post
        );
        if (response.status === 200) {
          window.location.reload();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    let newPost = {
      userId: currentUser[0]._id,
      desc: desc.current.value,
    };

    if (file) {
      // Used in the upload of the image file to the backend
      const data = new FormData();
      const fileName = file.name;
      data.append("file", file);
      data.append("name", fileName);
      // Attaches the file name to the post

      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };

      // Hits the backend api to upload the file to cloudinary and makes the post
      uploadImageAndUpdateURL(newPost, data, config)
        .then(async (data) => {
          // Sends the post to the backend server
          sendPostToBackend(data);
        })
        .catch((error) => {
          console.log("Error is:", error);
        });
    } else {
      sendPostToBackend(newPost);
    }

    console.log("newPost", newPost);
  };
  return (
    <div className="share w-full  ">
      <div className="sharewrapper p-5">
        <div className="shareTop flex items-center">
          {currentUser[0]?.profilePicture ? (
            <img
              src="/assets/person1.jpg"
              alt="person"
              className="shareProfileImg w-[50px] h-[50px] rounded-full object-cover object-top"
            />
          ) : (
            <NoImage />
          )}{" "}
          <input
            placeholder={`What's in your mind ${currentUser[0]?.username} ?`}
            className="shareInput ml-10 border-none w-[80%] focus:outline-none"
            ref={desc}
          />
        </div>
        {file && (
          <div className="px-2 py-2 mt-4 relative shadow-md">
            <img src={URL.createObjectURL(file)} alt="" />
            <MdCancel
              className="text-[30px] text-[#e72020] absolute top-0 right-0 mt-[10px] mr-3 cursor-pointer"
              onClick={() => setFile(null)}
            />
          </div>
        )}
        <hr className="shareHr m-5" />
        <form
          className="shareBottom flex items-center justify-center"
          onSubmit={submitHandler}
        >
          <div className="shareOptions flex ">
            <label
              htmlFor="file"
              className="shareOption flex items-center mr-5 cursor-pointer"
            >
              <MdPermMedia className="shareIcon text-[tomato]" />
              <span className="shareOptionText">Photo or Video</span>
              <input
                className="hidden"
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => {
                  console.log(e.target.files);
                  setFile(e.target.files[0]);
                }}
              />
            </label>
            <div className="shareOption flex items-center mr-5 cursor-pointer">
              <MdLabel className="shareIcon text-[#3857d5]" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption flex items-center mr-5 cursor-pointer">
              <MdRoom className="shareIcon text-[tomato]" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption flex items-center mr-5 cursor-pointer">
              <MdEmojiEmotions className="shareIcon text-[goldenrod]" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button
            type="submit"
            className="shareButton border-none py-[4px] px-[12px] rounded-[5px] bg-[#14A198] font-medium mr-5 text-[white] text-[14px] cursor-pointer"
          >
            {" "}
            Share
          </button>
        </form>
      </div>
    </div>
  );
};

export default Share;
