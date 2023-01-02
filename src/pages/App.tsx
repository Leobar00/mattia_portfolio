import React from 'react';
import './../style/App.scss';
import Home from "./Home";
import Main from "./Main";
import Error from './Error';
import Menu from './Menu';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Drone from "./Drone";
import Oceano from "./Oceano";
import Bibank from "./Bibank";
import Fitup from "./Fitup";
import About from "./About";


const App = () => {
  return (

          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/main" element={<Main />} />
              <Route path='/menu' element={<Menu />}/>
              <Route path='/drone' element={<Drone />}/>
              <Route path='/oceano' element={<Oceano />}/>
              <Route path='/bibank' element={<Bibank />}/>
              <Route path='/fitup' element={<Fitup />}/>
              <Route path='*' element={<Error />}/>
          </Routes>

  )
}

export default App;
