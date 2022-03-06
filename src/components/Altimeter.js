import React from 'react';

import Flag from './Flag';
import Needle from './Needle';
import Bug from './Bug';

import scale from '../assets/radaltback.png';
import cover from '../assets/radaltcover.png';


let altExceedBug = false;
let altRecedeBug = false;
let lightOn = false;


function CoverLight(props) {

  if (altExceedBug === false) {
    if (props.powVal) {
      if ((props.altVal - props.bugVal) > 0) {
        altExceedBug = true
        console.log("AltExceedBug " + altExceedBug + ", altVal " + props.altVal + ", bugVal " + props.bugVal)
      }
    }
  }
  else {
    if (altRecedeBug === false) {
      if (props.powVal) {
        if ((props.altVal - props.bugVal) < 0) {
          altRecedeBug = true
          console.log("altRecedeBug " + altRecedeBug + ", altVal " + props.altVal + ", bugVal " + props.bugVal)
        }
      }
    }
  }

  if (altExceedBug) {
    if (altRecedeBug) {
      lightOn = true;
    }
    else {
      lightOn = false
    }
  }

  return (
    <span class={lightOn ? "circleon" : "circleoff"}></span>
  );
}


class Altimeter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      powerOn: false,
      altitude: 0,
      bug: 0
    };
  }

  handlePowerOnClick() {
    this.setState(state => ({
      powerOn: !state.powerOn
    }));
    if (this.state.powerOn === true) {
      altExceedBug = false;
      altRecedeBug = false;
      lightOn = false
    }

  }

  handleAltChange(event) {
    this.setState(state => ({
      altitude: event.target.value,
    }));
  }

  handleBugChange(event) {
    this.setState({
      bug: event.target.value
    });

  }

  render() {
    return (
      <div>
        <h1 style={{ fontSize: 43, display: 'flex', justifyContent: 'center' }}>Radar Altimeter</h1>
        <div style={{ display: '-webkit-inline-flex', justifyContent: 'center', alignItems: 'baseline', height: '80vh' }}>
          <div class="guage" >
            <img src={scale} class="scale" alt="scale" />
            <Needle altVal={this.state.altitude} powVal={this.state.powerOn} />
            <Bug bugVal={this.state.bug} />
            <Flag poweron={this.state.powerOn} />
            <img src={cover} class="scaleobjects" alt="cover" />
            <CoverLight altVal={this.state.altitude} bugVal={this.state.bug} powVal={this.state.powerOn} />

          </div>

          <div class="controls" style={{ fontSize: 25 }}>
            Altitude: <input type="range" min="0" max="1500" step="1" defaultValue={this.state.altitude} onChange={(e) => this.handleAltChange(e)} /><span>{this.state.altitude}</span>
            <br />
            Bug: <input type="range" min="0" max="1500" step="1" defaultValue={this.state.bug} onChange={(e) => this.handleBugChange(e)} /><span>{this.state.bug}</span>
            <br />
            Has power: <input type="checkbox" onChange={() => this.handlePowerOnClick()} />
          </div>
        </div>
      </div>
    );
  }
}

export default Altimeter;