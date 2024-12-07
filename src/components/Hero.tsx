/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import Navbar from './Navbar';
import "@/app/styles/hero.css";

const Hero: React.FC = () => {
  return (
    <div id='hero' className='hero-container'>
      <Navbar />
      <div className='hero-content'>
        <div className='hidden lg:block'></div>
        <div className='hero-text'>
          <div className='hero-main'>
            <img 
              src="/my_pics_talha.jpg" 
              alt="Talha Haroon" 
              className='profile-pic' 
            />
            <p data-aos="zoom-in-up">I&apos;m</p>
            <p data-aos="zoom-in-up">Talha</p>
            <p data-aos="zoom-in-up">Haroon</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
