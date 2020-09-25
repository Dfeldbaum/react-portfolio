import React, { Component } from 'react';
import { TimelineLite } from 'gsap';

class LiftmasterEmail extends Component {

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
          <h1 ref={h1 => this.projectTitle = h1} className="text-container__title">Liftmaster Responsive HTML Emails</h1>
          <h1 ref={h1 => this.projectSubTitle = h1} className="text-container__subtitle">Built With: HTML5, CSS3, Foundation</h1>
          <p ref={p => this.projectCopy = p} className="text-container__copy">I was fortunate to build numerous responsive emails for various Liftmaster email campaigns - ranging from gate openers to garage doors. All emails for Liftmaster were written with the Foundation for Email framework according to best practice HTML email standards and are full responsive to the broad array of email clients.</p>
        </div>

        <div class="item img-container">
          <img src="/../img/project-dlp-liftmaster-email.jpg"/>
        </div>
      </div>
    );
  }
}

export default LiftmasterEmail;
