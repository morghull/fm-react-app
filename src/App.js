import './App.css';
import React, { Component, useState } from 'react';
import StopWatch from './components/StopWatch';
import Ciao from './components/CiaoSection/Ciao';

function App(props) {
  const [isVisible, setVisible] = useState(true);
  return (
    <>
      <Ciao name="Leee" id="1" />
      <button onClick={() => setVisible(!isVisible)}>switch</button>
      {isVisible ? <StopWatch /> : null}
    </>
  );
}

export default App;
