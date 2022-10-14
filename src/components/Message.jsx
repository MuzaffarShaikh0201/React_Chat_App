import React, { useContext, useEffect, useRef } from 'react'
import UserImg from '../assets/profile_pic.png';
import MemeImg from '../assets/meme_img.jpg';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

const Message = ({message}) => {
  const {currentUser} = useContext(AuthContext);
  const {data} = useContext(ChatContext);
  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({behavior: "smooth"});
  }, [message]);

  const time = () => {
    let date = new Date(message.date.seconds * 1000);
    return `${date.getHours()}:${date.getMinutes()}`
  }

  const timeStr = time();

  return (
    <div ref={ref} className={`message ${message.senderId === currentUser.uid && "owner"}`}>
        <div className="message-info">
            <img src={message.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURL} alt="" />
            <span>{timeStr}</span>
        </div>
        <div className="message-content">
            <p>{message.text}</p>
            {message.img && <img src={message.img} alt="" />}
        </div>
    </div>
  );
}

export default Message;