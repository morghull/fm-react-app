import './App.css';
import React from 'react';
import Calendar from './components/Calendar';
import Ciao from './components/CiaoSection/Ciao';

function App(props) {
  return (
    <>
      <Calendar/>
      <Ciao id="1" name="Elon"/>
    </>
  );
}
export default App;
