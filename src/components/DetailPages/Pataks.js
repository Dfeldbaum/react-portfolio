import React, { Component } from 'react';
import { TimelineLite } from 'gsap';

class Pataks extends Component {

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
          <h1 ref={h1 => this.projectTitle = h1} className="text-container__title">PataksUSA.com</h1>
          <h1 ref={h1 => this.projectSubTitle = h1} className="text-container__subtitle">Built With: HTML5, CSS3, Bootstrap, Meteor/Node.js, Prismic</h1>
          <p ref={p => this.projectCopy = p} className="text-container__copy">PataksUSA.com is a Meteor web application with a Prismic headless CMS integration to manage products and categorizaton across the web property. Created in under a month as part of a two man development team I was responsible for the entirety of Patak's front end, which features a fully responsive design, Slick.js product carousels and numerous product filtering mechanisms.</p>
          <a ref={a => this.btn = a} href="https://www.pataksusa.com/" target="_blank" className="button">Visit Pataks</a>
        </div>

        <div class="item img-container">
          <img src="/../img/project-dlp-pataks.jpg"/>
        </div>
      </div>
    );
  }
}

export default Pataks;
