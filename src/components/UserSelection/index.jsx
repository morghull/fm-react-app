import React, { Component } from 'react';
import SelectedUsersList from '../SelectedUsersList';
import UsersList from '../UsersList';

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

class UserSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: usersDB.map((user) => ({ ...user, isSelected: false })),
    };
  }
  setUserSelector = (newUsers) => {
    this.setState({ users: newUsers });
  };
  render() {
    const { users } = this.state;
    return (
      <>
        <header>
          <SelectedUsersList users={users} />
        </header>
        <main>
          <UsersList
            users={users}
            setUserSelector={this.setUserSelector}
          />
        </main>
      </>
    );
  }
}

export default UserSelection;
