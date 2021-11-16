import React, { Component } from 'react';
import UserCard from '../UserCard';

const UsersList = (props) => {
  const { users, setUserSelector } = props;
  const toggleUserSelect = (id) => {
    setUserSelector(
      users.map((user) => ({
        ...user,
        isSelected:
          user.id === id ? !user.isSelected : user.isSelected,
      }))
    );
  };
  const userMapping = (user) => (
    <UserCard
      key={user.id}
      user={user}
      toggleUserSelect={toggleUserSelect}
    />
  );
  return (
    <section>
      <h1>List of users:</h1>
      {users.map(userMapping)}
    </section>
  );
};

export default UsersList;
