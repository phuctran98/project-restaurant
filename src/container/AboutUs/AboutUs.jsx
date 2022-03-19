import React from 'react';
import images from '../../constants/images';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg  flex__center section__padding'>
    <div className='app__aboutus-overlay'>
      <img src={images.G}></img>
    </div>
    <div className='app__aboutus-content'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon}></img>
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button className='custom__button'>Know More</button>
      </div>
      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife}></img>
      </div>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon}></img>
        <p className="p__opensans">Adipiscing Tempus Ullamcorper Lobortis Odio Tellus Arcu Volutpat. Risus Placerat Morbi Volutpat Habitasse Interdum Mi Aliquam In Sed Odio Nec Aliquet.</p>
        <button className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
