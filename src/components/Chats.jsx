import React from 'react';
import UserImg from '../assets/profile_pic.png';

const Chats = () => {
  return (
    <div className='chats'>
      <div className="user-chat">
        <img src={UserImg} alt="" />
        <div className="user-chat-info">
          <span>UserName</span>
          <p>hello</p>
        </div>
      </div>
    </div>
  )
}

export default Chats