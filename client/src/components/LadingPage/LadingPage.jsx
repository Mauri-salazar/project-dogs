import React from 'react';
import { Link } from 'react-router-dom';

import './landingPage.css';

export const LandingPage = () => {
  return (
    <div className='landing'>
      <div className='title'>
        <h1>Welcomens</h1>
        <h2>Project Dogs</h2>
        <Link to='/home'>
            <button className='btn'>Enter</button>
        </Link>
      </div>
   </div>
  );
};