import React, { Component } from 'react';
import { TimelineLite } from 'gsap';

class TTI extends Component {

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
          <h1 ref={h1 => this.projectTitle = h1} className="text-container__title">TTI.com</h1>
          <h1 ref={h1 => this.projectSubTitle = h1} className="text-container__subtitle">Built With: HTML5, CSS3, JavaScript, Angular, Express/Node.js, Ruby/Sinatra</h1>
          <p ref={p => this.projectCopy = p} className="text-container__copy">My first AEM project as a lead front end developer, TTI was an enriching client augmentation project during the winter of 2019. Working under the direction of TTI’s digital staff, I was tasked with building the front end interface and primary functionality of several internal intranet tool as the styles refactoring for a majority of the codebase. I was also tasked with front end development updates to pre-existing custom AEM components and a rebuild of their primary product detail pages.</p>
          <a ref={a => this.btn = a} href="https://www.tti.com/content/ttiinc/en.html" target="_blank" className="button">Visit TTI</a>
        </div>

        <div class="item img-container">
          <img src="/../img/project-dlp-lyrical.png"/>
        </div>

      </div>
    );
  }
}

export default TTI;
