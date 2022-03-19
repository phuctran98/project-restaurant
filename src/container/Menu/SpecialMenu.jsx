import React from 'react';
import MenuItem from '../../components/Menuitem/MenuItem';
import SubHeading from '../../components/SubHeading/SubHeading';
import data from '../../constants/data';
import images from '../../constants/images';

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__speacitalMenu app__wrapper flex__center section__padding'>
    <div className='app__speacitalMenu-title'>
      <SubHeading title='Menu That Fits Your Palatte'>

      </SubHeading>
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>

    <div className='app__speacitalMenu-menu'>
      <div className='app__speacitalMenu-menu_wine '>
        <p className='app__specialMenu-menu_heading'> Wine & Beer</p>
        <div className='app__specialMenu_menu_items '>
          {
            data.wines.map((wine, index) => (
              <MenuItem key={index} title={wine.title}
                price={wine.price} tags={wine.tags}>
              </MenuItem>
            ))
          }
        </div>
      </div>

      <div className='app__specialMenu_menu_img'>
        <img src={images.menu} alt='img-menu'></img>
      </div>

      <div className='app__speacitalMenu-menu_cocktails'>
        <p className='app__specialMenu-menu_heading'> Wine & Beer</p>
        <div className='app__specialMenu_menu_items '>
          {
            data.cocktails.map((wine, index) => (
              <MenuItem key={index} title={wine.title}
                price={wine.price} tags={wine.tags}>
              </MenuItem>
            ))
          }
        </div>
      </div>
    </div>
    <div style={{marginTop : 25}}>
      <button className='custom__button'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;
