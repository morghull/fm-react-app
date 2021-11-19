import React from 'react';
import PropTypes from 'prop-types';
import Ciao from '../Ciao';

/**
 *
 * @param {*} props
 * @param {array} props.users
 * @returns
 */
const CiaoList = (props) => {
  const { users } = props;
  const mapUserCiao = ({ fname, id }) => (
    <li key={id}>
      <Ciao key={id} id={id} name={fname} />
    </li>
  );
  return <ul>{users.map(mapUserCiao)}</ul>;
};

const userShape = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

CiaoList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(userShape)).isRequired,
};

export default CiaoList;
