import { Route } from 'react-router-dom';
import { Routes  } from 'react-router';

import { LandingPage } from './components/LadingPage/LadingPage';
import { Home } from './components/Home/Home';
import { Detail } from './components/Detail/Detail';
import { CreateDog } from './components/CreateDog/CreateDog';


import './App.css';

function App() {
  return (
    <div>
        <Routes>
           <Route path='/' axact element={<LandingPage />} />
           <Route path='/home' axact element={<Home />} />
           <Route path='/createDog' axact element={<CreateDog />}/>
           <Route path='/detail/:id' axact element={<Detail />} />
        </Routes>
    </div>
  );
}

export default App;
