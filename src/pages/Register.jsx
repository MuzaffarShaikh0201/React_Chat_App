import React from 'react'
import AddImg from '../assets/add_image.png'


const Register = () => {
  return (
    <div className="form-container">
        <div className="form-wrapper">
            <div className="logo">Chat App</div>
            <div className="title">Register</div>
            <form >
                <input type="text" placeholder='Name' />
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <input style={{display: 'none'}} type="file" id='file'/>
                <label htmlFor="file">
                    <img src={AddImg} alt="" className='add-img-logo'/>
                    <span>Add an avatar</span>
                </label>
                <button>Sign up</button>
            </form>
            <p>Already have an account? Login</p>
        </div>
    </div>
  )
}

export default Register