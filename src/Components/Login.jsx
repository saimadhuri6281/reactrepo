import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='loginbody'>
      <div className='main'>
        <h1 className='heading'>Sportz</h1>
        <div className='block'>
          <h4>UserName</h4>
          <input type="text" className="input-field" placeholder='Enter your User Name' /><br />
          <h4>Password</h4>
          <input type="password" className="input-field" placeholder='Enter your Password' />
        </div>
        <div className='signup'>
          <Link to='/dashboard'>
            <button className='login-button'>Log in</button>
          </Link>
          <div className='skip-option'>
            <Link to='/'>
              <h3>Skip</h3>
            </Link>
          </div>         
          <Link to='/signup'>
            <h3>Sign up?</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
