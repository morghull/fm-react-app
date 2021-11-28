import './App.css';
import React from 'react';

function App(props) {
  return (
    <>
      <button
        onClick={() => {
          window.close();
        }}
      >
        Close window
      </button>
      <button
        onClick={() => {
          window.open('https://webpack.js.org/');
        }}
      >
        Open window
      </button>
      <button
        onClick={() => {
          window.location.assign('https://webpack.js.org/');
        }}
      >
        Open assign
      </button>
      <button
        onClick={() => {
          window.location.replace('https://webpack.js.org/');
        }}
      >
        Open replace
      </button>
    </>
  );
}
export default App;
