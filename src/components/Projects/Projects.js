import React, { Component } from 'react';
import { TimelineLite } from 'gsap';


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

    // reference to els
    this.carot1 = null;
    this.carot2 = null;
    this.carot3 = null;
    this.carot4 = null;
    this.carot5 = null;
    this.carot6 = null;
    this.carot7 = null;
    this.carot8 = null;
    this.carot9 = null;
    this.carot10 = null;
    this.carot11 = null;
    this.carot12 = null;
    this.carot13 = null;
    this.carot14 = null;
    // animation timeline
    this.timeline1 = new TimelineLite({paused: true});
    this.timeline2 = new TimelineLite({paused: true});
    this.timeline3 = new TimelineLite({paused: true});
    this.timeline4 = new TimelineLite({paused: true});
    this.timeline5 = new TimelineLite({paused: true});
    this.timeline6 = new TimelineLite({paused: true});
    this.timeline7 = new TimelineLite({paused: true});
    this.timeline8 = new TimelineLite({paused: true});
    this.timeline9 = new TimelineLite({paused: true});
    this.timeline10 = new TimelineLite({paused: true});
    this.timeline11 = new TimelineLite({paused: true});
    this.timeline12 = new TimelineLite({paused: true});
    this.timeline13 = new TimelineLite({paused: true});
    this.timeline14 = new TimelineLite({paused: true});
  }

  componentDidUpdate() {
    console.log(this.props, 'this.props on update')
    console.log(this.state, 'this.state on update')
  }

  startBounceAnimation1 = () => {
    this.timeline1
    .set({}, {}, "+=.75")
    .to(this.carot1, 0.2, {x: 5, force3D: true})
    .to(this.carot1, 0.2, {x: 0, force3D: true})
    .to(this.carot1, 0.2, {x: 5, force3D: true})
    .to(this.carot1, 0.2, {x: 0, force3D: true})
    .play();
  }

  startBounceAnimation2 = () => {
    this.timeline2
    .set({}, {}, "+=.75")
    .to(this.carot2, 0.2, {x: 5, force3D: true})
    .to(this.carot2, 0.2, {x: 0, force3D: true})
    .to(this.carot2, 0.2, {x: 5, force3D: true})
    .to(this.carot2, 0.2, {x: 0, force3D: true})
    .play();
  }

  startBounceAnimation3 = () => {
    this.timeline3
    .set({}, {}, "+=.75")
    .to(this.carot3, 0.2, {x: 5, force3D: true})
    .to(this.carot3, 0.2, {x: 0, force3D: true})
    .to(this.carot3, 0.2, {x: 5, force3D: true})
    .to(this.carot3, 0.2, {x: 0, force3D: true})
    .play();
  }

  startBounceAnimation4 = () => {
    this.timeline4
    .set({}, {}, "+=.75")
    .to(this.carot4, 0.2, {x: 5, force3D: true})
    .to(this.carot4, 0.2, {x: 0, force3D: true})
    .to(this.carot4, 0.2, {x: 5, force3D: true})
    .to(this.carot4, 0.2, {x: 0, force3D: true})
    .play();
  }

  startBounceAnimation5 = () => {
    this.timeline5
    .set({}, {}, "+=.75")
    .to(this.carot5, 0.2, {x: 5, force3D: true})
    .to(this.carot5, 0.2, {x: 0, force3D: true})
    .to(this.carot5, 0.2, {x: 5, force3D: true})
    .to(this.carot5, 0.2, {x: 0, force3D: true})
    .play();
  }

  startBounceAnimation6 = () => {
    this.timeline6
    .set({}, {}, "+=.75")
    .to(this.carot6, 0.2, {x: 5, force3D: true})
    .to(this.carot6, 0.2, {x: 0, force3D: true})
    .to(this.carot6, 0.2, {x: 5, force3D: true})
    .to(this.carot6, 0.2, {x: 0, force3D: true})
    .play();
  }

  startBounceAnimation7 = () => {
    this.timeline7
    .set({}, {}, "+=.75")
    .to(this.carot7, 0.2, {x: 5, force3D: true})
    .to(this.carot7, 0.2, {x: 0, force3D: true})
    .to(this.carot7, 0.2, {x: 5, force3D: true})
    .to(this.carot7, 0.2, {x: 0, force3D: true})
    .play();
  }

  startBounceAnimation8 = () => {
    this.timeline8
    .set({}, {}, "+=.75")
    .to(this.carot8, 0.2, {x: 5, force3D: true})
    .to(this.carot8, 0.2, {x: 0, force3D: true})
    .to(this.carot8, 0.2, {x: 5, force3D: true})
    .to(this.carot8, 0.2, {x: 0, force3D: true})
    .play();
  }

  startBounceAnimation9 = () => {
    this.timeline9
    .set({}, {}, "+=.75")
    .to(this.carot9, 0.2, {x: 5, force3D: true})
    .to(this.carot9, 0.2, {x: 0, force3D: true})
    .to(this.carot9, 0.2, {x: 5, force3D: true})
    .to(this.carot9, 0.2, {x: 0, force3D: true})
    .play();
  }

  startBounceAnimation10 = () => {
    this.timeline10
    .set({}, {}, "+=.75")
    .to(this.carot10, 0.2, {x: 5, force3D: true})
    .to(this.carot10, 0.2, {x: 0, force3D: true})
    .to(this.carot10, 0.2, {x: 5, force3D: true})
    .to(this.carot10, 0.2, {x: 0, force3D: true})
    .play();
  }


  startBounceAnimation11 = () => {
    this.timeline11
    .set({}, {}, "+=.75")
    .to(this.carot11, 0.2, {x: 5, force3D: true})
    .to(this.carot11, 0.2, {x: 0, force3D: true})
    .to(this.carot11, 0.2, {x: 5, force3D: true})
    .to(this.carot11, 0.2, {x: 0, force3D: true})
    .play();
  }

  startBounceAnimation12 = () => {
    this.timeline12
    .set({}, {}, "+=.75")
    .to(this.carot12, 0.2, {x: 5, force3D: true})
    .to(this.carot12, 0.2, {x: 0, force3D: true})
    .to(this.carot12, 0.2, {x: 5, force3D: true})
    .to(this.carot12, 0.2, {x: 0, force3D: true})
    .play();
  }

  startBounceAnimation13 = () => {
    this.timeline13
    .set({}, {}, "+=.75")
    .to(this.carot13, 0.2, {x: 5, force3D: true})
    .to(this.carot13, 0.2, {x: 0, force3D: true})
    .to(this.carot13, 0.2, {x: 5, force3D: true})
    .to(this.carot13, 0.2, {x: 0, force3D: true})
    .play();
  }

  startBounceAnimation14 = () => {
    this.timeline14
    .set({}, {}, "+=.75")
    .to(this.carot14, 0.2, {x: 5, force3D: true})
    .to(this.carot14, 0.2, {x: 0, force3D: true})
    .to(this.carot14, 0.2, {x: 5, force3D: true})
    .to(this.carot14, 0.2, {x: 0, force3D: true})
    .play();
  }

  handleMouseEnter1 = () => {
    this.setState({
        isHovered1 : true
    });

    this.startBounceAnimation1();
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

    this.startBounceAnimation2();
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

    this.startBounceAnimation3();
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

    this.startBounceAnimation4();
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

    this.startBounceAnimation5();
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

    this.startBounceAnimation6();
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

    this.startBounceAnimation7();
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

    this.startBounceAnimation8();
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

    this.startBounceAnimation9();
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

    this.startBounceAnimation10();
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

    this.startBounceAnimation11();
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

    this.startBounceAnimation12();
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

    this.startBounceAnimation13();
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

    this.startBounceAnimation14();
  }

  handleMouseLeave14 = () => {
    this.setState({
        isHovered14 : false
    });
  }

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
              <h3>View Project <i ref={i => this.carot1 = i} className="layer__icon fa fa-angle-right"></i></h3>
            </div>
            <img src="http://placehold.it/800x800"/>
          </div>

          <div className="item item2" onClick={this.props.showPataks} onMouseEnter={this.handleMouseEnter2} onMouseLeave={this.handleMouseLeave2}>
            <div className={"layer " + hoverState2}>
              <h3>View Project <i ref={i => this.carot2 = i} className="layer__icon fa fa-angle-right"></i></h3>
            </div>
            <img src="http://placehold.it/800x800"/>
          </div>

          <div className="item item3" onClick={this.props.showLiftmaster} onMouseEnter={this.handleMouseEnter3} onMouseLeave={this.handleMouseLeave3}>
            <div className={"layer " + hoverState3}>
              <h3>View Project <i ref={i => this.carot3 = i} className="layer__icon fa fa-angle-right"></i></h3>
            </div>
            <img src="http://placehold.it/800x800"/>
          </div>

          <div className="item item4" onClick={this.props.showModelo} onMouseEnter={this.handleMouseEnter4} onMouseLeave={this.handleMouseLeave4}>
            <div className={"layer " + hoverState4}>
              <h3>View Project <i ref={i => this.carot4 = i} className="layer__icon fa fa-angle-right"></i></h3>
            </div>
            <img src="http://placehold.it/800x800"/>
          </div>
          
          <div className="item item5" onClick={this.props.showChamberlain} onMouseEnter={this.handleMouseEnter5} onMouseLeave={this.handleMouseLeave5}>
            <div className={"layer " + hoverState5}>
              <h3>View Project <i ref={i => this.carot5 = i} className="layer__icon fa fa-angle-right"></i></h3>
            </div>
            <img src="http://placehold.it/800x800"/>
          </div>
          
          <div className="item item6" onClick={this.props.showLiftmasterEmail} onMouseEnter={this.handleMouseEnter6} onMouseLeave={this.handleMouseLeave6}>
            <div className={"layer " + hoverState6}>
              <h3>View Project <i ref={i => this.carot6 = i} className="layer__icon fa fa-angle-right"></i></h3>
            </div>
            <img src="http://placehold.it/800x800"/>
          </div>
          
          <div className="item item7" onClick={this.props.showGoogle} onMouseEnter={this.handleMouseEnter7} onMouseLeave={this.handleMouseLeave7}>
            <div className={"layer " + hoverState7}>
              <h3>View Project <i ref={i => this.carot7 = i} className="layer__icon fa fa-angle-right"></i></h3>
            </div>
            <img src="http://placehold.it/800x800"/>
          </div>
          
          <div className="item item8" onClick={this.props.showLyrical} onMouseEnter={this.handleMouseEnter8} onMouseLeave={this.handleMouseLeave8}>
            <div className={"layer " + hoverState8}>
              <h3>View Project <i ref={i => this.carot8 = i} className="layer__icon fa fa-angle-right"></i></h3>
            </div>
            <img src="http://placehold.it/800x800"/>
          </div>
          
          <div className="item item9" onClick={this.props.showAmway} onMouseEnter={this.handleMouseEnter9} onMouseLeave={this.handleMouseLeave9}>
            <div className={"layer " + hoverState9}>
              <h3>View Project <i ref={i => this.carot9 = i} className="layer__icon fa fa-angle-right"></i></h3>
            </div>
            <img src="http://placehold.it/800x800"/>
          </div>
          
          <div className="item item10" onClick={this.props.showEaton} onMouseEnter={this.handleMouseEnter10} onMouseLeave={this.handleMouseLeave10}>
            <div className={"layer " + hoverState10}>
              <h3>View Project <i ref={i => this.carot10 = i} className="layer__icon fa fa-angle-right"></i></h3>
            </div>
            <img src="http://placehold.it/800x800"/>
          </div>
          
          <div className="item item11" onClick={this.props.showTTI} onMouseEnter={this.handleMouseEnter11} onMouseLeave={this.handleMouseLeave11}>
            <div className={"layer " + hoverState11}>
              <h3>View Project <i ref={i => this.carot11 = i} className="layer__icon fa fa-angle-right"></i></h3>
            </div>
            <img src="http://placehold.it/800x800"/>
          </div>
          
          <div className="item item12" onClick={this.props.showCalLottery} onMouseEnter={this.handleMouseEnter12} onMouseLeave={this.handleMouseLeave12}>
            <div className={"layer " + hoverState12}>
              <h3>View Project <i ref={i => this.carot12 = i} className="layer__icon fa fa-angle-right"></i></h3>
            </div>
            <img src="http://placehold.it/800x800"/>
          </div>
          
          <div className="item item13" onClick={this.props.showNYU} onMouseEnter={this.handleMouseEnter13} onMouseLeave={this.handleMouseLeave13}>
            <div className={"layer " + hoverState13}>
              <h3>View Project <i ref={i => this.carot13 = i} className="layer__icon fa fa-angle-right"></i></h3>
            </div>
            <img src="http://placehold.it/800x800"/>
          </div>
          
          <div className="item item14" onClick={this.props.showJJVentures} onMouseEnter={this.handleMouseEnter14} onMouseLeave={this.handleMouseLeave14}>
            <div className={"layer " + hoverState14}>
              <h3>View Project <i ref={i => this.carot14 = i} className="layer__icon fa fa-angle-right"></i></h3>
            </div>
            <img src="http://placehold.it/800x800"/>
          </div>
        </div>
      </div>

    );
  }
}

export default Projects;
