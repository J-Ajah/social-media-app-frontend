import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ChatOnline = ({ onlineUsers, currentId, setCurrentChat }) => {
    const [friends, setFriends] = useState([])
    const [onlineFriends, setOnlineFriends] = useState([]);
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(() => {
        const getFriends = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/api/users/friends/` + currentId);
                setFriends(res.data)
            } catch (error) {
                console.log(error)
            }
        }

        getFriends();
    }, [currentId])

    useEffect(() => {

        // Updates the online friends state with friends of the current user who are currently online
        setOnlineFriends(friends?.filter((currentFriend) => {
            return onlineUsers.some((user) => {
                return user._id !== currentFriend._id
            })
        }))
  
    }, [friends, onlineUsers])

    const handleClick =  async(clickedUser)=>{
        try{
            const res = await axios.get(`http://localhost:8800/api/conversations/find/${currentId}/${clickedUser._id}`);
            setCurrentChat(res.data)
        }catch(error){
            console.log(error)
        }
    }

    return (
        <div className='chatOnline p-2 py-0 space-y-1'>
            {
                onlineFriends?.map((friend) => (

                    <div className='chatOnlineFriend flex items-center space-x-2 cursor-pointer hover:bg-[#e1e1e1] py-2' onClick={()=> handleClick(friend)}>
                        <div className='chatOnlineImgContainer relative'>
                            <img
                                className='chatOnlineImg w-[32px] h-[32px]  rounded-full '
                                src={!friend?.profilePicture ? `${publicFolder}DummyImage.png` : friend?.profilePicture} alt="" />
                            <div className="chatOnlineBadge absolute bg-[green]  w-[10px] h-[10px] rounded-full -top-[1.5px] -right-[-3px]">
                            </div>
                        </div>
                        <span className="chatOnlineName font-[500] ">{friend?.username}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default ChatOnline