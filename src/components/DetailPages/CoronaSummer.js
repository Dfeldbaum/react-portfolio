import React, { Component } from 'react';
import { TimelineLite } from 'gsap';

class CoronaSummer extends Component {

  constructor(props) {
    super(props);
    // reference to els
    this.projectTitle = null;
    this.projectSubTitle = null;
    this.projectCopy = null;
    this.btn = null;
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
    .to(this.btn, .5, {x: 0, force3D: true}, '-=.25')
    .play();
  }

  render() {
    console.log(this.props);

    return (
      <div className="project-detail-section">
        <div className="item text-container">
          <h1 ref={h1 => this.projectTitle = h1} className="text-container__title">CoronaUSA.com</h1>
          <h1 ref={h1 => this.projectSubTitle = h1} className="text-container__subtitle">Built With: Meteor, React.js, SASS/CSS3</h1>
          <p ref={p => this.projectCopy = p} className="text-container__copy">From home page rebuilds to the 17-week Corona Summer sweepstakes promotion, I had the pleasure of building many interations of CoronaUSA.com. Built primarily in React and ES6 on Meteor, Corona USA is a constantly evolving web application that features a continually changing front end experiences. I was the full stack lead for Corona Summer 2018, front end lead for Corona Holiday 2018, and have built home page experiences for John Gruden and V Foundation promotions.</p>
          <a ref={a => this.btn = a} href="https://www.coronausa.com/" target="_blank" className="button">Visit Corona USA</a>
          

        </div>

        <div className="item img-container">
          <img src="/../img/project-dlp-corona-summer.jpg"/>
        </div>
      </div>
    );
  }
}

export default CoronaSummer;
