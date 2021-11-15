import { Component } from 'react';

class Ciao extends Component {
  constructor(props) {
    super(props);
    this.state = { isHi: true };
  }
  buttonOnCLickHandler = () => {
    const { isHi } = this.state;
    this.setState({ isHi: !isHi });
  };
  render() {
    const { name,id } = this.props;
    const { isHi } = this.state;
    if (isHi)
      return (
        <>
          <h2>{id}) Hi, {name}!</h2>
          <button onClick={this.buttonOnCLickHandler}>Ciao</button>
        </>
      );
    return (
      <>
        <h2>{id}) Bye, {name}!</h2>
      </>
    );
  }
}

export default Ciao;
