import React from 'react';
import './../style/App.scss';
import Home from "./Home";
import Main from "./Main";
import Error from './Error';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";



const App = () => {
  return (
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/main" element={<Main />} />
            <Route path='*' element={<Error />}></Route>
          </Routes>
      </Router>

  )
}

export default App;
