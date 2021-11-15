import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Ciao from './components/Ciao';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  sortUsers = () => {
    const { users, isStraight } = this.state;
    const sortUsers = JSON.parse(JSON.stringify(users));
    sortUsers.sort((prev, next) =>
      isStraight ? next.id - prev.id : prev.id - next.id
    );
    this.setState({
      isStraight: !isStraight,
      users: sortUsers,
    });
  };
  render() {
    const { users, isStraight } = this.state;
    return (
      <>
        <p>{isStraight ? 'straight' : 'reverse'}</p>
        <button onClick={this.sortUsers}>sort</button>
        <ul>
          {users.map(({ fname, id }, i) => (
            <li key={i}>
              <Ciao key={id} name={fname} />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
