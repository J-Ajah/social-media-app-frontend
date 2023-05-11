import React from 'react'
import { format } from 'timeago.js'
const Message = ({ message, own = false }) => {
    return (
        <div className={`message flex flex-col space-y-1 mt-[20px] ${own ? "items-end" : ""}`}>
            <div className='messageTop flex space-x-2'>
                <img className='messageImg w-[32px] h-[32px] rounded-full object-cover' src="https://res.cloudinary.com/duedatz3o/image/upload/v1676837349/samples/people/smiling-man.jpg" alt="" />
                <p className={`messageText ${own ? "bg-[#d6d6d6]" : "bg-[#14ac9f] text-white "} p-[10px] rounded-[20px]   max-w-[300px]`}>{message?.text}</p>
            </div>
            <div className='messageBottom text-[12px] mt-[10px]'>
                {format(message?.createdAt)}
            </div>

        </div>
    )
}

export default Message