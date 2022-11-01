import { createStore , applyMiddleware  } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import RootReducer from '../reducer'

const store = createStore(RootReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;


//thunk funcion q puede interactuar con los metodos dispatch y getState de redux,osea
//nos permite ussar esos 2 metodos en cualquir lugar y momento,
// applyMiddleware habilita thunk

//createStore , recibe le reducer que son las acciones y loguica a realizar