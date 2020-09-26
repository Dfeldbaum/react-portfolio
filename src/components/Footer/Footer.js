import React, { Component } from 'react';
import { TimelineLite } from 'gsap';

class Footer extends Component {

  constructor(props) {
    super(props);

    // reference to els
    this.copyright = null;
    // animation timeline
    this.timeline = new TimelineLite({paused: true});
  }

  componentDidMount() {
    this.timeline
    .set({}, {}, "+=1.5")
    .to(this.copyright, .5, {x: 0, force3D: true}, '-=.1')
    .play();
  }

  render() {
    return (
      <div className="footer">
        <div ref={div => this.copyright = div} className="footer__name-wrapper">
          <p>&#169; 2020 David Feldbaum</p>
        </div>
      </div>
    );
  }
}

export default Footer;
