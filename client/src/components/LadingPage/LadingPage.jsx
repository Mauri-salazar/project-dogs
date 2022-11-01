import React from 'react';
import { Link } from 'react-router-dom';

import './landingPage.css';

export const LandingPage = () => {
  return (
    <div className='landing'>
      <div className='cont-title'>
          <h1>Bienvenidos</h1>
          <h4>Tus Mascotas</h4>
      </div>
      <div className='btn-cont'>
          <Link to='/home'>
            <button className='btn'>Inicio</button>
          </Link>
    </div>
   </div>
  );
};