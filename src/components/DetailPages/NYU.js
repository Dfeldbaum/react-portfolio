import React, { Component } from 'react';
import { TimelineLite } from 'gsap';

class NYU extends Component {

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
          <h1 ref={h1 => this.projectTitle = h1} className="text-container__title">NYU College of Arts of Sciences</h1>
          <h1 ref={h1 => this.projectSubTitle = h1} className="text-container__subtitle">Built With: Webpack, JavaScript, HTML5, SASS/CSS3</h1>
          <p ref={p => this.projectCopy = p} className="text-container__copy">In August of 2019, working as part of a two-person front end development team we shared responsibilities for the development of an interactive College of Arts and Sciences landing page. My role included the creation of the user interface and styles along with the programming of a animating background on user scroll. We created the landing page in a Webpack app and delivered to the AEM implementation team.</p>
        </div>

        <div class="item img-container">
          <img src="/../img/project-dlp-nyu.jpg"/>
        </div>

      </div>
    );
  }
}

export default NYU;
