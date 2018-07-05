import React, { Component } from 'react';
import { BrowserRouter, Link, Router } from 'react-router-dom';
import '../styles/App.css';
import Header from './Header/Header'
import Projects from './Projects/Projects'

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
          <Header/>

          <Projects/>


      </div>
    );
  }
}

export default App;
