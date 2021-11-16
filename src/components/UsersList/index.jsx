import React, { Component } from 'react';
import UserCard from '../UserCard';

const usersDB = [
  { id: 1, fname: 'ELon' },
  { id: 2, fname: 'Elen' },
  { id: 3, fname: 'Andre' },
  { id: 4, fname: 'Tim' },
  { id: 9, fname: 'Lee' },
  { id: 5, fname: 'Lao' },
  { id: 6, fname: 'Laod' },
  { id: 7, fname: 'Bob' },
];

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: usersDB.map((user) => ({ ...user, isSelected: false })),
    };
  }
  selectUser = (id) => {
    const { users } = this.state;
    //const newUsers = JSON.parse(JSON.stringify(users));
    this.setState({
      users: users.map((user) => ({
        ...user,
        isSelected:
          user.id === id ? !user.isSelected : user.isSelected,
      })),
    });
  };
  userMapping = (user) => (
    <UserCard key={user.id} user={user} selectUser={this.selectUser} />
  );
  render() {
    const { users } = this.state;
    return (
      <section>
        <h1>List of users:</h1>
        {users.map(this.userMapping)}
      </section>
    );
  }
}

export default UsersList;
