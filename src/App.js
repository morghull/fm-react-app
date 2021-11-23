import './App.css';
import React from 'react';
import FlexContainer from './components/FlexContainer';
import Ciao from './components/CiaoSection/Ciao';

function App(props) {
  return (
    <>
      <FlexContainer dir="row">
        <Ciao id={1} name="Elon"/>
        <Ciao id={2} name="Eloen"/>
        <Ciao id={3} name="Tlon"/>
      </FlexContainer>
    </>
  );
}
export default App;
