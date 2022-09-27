import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import './../style/App.scss';


function App() {
  return (
      <Router>
        <div className="container">
          <div className="background-black center-block-flex">
            <img src="/images/HOMEPAGE/Logo.png" alt="" />
            <div className="container-paragraph">
              <p>
                Hi! I'm <strong>Mattia</strong> and i'm a <br />
                <strong>Junior User Experience Designer.</strong><br />
                Welcome to design world.
              </p>
            </div>
            <Link to="/home">Explore</Link>
          </div>
        </div>
      </Router>
  );
}

export default App;
