import React from 'react';
import style from './FlexContainer.module.scss';

const FlexContainer = (props) => {
  const { children, dir } = props;
  return (
    <div
      className={[style.flex, style[`flex-dir-${dir}`]].join(' ')}
    >
      {children}
    </div>
  );
};

export default FlexContainer;
