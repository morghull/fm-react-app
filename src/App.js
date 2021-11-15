import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Ciao from './components/Ciao';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 1, fname: 'ELon' },
        { id: 2, fname: 'Elen' },
        { id: 3, fname: 'Andre' },
        { id: 4, fname: 'Tim' },
        { id: 5, fname: 'Lee' },
      ],
    };
  }
  render() {
    const { users } = this.state;
    return (
      <>
        <Ciao name={fname} />
      </>
    );
  }
}

export default App;
