import React, { Component } from 'react';
import styles from './SignInForm.module.css';

const initialValues = {
  email: '',
  pwd: '',
  emailValid: true,
  pwdValid: true,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialValues };
  }

  handleInput = ({ target: { name, value } }) =>
    this.setState({
      [name]: value,
      [`${name}Valid`]: !value.includes(' '),
    });

  handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    this.setState({ ...initialValues });
  };

  render() {
    function cx(object) {
      return Object.entries(object)
        .filter(([classsName, condition]) => condition)
        .map(([classsName, condition]) => classsName)
        .join(' ');
    }
    const { email, pwd, emailValid, pwdValid } = this.state;

    const emailClassName = cx({
      [styles.input]: true,
      [styles.invalid]: !emailValid,
    });

    if (!emailValid) emailClassName.push(styles.invalid);
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          className={emailClassName}
          type="text"
          value={email}
          name="email"
          placeholder="email"
          onChange={this.handleInput}
        />
        <input
          className={styles.input}
          type="password"
          name="pwd"
          value={pwd}
          placeholder="password"
          onChange={this.handleInput}
        />
        <input
          className={styles.submit}
          type="submit"
          value="Sign In"
        />
      </form>
    );
  }
}

export default SignInForm;
