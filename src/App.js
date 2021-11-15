import logo from './logo.svg';
import './App.css';
import React from 'react';
import Greeting from './components/Greeting';

function App() {
  return (
    <>
      <Greeting prefix="hi, my dear" name="Elon Must" />
      <Greeting prefix="hi, some random" name="Tim Lee" />
      <Greeting prefix="hi, beautiful" name="Elen" />
    </>
  );
}

export default App;
