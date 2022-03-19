import React from 'react';
import images from '../../constants/images'
import { SubHeading } from '../../components/'
import './Chef.css';

const Chef = () => (
  <div className='app__chef section__padding app__bg flex__center'>
    <div className='app__chef-img img-reverse'>
      <img src={images.chef} alt='chef'></img>
    </div>
    <div className='app__chef-info'>
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>
        What We Believe In
      </h1>
      <div className='app__chef-content'>
        <div className='app__chef-content-quote'>
          <img src={images.quote}></img>
          <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
        </div>
        <p className='p__opensans'>Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget Sit. Nulla Scelerisque Scelerisque
          Congue Ac Consequat, Aliquam Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit Nunc.
        </p>
        <div className='app__chef-sign'>
          <p className='headtext__cormorant' style={{ fontSize: '40px' }}>Kevin Luo</p>
          <p className='p__opensans'>
            Chef & Founder
          </p>
          <img src={images.sign} ></img>
        </div>


      </div>
    </div>
  </div>
);

export default Chef;
