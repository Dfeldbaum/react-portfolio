import React, { Component } from 'react';
import { TimelineLite } from 'gsap';

class Google extends Component {

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
          <h1 ref={h1 => this.projectTitle = h1} className="text-container__title">Google Animated Banners</h1>
          <h1 ref={h1 => this.projectSubTitle = h1} className="text-container__subtitle">HTML5, CSS3, JavaScript, GSAP</h1>
          <p ref={p => this.projectCopy = p} className="text-container__copy">Utilizing the power of Greensock Animation Platform (GSAP), I've built animated HTML5/JavaScript banners on behalf of the Google and it Google Cloud brand. Banners of varying dimensions are built in a Express/Node.js environment to be served on Google's DoubleClick Network.</p>
        </div>

        <div class="item img-container">
          <img src="/../img/project-dlp-google.jpg"/>
        </div>

      </div>
    );
  }
}

export default Google;
