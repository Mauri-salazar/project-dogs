import axios from 'axios';

export const POST_CREATE_DOG = 'POST_CREATE_DOG';
export const GET_DOGS = 'GET_DOGS';
export const GET_DOGS_NAME = 'GET_DOGS_NAME';
export const GET_DOGS_TEMPERAMENTS = 'GET_DOGS_TEMPERAMENTS';
export const GET_DOG_DETAIL = 'GET_DOG_DETAIL';
export const FILTER_DOGS_BY_TEMPERAMENT = 'FILTER_DOGS_BY_TEMPERAMENT';
export const FILTER_DOGS_DB = 'FILTER_DOGS_DB';
export const ORDER_DOGS_BY_WEIGTH = 'ORDER_DOGS_BY_WEIGTH';
export const ORDER_DOGS_BY_NAME = 'ORDER_DOGS_BY_NAME';


export const postCreateDog = (payload) => {
  return async (dispatch) => {
      const res = await axios.post('http://localhost:3004/dogs',payload);
      console.log(res);
      return res;
    }
};

export const getDogs = () => {
  return (dispatch) => {
      axios.get('http://localhost:3004/dogs')
      .then( (res) => {
        dispatch({
          type: GET_DOGS,
          payload: res.data,
        });
      })
      .catch( (err) => console.log(err));
  }
};

export const getDogsName = (name) => {
   return (dispatch) => {
      axios.get(`http://localhost:3004/dogs?name=${name}`)
      .then( (res) => {
        dispatch({
          type: GET_DOGS_NAME,
          payload: res.data,
        })
      })
      .catch( (err) => console.log(err));
    }
};

export const getDogDetail = (id) => {
  return (dispatch) => {
      axios.get(`http://localhost:3004/dogs/${id}`)
      .then( (res) => {
        dispatch({
          type: GET_DOG_DETAIL,
          payload: res.data
        })
      })
      .catch( (err) => console.log(err));
    }
};

export const getTemperaments = () => {
  return (dispatch) => {
      axios.get('http://localhost:3004/temperaments')
      .then( (res) => {
        dispatch({
          type: GET_DOGS_TEMPERAMENTS,
          payload: res.data
        })
      })
      .catch( (err) => console.log(err));
  }
};

export const filterDogsByTemperament = (payload) => {
  return {
        type: FILTER_DOGS_BY_TEMPERAMENT,
        payload
      }
};

export const filterDogsDb = (payload) => {
  return {
        type: FILTER_DOGS_DB,
        payload
    }
}

export const orderByWeigth = (payload) => {
  return {
      type: ORDER_DOGS_BY_WEIGTH,
      payload
    }
};

export const orderByName = (payload) => {
  return {
      type: ORDER_DOGS_BY_NAME,
      payload
    }
};
