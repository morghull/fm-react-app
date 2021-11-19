import './App.css';
import React, { Component, useState } from 'react';
import Ciao from './components/CiaoSection/Ciao';
import UserCard from './components/UserCard';
import UsersList from './components/UsersList';
import CiaoList from './components/CiaoSection/CiaoList';

function App(props) {
  const user = {
    id: 1,
    name: 'Elen',
    fname: 'Elon',
  };
  const user1 = {
    id: 1,
    fname: 'Elon',
  };
  const user2 = {
    id: 2,
    fname: 'Elln',
  };
  
  return (
    <>
      <Ciao name={user.name} id={user.id} />
      <CiaoList users={[user]}/>
      <UserCard />
      <UsersList users={[user1,user2]}/>
    </>
  );
}

export default App;
