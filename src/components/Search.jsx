import React from 'react'
import UserImg from '../assets/profile_pic.png'

const Search = () => {
  return (
    <div className='search'>
      <div className="search-form">
        <input 
          type="text" 
          placeholder='Find a user' 
        />
      </div>
      <div className="user-chat">
        <img src={UserImg} alt="" />
        <div className="user-chat-info">
          <span>UserName</span>
        </div>
      </div>
    </div>
  )
}

export default Search