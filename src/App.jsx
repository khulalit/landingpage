import { useEffect, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {FcGoogle} from 'react-icons/fc'
import {SiFacebook} from 'react-icons/si'
import {AiOutlineUser,AiFillStar,AiFillTwitterCircle} from 'react-icons/ai'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {GrAdd} from 'react-icons/gr'
import {FaPlay} from 'react-icons/fa'
import './App.css'

function App() {
 
  return (
    <>
      <section className='welcome'>
      <h1>Welcome Back</h1>
      <span>Join the world's largest community</span>
      <span>Recent logins</span>
      <div className='accounts'>
          <div className='items'>
            <AiFillStar/>
            <div className='name-info'>
              <AiOutlineUser/>
              <h4>Name</h4>
            </div>
            <BsThreeDotsVertical/>
          </div>
          <div className='items'>
            <AiFillStar/>
            <div className='name-info'>
              <AiOutlineUser/>
              <h4>Name</h4>
            </div>
            <BsThreeDotsVertical/>
          </div>
          <div className='items'>
            <div className='name-info'>
              <div className='add-account'><GrAdd color='white'/></div>
              <h4>Add Account</h4>
            </div>
          </div>
          <div className='odd-one'>
            Sign Up Help
          </div>
          <div className='link'>
            <FaPlay color=""/>
            <a>
              This video will help you to <br />create new account
            </a>
          </div>
      </div>
      </section>
      <hr className='main-hr'/>
      <section className='form'>
        <form>
          <div>
            <div>
              <input className='input-form' name='email' type='email' placeholder='Phone number, username or email'/>
              <span>
                
              </span>
            </div>
            <div>
              <input className='input-form' name='password' type='password' />
            </div>
          </div>
          <button className='btn btn-green'>
            Sign In
          </button>
          <button className='btn btn-red'>
            Create New Account
          </button>
        </form>
        <hr/>
        <div className='signin-using'>
          <FcGoogle size={50}/>
          <SiFacebook color='blue' size={50}/>
          <AiFillTwitterCircle color='blue' size={50}/>
        </div>
      </section>
    </>
  )
}

export default App
