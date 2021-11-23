import { Component } from 'react';
import styles from './Ciao.module.scss';
import PropTypes from 'prop-types';

/**
 *
 * @param {*} props
 * @param {string} props.name
 * @param {number} props.id
 */
class Ciao extends Component {
  constructor(props) {
    super(props);
    this.state = { isHi: true };
  }
  buttonOnClickHandler = () => {
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
            onClick={this.buttonOnClickHandler}
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

Ciao.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
export default Ciao;
