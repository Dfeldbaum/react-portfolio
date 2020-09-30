import React, { Component } from 'react';
import { TimelineLite } from 'gsap';

class Chamberlain extends Component {

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
          <h1 ref={h1 => this.projectTitle = h1} className="text-container__title">Chamberlain.com</h1>
          <h1 ref={h1 => this.projectSubTitle = h1} className="text-container__subtitle">Meteor/Node.js, Prismic, HTML5, Bootstrap/CSS3,</h1>
          <p ref={p => this.projectCopy = p} className="text-container__copy">Both Liftmaster.com and Chamberlain.com builds were built in unison in local PatternLab environments, respectively. Components were built primarily with FlexBox in Bootstrap layouts. Personally built pages include product detail pages, trade shows/events landing pages, and search results pages. </p>
          <a ref={a => this.btn = a} href="https://www.chamberlain.com/" target="_blank" className="button">Visit Chamberlain</a>
        </div>

        <div class="item img-container">
          <img src="/../img/project-dlp-chamberlain.jpg"/>
        </div>

      </div>
    );
  }
}

export default Chamberlain;
