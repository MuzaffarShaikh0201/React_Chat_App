import React from 'react'

const Login = () => {
  return (
    <div className="form-container">
        <div className="form-wrapper">
            <div className="logo">Chat App</div>
            <div className="title">Login</div>
            <form >
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <button>Sign in</button>
            </form>
            <p>Don't have an account? Register</p>
        </div>
    </div>
  )
}

export default Login