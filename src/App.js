import logo from './logo.svg';
import './App.css';
import React from 'react';
import Ciao from './components/Ciao';

function App() {
  const user = {
    fname: 'ELon',
    sname: 'Musk',
  };
  return (
    <>
      <Ciao name="Elon Must" />
      <Ciao name="Tim Lee" />
      <Ciao name="Elen" />
      <Ciao name={`${user.fname} ${user.sname}`} />
    </>
  );
}

export default App;
