import React, { Component } from 'react';
import { TimelineLite } from 'gsap';

class Hyatt extends Component {

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
          <h1 ref={h1 => this.projectTitle = h1} className="text-container__title">World.Hyatt.com</h1>
          <h1 ref={h1 => this.projectSubTitle = h1} className="text-container__subtitle">AEM, Vue, SASS/CSS3</h1>
          <p ref={p => this.projectCopy = p} className="text-container__copy">After a lengthy internal interviewing process, I was selected as ICF’s on-site front end developer at Hyatt’s corporate headquarters in downtown Chicago as part of a multi-month engagement for updates to Hyatt’s World of Hyatt loyalty program website. At Hyatt, I was primarily tasked with rebuilding their awards search mechanism, a custom AEM component of the site where users can easily search hotel rewards by location input. I was also tasked with various backlog updates to existing AEM components.</p>
          <a ref={a => this.btn = a} href="https://world.hyatt.com/content/gp/en/rewards/search-awards-destinations.html" target="_blank" className="button">Visit World of Hyatt</a>
        </div>

        <div class="item img-container">
          <img src="/../img/project-dlp-hyatt.jpg"/>
        </div>

      </div>
    );
  }
}

export default Hyatt;
