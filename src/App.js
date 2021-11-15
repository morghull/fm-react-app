import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Ciao from './components/Ciao';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAlphabet: true,
      isStraight: true,
      users: [
        { id: 1, fname: 'ELon' },
        { id: 2, fname: 'Elen' },
        { id: 3, fname: 'Andre' },
        { id: 4, fname: 'Tim' },
        { id: 9, fname: 'Lee' },
        { id: 5, fname: 'Lao' },
      ],
    };
  }
  sortUsersById = () => {
    const { users, isStraight, isAlphabet } = this.state;
    const sortUsers = JSON.parse(JSON.stringify(users));
    sortUsers.sort((prev, next) =>
      isStraight ? next.id - prev.id : prev.id - next.id
    );
    this.setState({
      isAlphabet: isAlphabet,
      isStraight: !isStraight,
      users: sortUsers,
    });
  };
  sortUsersByName = () => {
    const { users, isStraight, isAlphabet } = this.state;
    const sortUsers = JSON.parse(JSON.stringify(users));
    sortUsers.sort((prev, next) =>
      isAlphabet
        ? next.fname > prev.fname
          ? 1
          : next.fname < prev.fname
          ? -1
          : 0
        : prev.fname > next.fname
        ? 1
        : prev.fname < next.fname
        ? -1
        : 0
    );
    this.setState({
      isAlphabet: !isAlphabet,
      isStraight: isStraight,
      users: sortUsers,
    });
  };
  render() {
    const { users, isStraight, isAlphabet } = this.state;
    return (
      <>
        <p>
          <button onClick={this.sortUsersById}>
            sort by number {isStraight ? 'straight' : 'reverse'}
          </button>
          <button onClick={this.sortUsersByName}>
            sort by name {isAlphabet ? 'straight' : 'reverse'}
          </button>
        </p>
        <ul>
          {users.map(({ fname, id }) => (
            <li key={id}>
              <Ciao key={id} id={id} name={fname} />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
