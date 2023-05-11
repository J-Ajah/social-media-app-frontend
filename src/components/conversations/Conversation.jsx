import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Conversation = ({ conversation, currentUser }) => {
  const [user, setUser] = useState(null);
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const friendId = conversation.members.find((memberId) => (memberId !== currentUser?._id));

    const getUser = async () => {
      
      try {
        const res = await axios(`http://localhost:8800/api/users?userId=${friendId}`);
        setUser(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getUser();
  }, [currentUser, conversation])


  return (
    <div className='conversation flex items-center p-[10px]  cursor-pointer hover:bg-[#e1e1e1] space-x-4 mt-[20px]'>
      <img className='conversationImage w-[40px] h-[40px] rounded-full object-cover' src={!user?.profilePicture ? `${publicFolder}DummyImage.png` : `${publicFolder + user?.profilePicture}`} alt="" />
      <span className='conversationName font-[500]'>{user?.username}</span>
    </div>
  )
}

export default Conversation;