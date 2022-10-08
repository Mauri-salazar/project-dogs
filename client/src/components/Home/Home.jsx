import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs , filterDogsByTemperament , filterDogsDb , orderByWeigth , orderByName } from '../../actions';

import { Card } from '../Card/Card';
import { SearchBar } from '../SearchBar/SearchBar';
import { Paginated } from '../Paginated/Paginated';

import './home.css';

export const Home = () => {

  const dispatch = useDispatch();
  const AllDogs = useSelector( (state) => state.dogs);//extrae el state global del reducer

   //PAGUINADO
   const [ CunrrentPage, setCunrrentPage] = useState(1); //guarda estado inicial de mi web
   const [ DogsPage, setDogsPage] = useState(8);//videogames x paguina
   const indexOfLastDogs = CunrrentPage * DogsPage; //indice de mi ultimo videoGames x paguina
   const indexOfFirstDogs = indexOfLastDogs - DogsPage; //indice del primero
   const currentDogs = AllDogs.slice(indexOfFirstDogs,indexOfLastDogs);

  //con useEffect extraimos los videosgames del estado cuando el componente se monta
  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  const paguinado = (pageNumber) => {
    setCunrrentPage(pageNumber);
  }

  const renderDogs = (e) => {
    return (
      <Card
        image={e.image}
        name={e.name}
        key={e.id}
        id={e.id}
      /> );
  }

  const [order, setOrder] = useState('');

  const handleSortRating = (e) => {
    e.preventDefault();
    dispatch(orderByWeigth(e.target.value));
    setCunrrentPage(1);//setea la paguina principal
    setOrder(`Ordenado ${e.target.value}`);
  }

  const handleSortAlphabet = (e) => {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCunrrentPage(1);//setea la paguina principal
    setOrder(`Ordenado ${e.target.value}`);
  }

  const handleFilterStatus = (e) => {
    e.preventDefault();
    dispatch(filterDogsByTemperament(e.target.value));
  }

  const handleFilterDogsDb = (e) => {
    e.preventDefault();
    dispatch(filterDogsDb(e.target.value));
  }

return (
  <div className='conteiner'>
      <div className='cont-select'>
              <select className='select' onChange={ (e) => handleSortAlphabet(e) }>
                  <option value="asc">A - Z</option>
                  <option value="desc">Z - A</option>
              </select>
              <select className='select' onChange={ (e) => handleSortRating(e) }>
                  <option value="weigthAsc">Mayor peso</option>
                  <option value="weigthDesc">Menor peso</option>
              </select>
              <select className='select' onChange={ (e) => handleFilterStatus(e) }>
                  <option value="All">All Genres</option>
                  <option value="Playful">Playful</option>
                  <option value="Dignified">Dignified</option>
                  <option value="Dutiful">Dutiful</option>
                  <option value="Loyal">Loyal</option>
                  <option value="Docile">Docile</option>
                  <option value="Loving">Loving</option>
                  <option value="Responsible">Responsible</option>
                  <option value="Affectionate">Affectionate</option>
                  <option value="Dominant">Dominant</option>
                  <option value="Reserved">Reserved</option>
                  <option value="Kind">Kind</option>
                  <option value="Tenacious">Tenacious</option>
                  <option value="Steady">Steady</option>
                  <option value="Fearless">Fearless</option>
                  <option value="Fierce">Fierce</option>
                  <option value="Agile">Agile</option>
                  <option value="Cheerful">Cheerful</option>
                  <option value="Adaptable">Adaptable</option>
                  <option value="Bright">Bright</option>
              </select>
          <select className='select' onChange={ (e) => handleFilterDogsDb(e) }>
                <option value='All'>Todos</option>
                <option value='Created'>From DB</option>
          </select>
      </div>
      <SearchBar />
      <Paginated
        DogsPage={ DogsPage }
        AllDogs={ AllDogs.length }
        paguinado={ paguinado }
      />
      <div>
        {
          currentDogs.map(renderDogs)
        }
      </div>
  </div>
  );
};

