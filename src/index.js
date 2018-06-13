import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/App';
import Contact from './components/Contact';
import About from './components/About';

import './index.css';


ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
    </div>

  </Router>,

  document.getElementById('root')



);
