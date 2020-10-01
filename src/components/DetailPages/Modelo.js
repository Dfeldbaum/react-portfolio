import React, { Component } from 'react';
import { TimelineLite } from 'gsap';

class Modelo extends Component {

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
          <h1 ref={h1 => this.projectTitle = h1} className="text-container__title">ModeloFootball.com</h1>
          <h1 ref={h1 => this.projectSubTitle = h1} className="text-container__subtitle">Meteor, HTML5, Bootstrap/CSS3</h1>
          <p ref={p => this.projectCopy = p} className="text-container__copy">Built in under 2 weeks, the ModeloFootball.com 2017 rebuild features a sweepstakes mechanism where users can submit gameday pictures in order to win an all-expense paid weekend trip to meet former NFL star, Tony Gonzalez. Modelo Football 2018 will be live in early August.</p>
        </div>

        <div class="item img-container">
          <img src="/../img/project-dlp-modelo.jpg"/>
        </div>

      </div>
    );
  }
}

export default Modelo;
