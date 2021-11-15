import { Component } from 'react';

class Ciao extends Component {
  constructor(props) {
    super(props);
    this.state = { isHi: true };
  }
  render() {
    const { name } = this.props;
    const { isHi } = this.state;
    return (
      <>
        <h2>
          {isHi ? 'Hi' : 'Bye'}, {name}!
        </h2>
        <button
          onClick={() => {
            this.setState({ isHi: !isHi });
          }}
        >
          Ciao
        </button>
      </>
    );
  }
}

export default Ciao;
