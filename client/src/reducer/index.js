import {
  POST_CREATE_DOG ,
  GET_DOGS ,
  GET_DOGS_NAME ,
  GET_DOG_DETAIL ,
  GET_DOGS_TEMPERAMENTS,
  FILTER_DOGS_BY_TEMPERAMENT ,
  FILTER_DOGS_DB ,
  ORDER_DOGS_BY_WEIGTH ,
  ORDER_DOGS_BY_NAME
} from '../actions';

const initialState = {
  dogs: [],
  AllDogs: [],
  dogDetail: {},
  temperaments: []
};

const RootReducer = ( state = initialState , action ) => {

  switch (action.type) {
    case GET_DOGS:
      return {
        ...state,
        dogs: action.payload,
        AllDogs: action.payload
      }

    case GET_DOGS_NAME:
      return {
        ...state,
        dogs: action.payload
      }

    case GET_DOG_DETAIL:
      console.log(action)
      return {
        ...state,
        dogDetail: action.payload[0]
      }

    case GET_DOGS_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload
      }

    case POST_CREATE_DOG:
      return {
        ...state,
      }

    case FILTER_DOGS_BY_TEMPERAMENT:
      const AllDogs= state.AllDogs;
      const DogsFilter = action.payload === 'All' ? AllDogs : AllDogs.filter( (el) => el.temperament.includes(action.payload) );
      return {
        ...state,
        dogs: DogsFilter,
      }

    case FILTER_DOGS_DB:
      const AllDogsDB = state.AllDogs;
      const DogsFilterDB = action.payload === 'Created' ? AllDogsDB.filter((e) => e.createInDb === true ) : AllDogsDB.filter( (e) => !e.createInDb);
      return {
        ...state,
        dogs: action.payload === 'All' ? state.AllDogs : DogsFilterDB,
      }

    case ORDER_DOGS_BY_NAME:
      let sortedArr = action.payload === 'asc' ?
      state.dogs.sort(function (a, b){
      if (a.name > b.name){
        return 1;
      }
      if (b.name > a.name){
        return -1;
      }
        return 0;
      }) :
      state.dogs.sort(function(a, b){
      if (a.name > b.name){
        return -1;
      }
      if (b.name > a.name){
        return 1;
      }
        return 0;
      })
        return{
        ...state,
        dogs: sortedArr
        };

    case ORDER_DOGS_BY_WEIGTH:
      const sortDogs = action.payload === 'weigthAsc' ?
      state.dogs.sort(function(a,b){

        return b.weight_min - a.weight_min;
      }) :

      state.dogs.sort(function(a,b){

        return a.weight_min - b.weight_min;
      })
        return {
          ...state,
          dogs: sortDogs
        }

    default:
        return state;

  }
};

export default RootReducer ;