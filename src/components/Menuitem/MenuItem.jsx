import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  <div className='app__menuItem'>
    <div className='app__menuItem-head'>
      <div className='app__menuItem-name'>
        <p style={{ color: '#DCCA87' }} className='p__cormorant'>{title}
        </p>
      </div>
      <div className='app__menuitem-dash'>

      </div>
      <div className='app__menuitem-price' style={{ color: 'white' }}>
        <p>{price}</p>
      </div>
    </div>
    <div className="p__opensans" style={{ color: '#AAAAAA' }}>
      {tags}
    </div>
  </div>
);

export default MenuItem;
