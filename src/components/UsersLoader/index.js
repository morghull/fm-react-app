import React, { Component } from 'react';
import getUsers from '../../api';
import Spiner from '../Spiner';
import config from '../../config';

class UserLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isFetching: false,
      isError: false,
      currentPage: 1,
      currentPageSize: config.DEFAULT_AMOUNT,
    };
    this.pageSizes = [5, 10, 15, 20];
  }
  getPage = () => {
    const { currentPage, currentPageSize } = this.state;
    getUsers({
      page: currentPage,
      results: currentPageSize,
      nat: 'gb',
    })
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
    const { currentPage, currentPageSize } = this.state;
    if (
      currentPage !== prevState.currentPage ||
      currentPageSize !== prevState.currentPageSize
    ) {
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
  pageSizeChange = (event) => {
    this.setState({
      currentPageSize: Number.parseInt(event.target.value),
    });
  };
  getUserJSX = (user) => (
    <li
      key={user.login.uuid}
    >{`${user.name.first} ${user.name.last}`}</li>
  );
  getPageSizeJSX = (size) => (
    <label key={size}>
      <input
        checked={this.state.currentPageSize === size}
        type="radio"
        name="results"
        value={`${size}`}
        onChange={this.pageSizeChange}
      />
      {size}
    </label>
  );
  render() {
    const { users, isFetching, isError, currentPage } = this.state;
    return (
      <div>
        <h2>User List</h2>
        <button onClick={this.prevPage}>&lt;</button>

        <button onClick={this.nextPage}>&gt;</button>
        <div>
          <span>Current page is:{currentPage}</span>
          {this.pageSizes.map(this.getPageSizeJSX)}
        </div>
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
