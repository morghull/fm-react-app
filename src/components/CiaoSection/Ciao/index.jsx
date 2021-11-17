import { Component } from 'react';
import styles from './ciao.module.css';

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
    const { name, id } = this.props;
    const { isHi } = this.state;
    if (isHi)
      return (
        <>
          <h2 className={styles.container}>
            {id}) Hi, {name}!
          </h2>
          <button
            className={styles.btn}
            onClick={this.buttonOnCLickHandler}
          >
            Ciao
          </button>
        </>
      );
    return (
      <>
        <h2>
          {id}) Bye, {name}!
        </h2>
      </>
    );
  }
}

export default Ciao;
