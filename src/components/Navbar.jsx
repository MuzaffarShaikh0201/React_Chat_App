import React from 'react'
import UserImg from '../assets/profile_pic.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chat App</span>
      <div className="user">
        <img src={UserImg} alt="" />
        <span>Username</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar