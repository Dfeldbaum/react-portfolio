import React, { Component } from 'react';

class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      isHovered1: false,
      isHovered2: false,
      isHovered3: false,
      isHovered4: false,
      isHovered5: false,
      isHovered6: false,
      isHovered7: false,
      isHovered8: false,
      isHovered9: false,
      isHovered10: false,
      isHovered11: false,
      isHovered12: false,
      isHovered13: false,
      isHovered14: false,
     };
  }

  componentDidUpdate() {
    console.log(this.props, 'this.props on update')
    console.log(this.state, 'this.state on update')
  }

  handleMouseEnter1 = () => {
    this.setState({
        isHovered1 : true
    });
  }

  handleMouseLeave1 = () => {
    this.setState({
        isHovered1 : false
    });
  }

  handleMouseEnter2 = () => {
    this.setState({
        isHovered2 : true
    });
  }

  handleMouseLeave2 = () => {
    this.setState({
        isHovered2 : false
    });
  }

  handleMouseEnter3 = () => {
    this.setState({
        isHovered3 : true
    });
  }

  handleMouseLeave3 = () => {
    this.setState({
        isHovered3 : false
    });
  }

  handleMouseEnter4 = () => {
    this.setState({
        isHovered4 : true
    });
  }

  handleMouseLeave4 = () => {
    this.setState({
        isHovered4 : false
    });
  }

  handleMouseEnter5 = () => {
    this.setState({
        isHovered5 : true
    });
  }

  handleMouseLeave5 = () => {
    this.setState({
        isHovered5 : false
    });
  }

  handleMouseEnter6 = () => {
    this.setState({
        isHovered6 : true
    });
  }

  handleMouseLeave6 = () => {
    this.setState({
        isHovered6 : false
    });
  }

  handleMouseEnter7 = () => {
    this.setState({
        isHovered7 : true
    });
  }

  handleMouseLeave7 = () => {
    this.setState({
        isHovered7 : false
    });
  }

  handleMouseEnter8 = () => {
    this.setState({
        isHovered8 : true
    });
  }

  handleMouseLeave8 = () => {
    this.setState({
        isHovered8 : false
    });
  }

  handleMouseEnter9 = () => {
    this.setState({
        isHovered9 : true
    });
  }

  handleMouseLeave9 = () => {
    this.setState({
        isHovered9 : false
    });
  }

  handleMouseEnter10 = () => {
    this.setState({
        isHovered10 : true
    });
  }

  handleMouseLeave10 = () => {
    this.setState({
        isHovered10 : false
    });
  }

  handleMouseEnter11 = () => {
    this.setState({
        isHovered11 : true
    });
  }

  handleMouseLeave11 = () => {
    this.setState({
        isHovered11 : false
    });
  }

  handleMouseEnter12 = () => {
    this.setState({
        isHovered12 : true
    });
  }

  handleMouseLeave12 = () => {
    this.setState({
        isHovered12 : false
    });
  }


  handleMouseEnter13 = () => {
    this.setState({
        isHovered13 : true
    });
  }

  handleMouseLeave13 = () => {
    this.setState({
        isHovered13 : false
    });
  }

  handleMouseEnter14 = () => {
    this.setState({
        isHovered14 : true
    });
  }

  handleMouseLeave14 = () => {
    this.setState({
        isHovered14 : false
    });
  }

  // mouseEnter() {
  //   this.setState({isHovered1:true})
  // }
  // mouseLeave() {
  //   this.setState({isHovered1:false})
  // }


  render() {
    console.log(this.props, 'props from render');
    const hoverState1 = this.state.isHovered1 ? "item--hover-active" : "item--hover-inactive";
    const hoverState2 = this.state.isHovered2 ? "item--hover-active" : "item--hover-inactive";
    const hoverState3 = this.state.isHovered3 ? "item--hover-active" : "item--hover-inactive";
    const hoverState4 = this.state.isHovered4 ? "item--hover-active" : "item--hover-inactive";
    const hoverState5 = this.state.isHovered5 ? "item--hover-active" : "item--hover-inactive";
    const hoverState6 = this.state.isHovered6 ? "item--hover-active" : "item--hover-inactive";
    const hoverState7 = this.state.isHovered7 ? "item--hover-active" : "item--hover-inactive";
    const hoverState8 = this.state.isHovered8 ? "item--hover-active" : "item--hover-inactive";
    const hoverState9 = this.state.isHovered9 ? "item--hover-active" : "item--hover-inactive";
    const hoverState10 = this.state.isHovered10 ? "item--hover-active" : "item--hover-inactive";
    const hoverState11 = this.state.isHovered11 ? "item--hover-active" : "item--hover-inactive";
    const hoverState12 = this.state.isHovered12 ? "item--hover-active" : "item--hover-inactive";
    const hoverState13 = this.state.isHovered13 ? "item--hover-active" : "item--hover-inactive";
    const hoverState14 = this.state.isHovered14 ? "item--hover-active" : "item--hover-inactive";

    return (

      <div className="projects-section">
        <div className="grid">
          <div className="item item1" onClick={this.props.showCoronaSummer} onMouseEnter={this.handleMouseEnter1} onMouseLeave={this.handleMouseLeave1}>
            <div className={"layer " + hoverState1}>
              <h3>VIEW <br /> PROJECT</h3>
            </div>
            <img src="http://placehold.it/800x800"/>
          </div>

          <div className="item item2" onClick={this.props.showPataks} onMouseEnter={this.handleMouseEnter2} onMouseLeave={this.handleMouseLeave2}>
            <div className={"layer " + hoverState2}>
              <h3>VIEW <br /> PROJECT</h3>
            </div>
            <img src="http://placehold.it/800x800"/>
          </div>

          <div className="item item3" onClick={this.props.showLiftmaster} onMouseEnter={this.handleMouseEnter3} onMouseLeave={this.handleMouseLeave3}>
            <div className={"layer " + hoverState3}>
              <h3>VIEW <br /> PROJECT</h3>
            </div>
            <img src="http://placehold.it/800x800"/>
          </div>

          <div className="item item4" onClick={this.props.showModelo} onMouseEnter={this.handleMouseEnter4} onMouseLeave={this.handleMouseLeave4}>
            <div className={"layer " + hoverState4}>
              <h3>VIEW <br /> PROJECT</h3>
            </div>
            <img src="http://placehold.it/800x800"/>
          </div>
          
          <div className="item item5" onClick={this.props.showChamberlain} onMouseEnter={this.handleMouseEnter5} onMouseLeave={this.handleMouseLeave5}>
            <div className={"layer " + hoverState5}>
              <h3>VIEW <br /> PROJECT</h3>
            </div>
            <img src="http://placehold.it/800x800"/>
          </div>
          
          <div className="item item6" onClick={this.props.showLiftmasterEmail} onMouseEnter={this.handleMouseEnter6} onMouseLeave={this.handleMouseLeave6}>
            <div className={"layer " + hoverState6}>
              <h3>VIEW <br /> PROJECT</h3>
            </div>
            <img src="http://placehold.it/800x800"/>
          </div>
          
          <div className="item item7" onClick={this.props.showGoogle} onMouseEnter={this.handleMouseEnter7} onMouseLeave={this.handleMouseLeave7}>
            <div className={"layer " + hoverState7}>
              <h3>VIEW <br /> PROJECT</h3>
            </div>
            <img src="http://placehold.it/800x800"/>
          </div>
          
          <div className="item item8" onClick={this.props.showLyrical} onMouseEnter={this.handleMouseEnter8} onMouseLeave={this.handleMouseLeave8}>
            <div className={"layer " + hoverState8}>
              <h3>VIEW <br /> PROJECT</h3>
            </div>
            <img src="http://placehold.it/800x800"/>
          </div>
          
          <div className="item item9" onClick={this.props.showAmway} onMouseEnter={this.handleMouseEnter9} onMouseLeave={this.handleMouseLeave9}>
            <div className={"layer " + hoverState9}>
              <h3>VIEW <br /> PROJECT</h3>
            </div>
            <img src="http://placehold.it/800x800"/>
          </div>
          
          <div className="item item10" onClick={this.props.showEaton} onMouseEnter={this.handleMouseEnter10} onMouseLeave={this.handleMouseLeave10}>
            <div className={"layer " + hoverState10}>
              <h3>VIEW <br /> PROJECT</h3>
            </div>
            <img src="http://placehold.it/800x800"/>
          </div>
          
          <div className="item item11" onClick={this.props.showTTI} onMouseEnter={this.handleMouseEnter11} onMouseLeave={this.handleMouseLeave11}>
            <div className={"layer " + hoverState11}>
              <h3>VIEW <br /> PROJECT</h3>
            </div>
            <img src="http://placehold.it/800x800"/>
          </div>
          
          <div className="item item12" onClick={this.props.showCalLottery} onMouseEnter={this.handleMouseEnter12} onMouseLeave={this.handleMouseLeave12}>
            <div className={"layer " + hoverState12}>
              <h3>VIEW <br /> PROJECT</h3>
            </div>
            <img src="http://placehold.it/800x800"/>
          </div>
          
          <div className="item item13" onClick={this.props.showNYU} onMouseEnter={this.handleMouseEnter13} onMouseLeave={this.handleMouseLeave13}>
            <div className={"layer " + hoverState13}>
              <h3>VIEW <br /> PROJECT</h3>
            </div>
            <img src="http://placehold.it/800x800"/>
          </div>
          
          <div className="item item14" onClick={this.props.showJJVentures} onMouseEnter={this.handleMouseEnter14} onMouseLeave={this.handleMouseLeave14}>
            <div className={"layer " + hoverState14}>
              <h3>VIEW <br /> PROJECT</h3>
            </div>
            <img src="http://placehold.it/800x800"/>
          </div>
        </div>
      </div>

    );
  }
}

export default Projects;
