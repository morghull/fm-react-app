import './App.css';
import React from 'react';

const List = (props) => {
  const { text, title, children } = props;
  return (
    <>
      <h2>{text}</h2>
      <ul title={title}>{children}</ul>
    </>
  );
};

function App(props) {
  return (
    <>
      <List title="111" text="text">
        <li>1</li>
        <li>2</li>
      </List>
    </>
  );
}
export default App;
