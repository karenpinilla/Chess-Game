import React from 'react';
import Icon from '../../assets/images/knight.svg';

import './Knight.styles.scss';

const Knight = ({ active, positions }) => {
  return (
    <div className='square-meta'>
      <Icon className='piece' />
    </div>
  );
};

export default Knight;
