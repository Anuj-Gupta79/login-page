import React from 'react'
import "./loginform.styles.css"
import LockIcon from '@mui/icons-material/Lock';

const LoginForm = () => {
  return (
    <>
    <div className='container'>
        <form className='sub-container'>
            <div className='s_icon'>
                <LockIcon color="primary" />
            </div>
            <div className='s_text'>Sign in</div>
            <div className='id'>
                <input type='text' placeholder='Enter your username' style={{width:"300px", height:"30px"}}/>
            </div>
            <div className='pass'>
                <input type='password' placeholder='Enter password' style={{width:"300px", height:"30px"}}/>
            </div>
            <div className='Check'>
                <input type='checkbox' style={{size:10}}/> Remember Me
            </div>
            <div className='Btn'>
                <button style={{width:"310px", height:"30px"}}>SIGN IN</button>
            </div>
            <div className='s-1'>
                <a href=''>Forgot password?</a>
                <a href=''>Don't have an account? Sign-up </a>

            </div>
        <div className='Footer'>
            <p>Copyright &#169; <a href=''>Hourlyrooms</a> 2020</p>
        </div>
        </form>
    </div>
    </>
  )
}

export default LoginForm