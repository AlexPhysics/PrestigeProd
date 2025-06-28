import React from 'react';
import { GRADIENT_CLASS } from '../constants';

const TitleHeader = ({ title }) => {
  // Split around the word 'Prestige'
  const [before, after] = title.split('Prestige');

  return (
    <h2 className='text-4xl font-light text-center'>
      {before}
      <span className={`${GRADIENT_CLASS} bg-clip-text text-transparent`}>
        Prestige
      </span>
      {after}
    </h2>
  );
};

export default TitleHeader;
