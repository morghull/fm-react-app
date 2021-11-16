import React from 'react';

const UserCard = (props) => {
  const {
    user: { id, fname, isSelected },
    toggleUserSelect,
  } = props;
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
};

export default UserCard;
