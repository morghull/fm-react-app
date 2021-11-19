import './App.css';
import React, { Component, useState } from 'react';
import SignInForm from './components/SignInForm';
import Ciao from './components/CiaoSection/Ciao';

function App(props) {
  const user = {
    id: 1,
    name: 'Elen',
  };
  return (
    <>
      <Ciao name={user} />
    </>
  );
}

export default App;
