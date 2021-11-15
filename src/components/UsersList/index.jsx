import React, { Component } from 'react';

const usersDB = [
  { id: 1, fname: 'ELon' },
  { id: 2, fname: 'Elen' },
  { id: 3, fname: 'Andre' },
  { id: 4, fname: 'Tim' },
  { id: 9, fname: 'Lee' },
  { id: 5, fname: 'Lao' },
  { id: 6, fname: 'Laod' },
];

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = { users: usersDB };
  }
  render() {
    const { users } = this.state;
    return (
      <section>
        <h1>List of users:</h1>
        {users.map(({ id, fname }) => (
          <article>
            <h2>
              <span>{id})</span> {fname}
            </h2>
          </article>
        ))}
      </section>
    );
  }
}

export default UsersList;
