import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDogDetail } from '../../actions';

import './detail.css';

export const Detail = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const dogDetail = useSelector( (state) => state.dogDetail);

  useEffect( () => {
    dispatch(getDogDetail(id));
  },[dispatch,id]);

  return (
    <div className='cont-info'>
      {
        <div>
            <h1 className='title'>{dogDetail.name}</h1>
            <div className='cont-img'>
                  <img  className='dog-img' src={dogDetail.image ? dogDetail.image : dogDetail.image} alt='Not found'  />
            </div>
            <div className='cont-text'>
                <div className='height'>
                    <h2>Altura :</h2>
                    <p>Min: {dogDetail.height_min} centimeters</p>
                    <p>max: {dogDetail.height_max} centimeters</p>
                </div>
                <div className='weight'>
                    <h2>Peso :</h2>
                    <p>Min: {dogDetail.weight_min} kilos</p>
                    <p>Max: {dogDetail.weight_max} kilos</p>
                </div>
                <div className='life'>
                    <h2>Tiempo de vida</h2>
                    <p>Min: {dogDetail.life_time_min} years</p>
                    <p>Max: {dogDetail.life_time_max} years</p>
                </div>
                <h2>Temperamentos</h2>
                <p>{!dogDetail.createInDb ? dogDetail.temperament :  dogDetail.Temperaments?.map( (e) => e.name + " ")}</p>
            </div>
        </div>
        }
      <div className='cont-btn'>
        <Link to='/home'>
            <button className='btn-home'>volver</button>
        </Link>
      </div>
    </div>
  )
};
