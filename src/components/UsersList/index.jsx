import React, { Component } from 'react';
import UserCard from '../UserCard';

class UsersList extends Component {
  toggleUserSelect = (id) => {
    const { users, setUserSelector } = this.props;
    setUserSelector(
      users.map((user) => ({
        ...user,
        isSelected:
          user.id === id ? !user.isSelected : user.isSelected,
      }))
    );
  };
  userMapping = (user) => (
    <UserCard
      key={user.id}
      user={user}
      toggleUserSelect={this.toggleUserSelect}
    />
  );
  render() {
    const { users } = this.props;
    return (
      <section>
        <h1>List of users:</h1>
        {users.map(this.userMapping)}
      </section>
    );
  }
}

export default UsersList;
