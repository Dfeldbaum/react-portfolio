import React, { Component } from 'react';

class Google extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    console.log(this.props);

    return (

      <div className="project-detail-section">

        <div className="item text-container">
          <h1 className="text-container__title">Google Animated HTML5 Banners</h1>
          <h1 className="text-container__subtitle"><span>Built With: </span>HTML5, CSS3, ReactJS</h1>
          <p className="text-container__copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null</p>
        </div>

        <div class="item img-container">
          <img src="http://placehold.it/1500x1000"/>
        </div>

      </div>
    );
  }
}

export default Google;
