import React, { Component } from 'react';
import getUsers from '../../api';
import Spiner from '../Spiner';

class UserLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isFetching: false,
      isError: false,
      currentPage: 1,
    };
  }
  getPage = () => {
    const { currentPage } = this.state;
    getUsers({ page: currentPage, results: 3, nat: 'gb' })
      .then((data) => {
        if (data.error) throw new Error('error');
        this.setState({
          users: data.results,
        });
      })
      .catch(() =>
        this.setState({
          isError: true,
        })
      )
      .finally(() =>
        this.setState({
          isFetching: false,
        })
      );
  };
  componentDidMount() {
    this.setState({
      isFetching: true,
    });
    this.getPage();
  }
  componentDidUpdate(prevProps, prevState) {
    const { currentPage } = this.state;
    if (currentPage !== prevState.currentPage) {
      this.getPage();
    }
  }
  prevPage = () => {
    if (this.state.currentPage > 1)
      this.setState((state) => ({
        currentPage: state.currentPage - 1,
      }));
  };
  nextPage = () =>
    this.setState((state) => {
      return {
        currentPage: state.currentPage + 1,
      };
    });
  getUserJSX = (user) => (
    <li key={user.login.uuid}>{JSON.stringify(user)}</li>
  );
  render() {
    const { users, isFetching, isError, currentPage } = this.state;
    return (
      <div>
        <h2>User List</h2>
        <button onClick={this.prevPage}>&lt;</button>
        <div>Current page is:{currentPage}</div>
        <button onClick={this.nextPage}>&gt;</button>
        <ul>
          {isFetching && <Spiner />}
          {isError && <div>Error</div>}
          {users.map(this.getUserJSX)}
        </ul>
      </div>
    );
  }
}

UserLoader.propTypes = {};

export default UserLoader;
