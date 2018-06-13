import React, { Component } from 'react';
import { BrowserRouter, Link, Router } from 'react-router-dom';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">David's React App</h1>
          <Link to="/contact"><button>Contact Yo</button></Link>
          <Link to="/about"><button>About Yo</button></Link>
      </div>
    );
  }
}

export default App;
