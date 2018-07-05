import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="nav-wrapper">
          <ul className="nav-wrapper__list">
            <li onClick={this.props.showProjects}>WORK</li>
            <li>ABOUT</li>
            <li onClick={this.props.showContactUs}>CONTACT</li>
          </ul>

          <div className="nav-wrapper__name">
            <h1 onClick={this.props.showProjects}>DAVID FELDBAUM</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
