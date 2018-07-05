import React, { Component } from 'react';

class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = { isHovered: false };
  }

  mouseEnter() {
    this.setState({isHovered:true})
  }
  mouseLeave() {
    this.setState({isHovered:false})
  }

  render() {

    console.log(this.props);

    return (

      <div className="projects-section">
        <div className="grid">
          <div className="item item1" onClick={this.props.showCoronaSummer} onMouseEnter={this.mouseEnter.bind(this)} onMouseLeave={this.mouseLeave.bind(this)}>
            <img src="http://placehold.it/800x800"/>
          </div>

          <div className="item item2">
            <img src="http://placehold.it/800x800"/>
          </div>

          <div className="item item3">
            <img src="http://placehold.it/800x800"/>
          </div>

          <div className="item item4">
            <img src="http://placehold.it/800x800"/>
          </div>

          <div className="item item5">
            <img src="http://placehold.it/800x800"/>
          </div>

          <div className="item item6">
            <a href="/about"><img src="http://placehold.it/800x800"/></a>
          </div>

          <div className="item item7">
            <img src="http://placehold.it/800x800"/>
          </div>

          <div className="item item8">
            <img src="http://placehold.it/800x800"/>
          </div>
        </div>
      </div>

    );
  }
}

export default Projects;
