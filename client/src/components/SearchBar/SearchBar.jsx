import React, { useState } from 'react';
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
    setName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getDogsName(name));
    setName('');
  }

  return (
    <div className='search'>
        <div className='divSearch'>
            <button
              type='submit'
              onClick={ (e) => handleButtonClick(e) }
              className='btnHome'
            >
              Home
            </button>
            <Link to={'/createDog'}>
              <button className='btnCreate'>Create Dog</button>
            </Link>
            <input
              type='text'
              placeholder='Search...'
              className='input'
              onChange={(e) => handleInputChange(e)}
            />
            <button type='submit' onClick={ (e) => handleSubmit(e)}>Buscar</button>
        </div>
    </div>
  )
};
