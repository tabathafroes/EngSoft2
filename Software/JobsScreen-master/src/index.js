import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Welcome from './Componets/Welcome'
import Header from './Componets/Header/header'

ReactDOM.render(
  <React.StrictMode>
      <Header />
    <Router>
      <div>
        <Route path="/" exact component={Welcome} />
        <Route path="/vagas" component={App} />
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


