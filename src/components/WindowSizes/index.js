import React, { Component } from 'react';

class WindowSizes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentHeight: window.innerHeight,
      currentWidth: window.innerWidth,
    };
    window.onresize = () => {
      this.setState({
        currentHeight: window.innerHeight,
        currentWidth: window.innerWidth,
      });
    };
  }
  render() {
    const { currentHeight, currentWidth } = this.state;
    return (
      <div>
        <p>current width:{currentWidth}</p>
        <p>current height:{currentHeight}</p>
      </div>
    );
  }
}

export default WindowSizes;
