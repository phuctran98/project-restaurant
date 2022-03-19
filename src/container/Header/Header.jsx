import React from 'react';
import { SubHeading } from '../../components';
import images from '../../constants/images';

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding'>
    <div className='app__wrapper_info'>
      <SubHeading title='Chase the new Flavour'></SubHeading>
      <h1 className='app__header-h1'>
        The key to Fine dining
      </h1>
      <p className='p__opensans' style={{margin: '1.2rem 0'}}>Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus</p>
      <button className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome}></img>
    </div>
  </div>
);

export default Header;
