import React, { Component } from 'react';

class WindowSizes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentHeight: window.innerHeight,
      currentWidth: window.innerWidth,
    };
  }
  onStateChange = () => {
    this.setState({
      currentHeight: window.innerHeight,
      currentWidth: window.innerWidth,
    });
  };
  componentDidMount() {
    window.addEventListener('resize', this.onStateChange);
  }
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.onStateChange);
  };
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
