import React, { Component } from 'react';
import { TimelineLite } from 'gsap';

class Header extends Component {

  constructor(props) {
    super(props);

    // reference to els
    this.headerEl = null;
    this.nav = null;
    this.subtitle = null;
    // animation timeline
    this.timeline = new TimelineLite({paused: true});
  }

  componentDidMount() {
    this.timeline
    .set({}, {}, "+=.5")
    .to([this.headerEl, this.nav], 1, {autoAlpha:1, y: 20, force3D: true})
    .to(this.subtitle, .5, {x: 0, force3D: true}, '-=.1')
    .play();
  }

  render() {
    return (
      <div className="header">
        <div className="nav-wrapper">
          <ul ref={ul => this.nav = ul} className="nav-wrapper__list">
            <li onClick={this.props.showProjects}>Work</li>
            <li onClick={this.props.showAbout}>About</li>
            <li onClick={this.props.showContact}>Contact</li>
          </ul>

          <div ref={div => this.headerEl = div} className="nav-wrapper__name">
            <h1 onClick={this.props.showProjects}>David Feldbaum</h1>
            <h3 ref={h3 => this.subtitle = h3}>Senior Front End Developer</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
