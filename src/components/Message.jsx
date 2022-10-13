import React from 'react'
import UserImg from '../assets/profile_pic.png';
import MemeImg from '../assets/meme_img.jpg';

const Message = () => {
  return (
    <div className="message owner">
        <div className="message-info">
            <img src={UserImg} alt="" />
            <span>just now</span>
        </div>
        <div className="message-content">
            <p>hello</p>
            <img src={MemeImg} alt="" />
        </div>
    </div>
  );
}

export default Message;