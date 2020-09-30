import React, { Component } from 'react';
import { TimelineLite } from 'gsap';

class JJVentures extends Component {

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
          <h1 ref={h1 => this.projectTitle = h1} className="text-container__title">JJVentures.com</h1>
          <h1 ref={h1 => this.projectSubTitle = h1} className="text-container__subtitle">Built With: Wordpress, JavaScript, HTML5, SASS/CSS3</h1>
          <p ref={p => this.projectCopy = p} className="text-container__copy">As the sole developer for a multi-month J&J Ventures engagement, I was responsible for rebuilding and fixing all site page templates, creating reusuable global component blocks  (Gutenberg atomic blocks) and rehauling the front end environment of the codebase to enable more effective and efficent front end development. I was also responsible for all backend processes and maintenance, developer operations and deployment to upper environments and estimation of project tasks.</p>
          <a ref={a => this.btn = a} href="https://www.jjventures.com/" target="_blank" className="button">Visit J&J Ventures</a>
        </div>

        <div class="item img-container">
          <img src="/../img/project-dlp-jj-ventures.jpg"/>
        </div>

      </div>
    );
  }
}

export default JJVentures;
