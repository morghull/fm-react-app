import React, { Component } from 'react';

class UserCard extends Component {
  render() {
    const {
      user: { id, fname, isSelected },
      toggleUserSelect,
    } = this.props;
    const styles = {
      border: isSelected ? '3px solid tomato' : 'undefined',
    };
    return (
      <article style={styles}>
        <h2>
          <span>{id})</span> {fname}
        </h2>
        <button
          onClick={() => {
            toggleUserSelect(id);
          }}
        >
          Select this user
        </button>
      </article>
    );
  }
}

export default UserCard;
