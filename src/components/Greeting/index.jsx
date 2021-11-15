import { Component } from 'react';

class Greeting extends Component {
  render() {
    const { name, prefix } = this.props;
    return (
      <h2>
        {prefix} {name}!
      </h2>
    );
  }
}

export default Greeting;
