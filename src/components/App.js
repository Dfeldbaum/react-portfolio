import React, { Component } from 'react';
import { BrowserRouter, Link, Router } from 'react-router-dom';
import '../styles/App.css';
import Header from './Header/Header'
import Projects from './Projects/Projects'
import Contact from './Contact'
import CoronaSummer from './DetailPages/CoronaSummer'
import Pataks from './DetailPages/Pataks'
import Liftmaster from './DetailPages/Liftmaster'
import Modelo from './DetailPages/Modelo'
import Chamberlain from './DetailPages/Chamberlain'
import LiftmasterEmail from './DetailPages/LiftmasterEmail'
import Google from './DetailPages/Google'
import Lyrical from './DetailPages/Lyrical'
import About from './About/About'


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

  showAbout(){
    this.setState({progress:"about"})
  }

  showContactUs(){
    this.setState({progress:"contact-us"})
  }

  showCoronaSummer(){
    this.setState({progress:"corona-summer"})
  }

  showPataks(){
    this.setState({progress:"pataks"})
  }

  showLiftmaster(){
    this.setState({progress:"liftmaster"})
  }

  showModelo(){
    this.setState({progress:"modelo"})
  }

  showChamberlain(){
    this.setState({progress:"chamberlain"})
  }

  showLiftmasterEmail(){
    this.setState({progress:"liftmaster-email"})
  }

  showGoogle(){
    this.setState({progress:"google"})
  }

  showLyrical(){
    this.setState({progress:"lyrical"})
  }

  PickView(props){
    let progress = this.state.progress;

    if (progress == 'projects'){
      return <Projects showCoronaSummer={this.showCoronaSummer.bind(this)} showPataks={this.showPataks.bind(this)} showLiftmaster={this.showLiftmaster.bind(this)} showModelo={this.showModelo.bind(this)} showChamberlain={this.showChamberlain.bind(this)} showLiftmasterEmail={this.showLiftmasterEmail.bind(this)} showGoogle={this.showGoogle.bind(this)} showLyrical={this.showLyrical.bind(this)}/>
    }
    if (progress == 'contact-us'){
      return <Contact/>
    }
    if (progress == 'about'){
      return <About/>
    }
    if (progress == 'corona-summer'){
      return <CoronaSummer/>
    }
    if (progress == 'pataks'){
      return <Pataks/>
    }
    if (progress == 'liftmaster'){
      return <Liftmaster/>
    }
    if (progress == 'modelo'){
      return <Modelo/>
    }
    if (progress == 'chamberlain'){
      return <Chamberlain/>
    }
    if (progress == 'liftmaster-email'){
      return <LiftmasterEmail/>
    }
    if (progress == 'google'){
      return <Google/>
    }
    if (progress == 'lyrical'){
      return <Lyrical/>
    }
  }

  render() {
    return (
      <div className="wrapper">
          <Header showProjects={this.showProjects.bind(this)} showAbout={this.showAbout.bind(this)} showContactUs={this.showContactUs.bind(this)}/>

          {this.PickView()}

      </div>
    );
  }
}

export default App;
