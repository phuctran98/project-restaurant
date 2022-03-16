import React, { useState } from 'react';
import images from '../../constants/images'
import './Navbar.css';
import { HiMenu } from "react-icons/hi";
import { MdOutlineRestaurantMenu } from 'react-icons/md';
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const handleToggle = ()=>{
    setToggleMenu(!toggleMenu)
  }
  return (
    <div className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht}></img>
      </div>
      <ul className='app__navbar-links p__opensans'>
        <li> <a>Home</a></li>
        <li> <a>Pages</a></li>
        <li> <a>Contact Us</a></li>
        <li> <a>Blog</a></li>
        <li> <a>Landing</a></li>
      </ul>
      <div className='app__navbar-login p__opensans'>
        <a href="#login" className="p__opensans">Login / Registration</a>
        <div>
        </div >
        <a href="#login" className="p__opensans">Book Table</a>
      </div>
      <div className='app__navbar-smallscreen'>
        <HiMenu fontSize={27} onClick={()=>handleToggle()}/>
        {
          toggleMenu &&
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">

            <MdOutlineRestaurantMenu className="overlay__close" fontSize={20} onClick={()=>handleToggle()}></MdOutlineRestaurantMenu>

            <li> <a>Home</a></li>
            <li> <a>Pages</a></li>
            <li> <a>Contact Us</a></li>
            <li> <a>Blog</a></li>
            <li> <a>Landing</a></li>
          </div>
        }

      </div>
    </div>
  )
};

export default Navbar;
