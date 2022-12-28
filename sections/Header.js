import React from 'react'
import Navbar from './components/Navbar'
import video from "./assets/watch-video"

const Header = () => {
  return (
    <>
    <header id='header' className='vh-100'> 
    <Navbar/>
    <div>
        <p>THE PREMIUM LIFESTYLE</p>
        <h1>You're Not A Customer, You're Family</h1>
        <p>The wonderful serenity has taken possesion of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart</p>
        <div>
            <h4>Watch Video</h4>
            <img src={video} alt="" />
        </div>
    </div>


    </header>
    </>
  )
}

export default Header