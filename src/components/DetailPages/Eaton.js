import React, { Component } from 'react';
import { TimelineLite } from 'gsap';

class Eaton extends Component {

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
          <h1 ref={h1 => this.projectTitle = h1} className="text-container__title">Eaton.com</h1>
          <h1 ref={h1 => this.projectSubTitle = h1} className="text-container__subtitle">Built With: AEM, JavaScript, HTML5, SASS/CSS3</h1>
          <p ref={p => this.projectCopy = p} className="text-container__copy">For little over a year, I led the front end development team as part of ICF Next’s engagement with Eaton Corporation, a global power management company. Along with daily development obligations, I was responsible for management of ICF Next front end developers on the project, estimation of front end stories/tasks, demonstration of completed work and front end development communication with internal Eaton stakeholders and ICF Next teammates. Completed deliverables include sitewide AEM component builds and enhancements (custom and out-of-the-box components), style guide implementation and the recreation of 4 popular subdomain tools as AEM components on the primary domain.</p>
          <a ref={a => this.btn = a} href="https://www.eaton.com/us/en-us.html" target="_blank" className="button">Visit Eaton</a>
        </div>

        <div class="item img-container">
          <img src="/../img/project-dlp-lyrical.png"/>
        </div>

      </div>
    );
  }
}

export default Eaton;
