import React, { Component } from 'react';
import { BrowserRouter, Link, Router } from 'react-router-dom';
import '../styles/App.css';
import Header from './Header/Header'
import Projects from './Projects/Projects'
import Contact from './Contact'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      progress: 'corona-summer',
    }
  }

  showProjects(){
    this.setState({progress:"projects"})
  }

  showCoronaSummer(){
    this.setState({progress:"corona-summer"})
  }

  PickView(props){
    let progress = this.state.progress;

    if (progress == 'projects'){
      return <Projects/>
    }
    if (progress == 'corona-summer'){
      return <Contact/>
    }
  }

  render() {
    return (
      <div className="wrapper">
          <Header/>

          {this.PickView()}

      </div>
    );
  }
}

export default App;
