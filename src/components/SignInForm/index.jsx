import React, { Component } from 'react';
import styles from './SignInForm.module.css';

const initialValues = {
  email: '',
  pwd: '',
  emailValid: false,
  pwdValid: false,
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
    const { email, pwd, emailValid, pwdValid } = this.state;
    const emailClassName = `${styles.input} ${
      emailValid ? styles.valid : styles.invalid
    }`;
    const pwdlClassName = `${styles.input} ${
      pwdValid ? styles.valid : styles.invalid
    }`;
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
          className={pwdlClassName}
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
