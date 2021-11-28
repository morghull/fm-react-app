import React, { Component } from 'react';

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
    fetch(
      `https://randomuser.me/api/?results=10&page=${currentPage}&seed=users`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          users: data.results,
        })
      )
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
    if (currentPage != prevState.currentPage) {
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
  render() {
    const { users, isFetching, isError, currentPage } = this.state;
    if (isError) {
      return <div>Error</div>;
    }
    if (isFetching) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h2>User List</h2>
        <button onClick={this.prevPage}>&lt;</button>
        <div>Current page is:{currentPage}</div>
        <button onClick={this.nextPage}>&gt;</button>
        <ul>
          {users.map((user) => (
            <li key={user.login.uuid}>{user.login.uuid}</li>
          ))}
        </ul>
      </div>
    );
  }
}

UserLoader.propTypes = {};

export default UserLoader;