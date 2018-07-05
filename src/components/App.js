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
      progress: 'projects',
    }
  }

  showProjects(){
    this.setState({progress:"projects"})
  }

  showContactUs(){
    this.setState({progress:"contact-us"})
  }

  showCoronaSummer(){
    this.setState({progress:"corona-summer"})
  }

  PickView(props){
    let progress = this.state.progress;

    if (progress == 'projects'){
      return <Projects showCoronaSummer={this.showCoronaSummer.bind(this)}/>
    }
    if (progress == 'contact-us'){
      return <Contact/>
    }
    if (progress == 'corona-summer'){
      return <Contact/>
    }
    if (progress == 'corona-summer'){
      return <Contact/>
    }
    if (progress == 'corona-summer'){
      return <Contact/>
    }
    if (progress == 'corona-summer'){
      return <Contact/>
    }
    if (progress == 'corona-summer'){
      return <Contact/>
    }
    if (progress == 'corona-summer'){
      return <Contact/>
    }
    if (progress == 'corona-summer'){
      return <Contact/>
    }
    if (progress == 'corona-summer'){
      return <Contact/>
    }
  }

  render() {
    return (
      <div className="wrapper">
          <Header showProjects={this.showProjects.bind(this)} showContactUs={this.showContactUs.bind(this)}/>

          {this.PickView()}

      </div>
    );
  }
}

export default App;
