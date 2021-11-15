import React from 'react';
import Ciao from '../Ciao';

const CiaoList = (props) => {
  const { users } = props;
  const mapUserCiao = ({ fname, id }) => (
    <li key={id}>
      <Ciao key={id} id={id} name={fname} />
    </li>
  );
  return <ul>{users.map(mapUserCiao)}</ul>;
};

export default CiaoList;
