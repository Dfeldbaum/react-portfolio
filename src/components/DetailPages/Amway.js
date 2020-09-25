import React, { Component } from 'react';
import { TimelineLite } from 'gsap';

class Amway extends Component {

  constructor(props) {
    super(props);
    // reference to els
    this.projectTitle = null;
    this.projectSubTitle = null;
    this.projectCopy = null;
    // animation timeline
    this.timeline = new TimelineLite({paused: true});
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.timeline
    .set({}, {}, "+=.25")
    .to(this.projectTitle, .5, {x: 0, force3D: true})
    .to(this.projectSubTitle, .5, {x: 0, force3D: true}, '-=.25')
    .to(this.projectCopy, .5, {x: 0, force3D: true}, '-=.25')
    .play();
  }

  render() {
    console.log(this.props);

    return (
      <div className="project-detail-section">
        <div className="item text-container">
          <h1 ref={h1 => this.projectTitle = h1} className="text-container__title">Amway</h1>
          <h1 ref={h1 => this.projectSubTitle = h1} className="text-container__subtitle">Built With: HTML5, CSS3, JavaScript, Angular, Express/Node.js, Ruby/Sinatra</h1>
          <p ref={p => this.projectCopy = p} className="text-container__copy">Lyrical is a secure angular app that allows users to search, create, and save lyrics in one interface. Data is stored in relational mySQL tables and user authentication is secured with bCrypt. The Lyrical server side is built with Sinatra/Ruby and utilizes a RESTful API for user account and lyric data.</p>
        </div>

        <div class="item img-container">
          <img src="/../img/project-dlp-lyrical.png"/>
        </div>

      </div>
    );
  }
}

export default Amway;
