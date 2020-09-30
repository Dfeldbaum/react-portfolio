import React, { Component } from 'react';
import { TimelineLite } from 'gsap';

class CalLottery extends Component {

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
          <h1 ref={h1 => this.projectTitle = h1} className="text-container__title">California State Lottery</h1>
          <h1 ref={h1 => this.projectSubTitle = h1} className="text-container__subtitle">Sitecore, React, Redux, SASS/CSS3</h1>
          <p ref={p => this.projectCopy = p} className="text-container__copy">As part of a large ICF Next team, I was a co-lead front end developer for the rebuild of the California State Lottery’s Scratchers landing page and Scratchers detail page. I was personally responsible for the creation of the Sitecore codebase’s first React app and Redux implementation, which included a highly-efficient data store tied to CSL API endpoints to pass data to custom React components used on Scratchers pages.</p>
          <a ref={a => this.btn = a} href="https://www.calottery.com/scratchers" target="_blank" className="button">Visit CSL</a>
        </div>

        <div class="item img-container">
          <img src="/../img/project-dlp-csl.jpg"/>
        </div>

      </div>
    );
  }
}

export default CalLottery;
