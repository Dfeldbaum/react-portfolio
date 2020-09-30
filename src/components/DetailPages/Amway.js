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
          <h1 ref={h1 => this.projectTitle = h1} className="text-container__title">Amway MyBiz</h1>
          <h1 ref={h1 => this.projectSubTitle = h1} className="text-container__subtitle">Built With: Polymer, Redux, HTML5, SASS/CSS3</h1>
          <p ref={p => this.projectCopy = p} className="text-container__copy">As part of a dedicated ICF Next front end team, I worked on Amway’s MyBiz internal user platform various backlog tickets. I had the responsibility of refactoring, updating and debugging several MyBiz components in addition to various reusable core components across the platform. Additionally, I utilized Tealium’s Tag Management System alongside internal Amway’s stakeholders to tag user events across the site for site analytics.</p>
        </div>

        <div class="item img-container">
          <img src="/../img/project-dlp-amway.jpg"/>
        </div>

      </div>
    );
  }
}

export default Amway;
