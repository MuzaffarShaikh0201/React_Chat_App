import React, { useContext } from 'react';
import Add from '../assets/add.png';
import Cam from '../assets/cam.png';
import More from '../assets/more.png';
import Messages from './Messages';
import Input from './Input';
import { ChatContext } from '../context/ChatContext';

const Chat = () => {
  const {data} = useContext(ChatContext);
  console.log(data);

  return (
    <div className='chat'>
      <div className="chat-info">
        <span>{data.user?.displayName}</span>
        <div className="chat-icons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}

export default Chat;