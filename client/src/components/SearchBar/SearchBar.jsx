import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getDogs , getDogsName } from '../../actions';

import './searchBar.css';


export const SearchBar = () => {

  const dispatch = useDispatch();
  const [name, setName] = useState('');


  const handleButtonClick = (e) => {
    e.preventDefault();
    dispatch(getDogs());
  }

  const handleInputChange = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    setName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getDogsName(name));
  }

  return (
    <div className='search'>
        <div className='divSearch'>
            <button
              type='submit'
              onClick={ (e) => handleButtonClick(e) }
              className='btn-'
            >
              volver
            </button>
            <Link to={'/createDog'}>
              <button className='btn-'>Crear Mascota</button>
            </Link>
            <input
              type='text'
              placeholder='Search...'
              className='input'
              onChange={(e) => handleInputChange(e)}
            />
            <button className='btn-' type='submit' onClick={ (e) => handleSubmit(e)}>Buscar</button>
        </div>
    </div>
  )
};
