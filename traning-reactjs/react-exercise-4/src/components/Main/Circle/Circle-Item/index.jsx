import React, { Component } from 'react'

export default class Circle_Item extends Component {
  constructor(props) {
    super(props);
    let { value } = this.props;
    this.state = {
      value: value,
      status: false
    };

    this.stopCountDown = this.stopCountDown.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState((prevState) => ({
        value: prevState.value - 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  stopCountDown() {
    this.setState((prevState) => ({
      status: !prevState.status,
    }));
    clearInterval(this.timerId);
  }

  startCountDown() {
    this.setState((prevState) => ({
      status: !prevState.status,
    }));
    this.timerId = setInterval(() => {
      this.setState((prevState) => ({
        value: prevState.value - 1,
      }));
    }, 1000);
  }

  render() {
    const status = this.state.status;
    const value = this.state.value;
    let button;
    if (value === 0) {
      clearInterval(this.timerId);
    }
    if (status) {
      button = <Start onClick={this.startCountDown} />;
    } else {
      button = <Stop onClick={this.stopCountDown} />;
    }

    return (
      <div className="col-4 circle-item">
        <div className="mb-10">
          {button}
        </div>
        <div className="btn-circle" style={this.props.style}>
          <span className="contentNumber center">{value}</span>
        </div>
      </div>
    );
  }
}

function Start(props) {
  return (
    <button className="btn-action btn-blue" onClick={props.onClick}>
      Start
    </button>
  );
}

function Stop(props) {
  return (
    <button className="btn-action btn-red" onClick={props.onClick}>
      Stop
    </button>
  );
}
