import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDogDetail } from '../../actions';


export const Detail = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const dogDetail = useSelector( (state) => state.dogDetail);

  useEffect( () => {
    dispatch(getDogDetail(id));
  },[dispatch,id]);

  return (
    <div>
      <Link to='/home'>
        <button>Home</button>
      </Link>
      {
        <div>
          <h1>{dogDetail.name}</h1>
          <br />
          <img src={dogDetail.img ? dogDetail.img : dogDetail.image} alt='Not found' width='200px' height='250px' />
          <h2>Height :</h2>
          <p>Min: {dogDetail.height_min} centimeters</p>
          <p>max: {dogDetail.height_max} centimeters</p>
          <h2>Weight :</h2>
          <p>Min: {dogDetail.weight_min} kilos</p>
          <p>Max: {dogDetail.weight_max} kilos</p>
          <h2>Life Span</h2>
          <p>Min: {dogDetail.life_time_min} years</p>
          <p>Max: {dogDetail.life_time_max} years</p>
          <h2>Temperaments</h2>
          <p>{!dogDetail.createInDb ? dogDetail.temperament : dogDetail.Temperaments?.map( (e) => e.name + " ")}</p>
        </div>
      }
    </div>
  )
};
