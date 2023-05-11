import React, { useContext, useEffect, useRef, useState } from 'react'
import Topbar from '../../components/topbar/Topbar'
import Conversation from '../../components/conversations/Conversation'
import Message from '../../components/message/Message'
import ChatOnline from '../../components/chatOnline/ChatOnline'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import { io } from "socket.io-client"

const Messenger = () => {
    const { user } = useContext(AuthContext);
    const currentUser = user[0]
    const [conversation, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState(null);
    const [newMessage, setNewMessage] = useState(null);
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState(null);
    const scrollRef = useRef(null);
    const socket = useRef();


    useEffect(() => {

        socket.current = (io("ws://localhost:8900"))

    }, [])

    useEffect(() => {
        //Listens to the "welcome" event on Successful connection.
        socket.current?.on("welcome", () => {
            console.log("Hurray, you are successfully connected")
        });

        // Emits an addUser event to the socket serevr
        socket.current?.emit("addUser", currentUser?._id);

        // Listens to the "getUsers" event when a new user is added to the system.
        socket.current?.on("getUsers", (users) => {
            setOnlineUsers(users)
        })

        // Listens to the "getMessage" event been emitted by the server.
        socket.current?.on("getMessage", (data) => {
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now(),
            })
        })

    }, [currentUser?._id, socket])


    useEffect(() => {

        // Fetches the conversation based on the userId and sets it to the conversation state
        const getConversation = async () => {
            try {
                const res = await axios.get("http://localhost:8800/api/conversations/" + currentUser._id);
                setConversations(res.data)

            } catch (error) {
                console.log(error)
            }
        }

        getConversation();

    }, [currentUser._id]);


    // Fetches the conversation messages and sets it as the currentMessage in view.
    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await axios.get("http://localhost:8800/api/messages/" + currentChat?._id);
                setMessages(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getMessages();
    }, [currentChat]);


    useEffect(() => {
        scrollRef.current?.scrollIntoView({
            behavior: "smooth"
        })
    }, [messages])


    // Updates the messages state when arrival messages changes.
    useEffect(() => {
        arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) && setMessages((prev) => [...prev, arrivalMessage])
    }, [arrivalMessage, currentChat]);



    // Handle submit method
    const handleSubmit = async () => {
        const newMessageObject = {
            conversationId: currentChat._id,
            sender: currentUser._id,
            text: newMessage,
        }

        // Find the receiver Id from the current chat
        const receiverId = currentChat.members.find(member => member !== currentUser._id)

        // Emitting an event to the socket server to send our message
        socket.current?.emit("sendMessage", {
            senderId: currentUser._id,
            receiverId,
            text: newMessage,
        });

        try {
            const res = await axios.post("http://localhost:8800/api/messages", newMessageObject);
            console.log("New message response is: ", res)
            setMessages([...messages, res.data])

            // Reset new Message
            setNewMessage(null)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className='relative'>
            <Topbar />
            <div className='messenger relative top-12 flex h-[93vh]  w-full'>
                <div className='chatMenu flex-[3.5] p-3'>
                    <div className='chatMenuWrapper'>
                        <input placeholder='Search for friend' className="chatMenuInput w-[90%] py-[10px] border-b-[1px] border-b-[gray] outline-none " />
                        {
                            conversation.map((conversation, key) => {
                                const id = key;
                                return <div key={id} onClick={() => setCurrentChat(conversation)}>
                                    <Conversation conversation={conversation} currentUser={currentUser} />
                                </div>

                            })
                        }
                    </div>
                </div>
                <div className='chatBox flex-[5.5]  border-[2px] h-full'>
                    <div className='chatBoxWrapper relative h-full'>
                        {
                            currentChat ?
                                <>
                                    <div className='chatBoxTop relative h-full max-h-[85%] overflow-y-scroll p-3'>
                                        {
                                            messages?.map((message, index) => {
                                                const messageKey = index;
                                                return <div key={messageKey} ref={scrollRef}>
                                                    <Message message={message} own={message.sender === currentUser._id} />
                                                </div>
                                            })

                                        }


                                    </div>
                                    <div className='chatBoxBottom  mt-[5px] flex items-center justify-between px-2'>
                                        <textarea className='chatMessageInput w-[80%] h-[90px] p-[10px] border-[1px] outline-none' placeholder='write something...'
                                            onChange={(e) => setNewMessage(e.target.value)} value={newMessage ? newMessage : ""}></textarea>
                                        <button className='chatSubmitButton w-[70px] h-[40px] border-none rounded-[5px] cursor-pointer bg-[#1eb7a0] font-[500] text-white' onClick={handleSubmit}>Send</button>
                                    </div>
                                </>
                                : <span className='noConversation  text-[50px] text-[#d1d1d1] block p-10  absolute top-[20%] cursor-default'>  No conversation, open chat to start conversation.</span>}
                    </div>
                </div>
                <div className='chatOnline flex-[3.5] py-3'>
                    <div className='chatOnlineWrapper'>
                        <ChatOnline onlineUsers={onlineUsers} currentId={currentUser._id} setCurrentChat={setCurrentChat} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Messenger