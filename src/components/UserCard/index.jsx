import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @param {*} props
 * @param {object} props.user
 * @param {func} props.toggleUserSelect
 * @returns jsx
 */
const UserCard = (props) => {
  const {
    user: { id, fname, isSelected },
    toggleUserSelect = () => {},
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

export const userPropTypes = {
  id: PropTypes.number.isRequired,
  fname: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
};

UserCard.defaultProps = {
  userSelector: () => {},
  user: { id: 0, fname: 'Qwe', isSelected: true },
};

UserCard.propTypes = {
  user: PropTypes.shape(userPropTypes).isRequired,
  toggleUserSelect: PropTypes.func,
};

export default UserCard;
